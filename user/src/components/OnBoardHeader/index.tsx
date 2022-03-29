import * as React from 'react';
import { IconClose, IconLeft } from '~/assets';
import { isEmpty } from '~/modules';
import If from '../If';
import {
  Description,
  Title,
  Touchable,
  TouchableArea,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  description: string;
  onPress(): void;
  isArrowButton: boolean;
  colorIcon?: string;
  colorTitle?: string;
};

const OnboardingHeader: React.FC<Props> = ({
  title,
  onPress,
  description,
  isArrowButton,
  colorIcon,
  colorTitle,
  ...props
}) => (
  <Wrapper {...props}>
    <Touchable onPress={onPress}>
      <If condition={isArrowButton}>
        <TouchableArea>
          <IconLeft />
        </TouchableArea>
      </If>
      <If condition={!isArrowButton}>
        <TouchableArea>
          <IconClose color={colorIcon} />
        </TouchableArea>
      </If>
    </Touchable>

    <Title colorTitle={colorTitle}>{title}</Title>
    <If condition={!isEmpty(description)}>
      <Description>{description}</Description>
    </If>
  </Wrapper>
);

export default OnboardingHeader;
