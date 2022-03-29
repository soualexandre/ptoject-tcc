import React, { FC } from 'react';
import { processColor } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import { strings } from '~/locale';

import SelectOptionsTab from '../SelectOptionsTab';
import { Wrapper } from './styles';

const ValuesServices: FC = ({ ...rest }) => {
  const options = [
    { title: strings('showSelection.week'), isSeleted: false },
    { title: strings('showSelection.month'), isSeleted: true },
    { title: strings('showSelection.year'), isSeleted: false },
  ];

  const data = {
    dataSets: [
      {
        values: [
          {
            x: 0,
            y: 20,
          },
          { x: 1, y: 25 },
          { x: 2, y: 0 },
          { x: 3, y: 15 },
          { x: 4, y: 0 },
          { x: 5, y: 10 },
        ],
        label: 'service',
        config: {
          lineWidth: 3,
          drawValues: false,
          circleRadius: 0,
          color: processColor('blue'),
          fillColor: processColor('white'),
        },
      },
    ],
  };
  const marker = {
    enabled: false,
  };

  const yAxis = {
    left: {
      drawGridLines: false,
      drawAxisLine: false,
      drawLabels: true,
      textColor: processColor('#00000098'),
    },
    right: {
      gridColor: processColor('#00000045'),
      drawAxisLine: false,
      drawLabels: false,
    },
  };

  const xAxis = {
    valueFormatter: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    position: 'BOTTOM',
    drawGridLines: false,
    granularityEnabled: true,
    granularity: 1,
    textColor: processColor('#00000097'),
  };

  const handleLabelOption = (seleted: string): void => {};

  return (
    <Wrapper {...rest}>
      <SelectOptionsTab
        options={options}
        handleLabelOption={handleLabelOption}
        title={strings('valueService.title')}
      />

      <LineChart
        style={{ flex: 1 }}
        data={data}
        marker={marker}
        yAxis={yAxis}
        // @ts-ignore
        xAxis={xAxis}
        borderWidth={10}
        legend={{
          enabled: false,
        }}
      />
    </Wrapper>
  );
};

export default ValuesServices;
