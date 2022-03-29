// @ts-nocheck
import React, { FC } from 'react';
import { IconRight } from '~/assets';
import { Error, Select, Title, Wrapper } from './styles';

type Props = {
  title: string;
  defaultValue?: string;
  items: string[] | number[];
  disabled?: boolean;
  onChangeItem(selectedItem: string): void;
  error?: string;
};

const DropDown: FC<Props> = ({
  title,
  items,
  onChangeItem,
  defaultValue,
  disabled = false,
  error,
  ...props
}) => (
  <>
    <Wrapper {...props}>
      <Title>{title}</Title>
      <Select
        data={items}
        dropdownIconPosition="right"
        onSelect={onChangeItem}
        defaultValue={defaultValue || items[0]}
        renderDropdownIcon={() => <IconRight />}
        disabled={disabled}
        defaultButtonText={defaultValue}
      />
    </Wrapper>
    <Error>{error}</Error>
  </>
);

export default DropDown;
