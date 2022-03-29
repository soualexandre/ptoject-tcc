import React, { FC, useEffect, useState } from 'react';
import { IconInfo } from '~/assets';
import {
  SelectionOptions,
  Text,
  Title,
  TitleAndInfo,
  Type,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  options: { title: string; isSeleted: boolean }[];
  handleLabelOption(labelSeleted: string): void;
};

const ShowSelection: FC<Props> = ({ title, options, handleLabelOption }) => {
  const [refresh, setRefresh] = useState(false);
  const seletedLabel = (title: string) => {
    options.forEach((value) => {
      value.title === title
        ? (value.isSeleted = true)
        : (value.isSeleted = false);
    });
    setRefresh(!refresh);
    handleLabelOption(title);
  };

  useEffect(() => {}, [refresh]);
  return (
    <Wrapper>
      <TitleAndInfo>
        <Text>{title}</Text>
        <IconInfo />
      </TitleAndInfo>

      <SelectionOptions>
        {options.map((value, index) => (
          <Type
            key={index}
            onPress={() => seletedLabel(value.title)}
            focus={value.isSeleted}
          >
            <Title focus={value.isSeleted}>{value.title}</Title>
          </Type>
        ))}
      </SelectionOptions>
    </Wrapper>
  );
};

export default ShowSelection;
