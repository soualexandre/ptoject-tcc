import * as React from 'react';
import { isIOS, isSmallDevice } from '~/utils';
import { Wrapper } from './styles';

type Behavior = 'height' | 'position' | 'padding' | undefined;

type Props = {
  behavior?: Behavior;
  enabled?: boolean;
  keyboarVerticalOffset?: number;
  keyboardShouldAvoid?: boolean;
};

const defaultBehavior: Behavior = isIOS()
  ? 'padding'
  : isSmallDevice
  ? 'height'
  : undefined;

const KeyboardAvoidingView: React.FC<Props> = ({
  behavior = defaultBehavior,
  keyboardShouldAvoid = true,
  keyboarVerticalOffset = 0,
  ...props
}) => (
  <Wrapper
    {...props}
    behavior={behavior}
    enabled={keyboardShouldAvoid}
    keyboardVerticalOffset={keyboarVerticalOffset}
  />
);

export default KeyboardAvoidingView;
