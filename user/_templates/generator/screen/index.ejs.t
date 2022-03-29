---
to: src/screens/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React, { FC } from 'react';
import { observer } from 'mobx-react';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>';


const <%= h.changeCase.pascal(name) %>Container: FC = () => {
  return <<%= h.changeCase.pascal(name) %> />;
};

export default observer(<%= h.changeCase.pascal(name) %>Container);

