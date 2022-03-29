import React, { FC } from 'react';
import { Linking } from 'react-native';
import { CardFreightDetail, FreightRating, If } from '~/components';
import { strings } from '~/locale';
import { isEmpty, observer } from '~/modules';
import ChooseDriverList from './ChooseDriverList';
import { FormRating } from './formValue';
import { Container, FreightTracking, Title, Wrapper } from './styles';

type Props = {
  freight: FreightDetails;
  driver: ChooseDrivers[];
  freightEnded: boolean;
  freightInProgress: boolean;
  onSubmitRating: (values: FormRating) => Promise<void>;
  isLoading: boolean;
  trackingUrl: string;
};

const FreightDetail: FC<Props> = ({
  freight,
  driver,
  freightEnded,
  freightInProgress,
  onSubmitRating,
  isLoading,
  trackingUrl,
}) => (
  <Wrapper
    title={strings('freightDetail.title')}
    fullWidth
    isArrowButton
    hasScroll
    isMainSimpleHeader
  >
    <If condition={!isEmpty(freight)}>
      <Container>
        <Title>{strings('freightDetail.cargoInfo')}</Title>
        <CardFreightDetail freight={freight} />
        <ChooseDriverList drivers={driver} />
        <If condition={freightEnded}>
          <FreightRating onButtonPress={onSubmitRating} isLoading={isLoading} />
        </If>
        <If condition={freightInProgress}>
          <FreightTracking onPress={() => Linking.openURL(trackingUrl)}>
            {strings('tracking.title')}
          </FreightTracking>
        </If>
      </Container>
    </If>
  </Wrapper>
);

export default observer(FreightDetail);
