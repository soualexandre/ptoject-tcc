import React, { FC, useState } from 'react';
import { round } from '~/modules';
import Touchable from '../Touchable';
import { StarOff, StarOn, Wrapper } from './styles';

type Props = {
  rating?: number;
  size?: number;
  isPressable?: boolean;
  onChangeRating?(rating: number): void;
};

const array = [1, 2, 3, 4, 5];
const RatingStars: FC<Props> = ({
  rating = 0,
  isPressable = false,
  size = 25,
  onChangeRating,
}) => {
  const [stars, setStars] = useState(round(rating));

  const onRating = (rating: number) => {
    setStars(rating);
    if (onChangeRating) onChangeRating(rating);
  };
  return (
    <Wrapper>
      {array.map((item) => {
        if (item === stars || item < stars) {
          return (
            <Touchable onPress={() => onRating(item)} disabled={!isPressable}>
              <StarOn size={size} />
            </Touchable>
          );
        }
        return (
          <Touchable onPress={() => onRating(item)} disabled={!isPressable}>
            <StarOff size={size} />
          </Touchable>
        );
      })}
    </Wrapper>
  );
};

export default RatingStars;
