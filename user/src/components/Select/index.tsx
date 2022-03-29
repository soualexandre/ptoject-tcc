import React, { FC } from 'react';
import { IconRight } from '~/assets';
import { RNPickerSelect } from '~/modules';
import { Wrapper } from './styles';

type SelectValuesType = {
  label: string;
  value: number | string;
};

type Props = {
  onChange(value: string): void;
  options: SelectValuesType[];
  placeholder?: string;
  disabled?: boolean;
};

const Select: FC<Props> = ({
  onChange,
  options,
  placeholder = 'Selecione uma opção',
  disabled = false,
  ...props
}) => {
  const handleChange = (value: string | null) => {
    const newValue = value || '';
    onChange(newValue);
  };
  return (
    // @ts-ignore
    <Wrapper style={{ borderWidth: 2, borderColor: 'red' }}>
      <RNPickerSelect
        placeholder={{ label: 'teste', value: null }}
        onValueChange={handleChange}
        items={[{ value: 'teste', label: 'teste233' }]}
        useNativeAndroidPickerStyle
      />
      <IconRight color="white" />
    </Wrapper>
  );
};

export default Select;
