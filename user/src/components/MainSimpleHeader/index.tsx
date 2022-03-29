import * as React from 'react';
import If from '../If';
import {
  BlackView,
  Close,
  Container,
  IconArea,
  Left,
  Title,
  Touchable,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  onPress(): void;
  isCloseButton: boolean;
};

const MainSimpleHeader: React.FC<Props> = ({
  title,
  onPress,
  isCloseButton,
  ...props
}) => (
  <Wrapper {...props}>
    <Container>
      <Touchable onPress={onPress}>
        <If condition={!isCloseButton}>
          <IconArea>
            <Left />
          </IconArea>
        </If>
        <If condition={isCloseButton}>
          <IconArea>
            <Close />
          </IconArea>
        </If>
      </Touchable>
      <Title>{title}</Title>
      <BlackView />
    </Container>
  </Wrapper>
);

export default MainSimpleHeader;
