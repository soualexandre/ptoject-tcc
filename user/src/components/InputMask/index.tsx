import React, { FC } from 'react';
import { Icon } from '~/modules';
import { TouchableInput } from './styles';

type Props = {
  toggle: () => void;
  state: boolean;
  position: number;
};

const InputMask: FC<Props> = ({ toggle, state, position }) => {
  const getIconName = (state: boolean) => (state ? 'eye-off' : 'eye');

  return (
    <TouchableInput onPress={toggle} position={position}>
      <Icon name={getIconName(state)} size={28} color="grey" />
    </TouchableInput>
  );
};

export default InputMask;
