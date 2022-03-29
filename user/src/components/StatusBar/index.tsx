import React from 'react';
import { StatusBar as StatusBarCustom } from 'react-native';
import { Wrapper } from './styles';

type PropsStatusBar = {
  colorStatusBar?: string;
};

const StatusBar: React.FC<PropsStatusBar> = ({ colorStatusBar = '#fff' }) => (
  <Wrapper colorStatusBar={colorStatusBar}>
    <StatusBarCustom
      barStyle={colorStatusBar === '#fff' ? 'dark-content' : 'light-content'}
    />
  </Wrapper>
);

export default StatusBar;
