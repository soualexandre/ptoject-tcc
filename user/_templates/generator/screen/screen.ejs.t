---
to: src/screens/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { FC } from 'react';
import { Heading, Wrapper } from './styles';

type Props = {};

const <%= h.changeCase.pascal(name) %>: FC<Props> = () => (
  <Wrapper>
    <Heading><%= h.changeCase.pascal(name) %></Heading>
  </Wrapper>
);

export default <%= h.changeCase.pascal(name) %>;
