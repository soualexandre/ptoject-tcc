import * as React from 'react';
import If from '../If';
import {
  Close,
  Container,
  Left,
  Title,
  Touchable,
  TouchableArea,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  onPress(): void;
  isCloseButton: boolean;
};

const MainOnBoardingHeader: React.FC<Props> = ({
  title,
  onPress,
  isCloseButton,
  ...props
}) => (
  <Wrapper {...props}>
    <Container>
      <Touchable onPress={onPress}>
        <If condition={!isCloseButton}>
          <TouchableArea>
            <Left />
          </TouchableArea>
        </If>
        <If condition={isCloseButton}>
          <TouchableArea>
            <Close />
          </TouchableArea>
        </If>
      </Touchable>
      <Title>{title}</Title>
    </Container>
  </Wrapper>
);

export default MainOnBoardingHeader;
