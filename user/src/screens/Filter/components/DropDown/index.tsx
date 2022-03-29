// @ts-nocheck
import React, { FC } from 'react';
import { IconRight } from '~/assets';
import { strings } from '~/locale';
import { Select, Title, Wrapper } from './styles';

type Props = {
  title: string;
  defaultValue?: string | number;
  items: string[];
  onChangeItem(selectedItem: string): void;
};

const DropDown: FC<Props> = ({
  title,
  items,
  onChangeItem,
  defaultValue,
  ...props
}) => (
  <Wrapper {...props}>
    <Title>{title}</Title>
    <Select
      data={items}
      dropdownIconPosition="right"
      onSelect={onChangeItem}
      defaultValue={defaultValue}
      defaultButtonText={strings('history.filter.selectOption')}
      renderDropdownIcon={() => <IconRight />}
    />
  </Wrapper>
);

export default DropDown;
