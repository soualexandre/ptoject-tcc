import React, { useState } from 'react';
import { strings } from '~/locale';
import { Modal, isEmpty, isNull } from '~/modules';
import { useStores } from '~/utils';
import If from '../If';
import RatingStars from '../RatingStars';
import TextInput from '../TextInput';
import {
  Accept,
  DeclineCard,
  Description,
  RatedTitle,
  RatedWrapper,
  RatingButton,
  RatingComment,
  RowButtonModal,
  Text,
  TextDecline,
  Title,
  UnratedWrapper,
  WrapperModal,
} from './styles';

export type FreightRatingParams = {
  stars: number;
  comment: string;
};

type Props = {
  onButtonPress(params: FreightRatingParams): void;
  isLoading: boolean;
};

const FreightRating: React.FC<Props> = ({ onButtonPress, isLoading }) => {
  const { freight } = useStores();
  const { provider_rating, rating_comment } = freight.freightsDetails.request;
  const [comment, setComment] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [stars, setStars] = useState(1);
  const hasRating = !isEmpty(provider_rating) || !isNull(provider_rating);
  const handleChangeComment = (value: string) => {
    setComment(value);
  };

  const handleChangeStars = (value: number) => {
    setStars(value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const onSubmit = () => {
    onButtonPress({ comment, stars });
  };

  return (
    <>
      <If condition={!hasRating}>
        <UnratedWrapper>
          <Title>{strings('rating.unratedTitle')}</Title>
          <Description>{strings('rating.unratedDescription')}</Description>
          <RatingStars
            isPressable
            onChangeRating={handleChangeStars}
            size={28}
          />
          <TextInput
            label={strings('rating.inputLabel')}
            value={comment}
            onChangeText={handleChangeComment}
          />
          <RatingButton onPress={handleOpenModal}>
            {strings('rating.buttonLabel')}
          </RatingButton>
        </UnratedWrapper>
      </If>
      <If condition={hasRating}>
        <RatedWrapper>
          <RatedTitle>{strings('rating.ratedTitle')}</RatedTitle>
          <RatingStars rating={provider_rating} />
          <RatingComment>{rating_comment}</RatingComment>
        </RatedWrapper>
      </If>
      <Modal isVisible={modalVisible}>
        <WrapperModal>
          <Text>
            {strings('rating.modalLabel1')}
            {stars}
            {strings('rating.modalLabel2')}
          </Text>

          <RowButtonModal>
            <DeclineCard onPress={handleCloseModal}>
              <TextDecline>{strings('chooseDriver.no')}</TextDecline>
            </DeclineCard>
            <Accept onPress={onSubmit} isLoading={isLoading}>
              {strings('chooseDriver.yes')}
            </Accept>
          </RowButtonModal>
        </WrapperModal>
      </Modal>
    </>
  );
};
export default FreightRating;
