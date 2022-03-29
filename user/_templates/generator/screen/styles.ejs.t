---
to: src/screens/<%= h.changeCase.pascal(name) %>/styles.ts
---
import styled from 'styled-components/native';
import { ScreenWrapper, Typography } from '~/components';

export const Wrapper = styled(ScreenWrapper)`
  justify-content: center;
  flex: 1;
`;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: #000;
`;
