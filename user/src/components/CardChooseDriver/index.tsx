import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { strings } from '~/locale';
import { Modal } from '~/modules';
import { DRIVER_ACCEPT, useAlerts, useStores } from '~/utils';
import If from '../If';
import RatingStars from '../RatingStars';

import {
  Accept,
  Column,
  ColumnDistance,
  ColumnHeading,
  ContainerProvider,
  DeclineCard,
  Heading,
  Image,
  Row,
  RowBody,
  RowButtonModal,
  Tag,
  Text,
  TextDecline,
  Title,
  WrapperModal,
} from './styles';

type Props = {
  driver: ChooseDrivers;
};
const CardChooseDriver: FC<Props> = ({ driver }) => {
  const { freight } = useStores();
  const { showError } = useAlerts();
  const [modalVisible, setModalVisible] = useState(false);
  const [statusAccept, setStatusAccept] = useState<DRIVER_ACCEPT>(
    DRIVER_ACCEPT.DECLINE,
  );

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleAccept = () => {
    setStatusAccept(DRIVER_ACCEPT.ACCEPT);
    handleOpenModal();
  };

  const handleDecline = () => {
    setStatusAccept(DRIVER_ACCEPT.DECLINE);
    handleOpenModal();
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const chooseDriver = async () => {
    try {
      await freight.acceptDeclineDriver(
        statusAccept,
        freight.freightsDetails.request.request_id,
        driver.provider.provider_id,
      );
    } catch ({ message }) {
      showError(message);
    }
  };

  const isProviderAccept =
    driver.provider.meta_status === DRIVER_ACCEPT.STATUS_ACCEPT;
  return (
    <>
      <If condition={!isProviderAccept}>
        <Title>{strings('freightDetail.isEmptyProvider')}</Title>
      </If>
      <If condition={isProviderAccept}>
        <Title>{strings('freightDetail.acceptProvider')}</Title>
      </If>
      <ContainerProvider>
        <Row>
          <Image source={{ uri: driver.provider.provider_photo }} />
          <ColumnHeading>
            <Heading>{strings('chooseDriver.name')}</Heading>
            <Text>{driver.provider.provider_name}</Text>
          </ColumnHeading>
        </Row>
        <If condition={!isProviderAccept}>
          <Tag status={1} label={strings('chooseDriver.acceptProvider')} />
        </If>
        <Row>
          <Column>
            <Heading>{strings('chooseDriver.classification')}</Heading>
            <RowBody>
              <RatingStars rating={driver.provider.provider_rating} size={17} />
            </RowBody>
          </Column>
          <ColumnDistance>
            <Heading>{strings('chooseDriver.distance')}</Heading>
            <Text>{driver.provider.provider_distance}</Text>
          </ColumnDistance>
        </Row>
        <If condition={isProviderAccept}>
          <Row>
            <DeclineCard onPress={handleDecline}>
              <TextDecline>{strings('chooseDriver.decline')}</TextDecline>
            </DeclineCard>
            <Accept onPress={handleAccept}>
              {strings('chooseDriver.accept')}
            </Accept>
          </Row>
        </If>
      </ContainerProvider>
      <Modal isVisible={modalVisible}>
        <WrapperModal>
          <If condition={statusAccept === DRIVER_ACCEPT.ACCEPT}>
            <Text>
              {strings('chooseDriver.acceptModal')}
              {driver.provider.provider_name}
              {strings('chooseDriver.what')}
            </Text>
          </If>
          <If condition={statusAccept === DRIVER_ACCEPT.DECLINE}>
            <Text>
              {strings('chooseDriver.declineModal')}
              {driver.provider.provider_name}
              {strings('chooseDriver.what')}
            </Text>
          </If>
          <RowButtonModal>
            <DeclineCard onPress={handleCloseModal}>
              <TextDecline>{strings('chooseDriver.no')}</TextDecline>
            </DeclineCard>
            <Accept onPress={chooseDriver}>
              {strings('chooseDriver.yes')}
            </Accept>
          </RowButtonModal>
        </WrapperModal>
      </Modal>
    </>
  );
};
export default observer(CardChooseDriver);
