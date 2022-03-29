import React, { FC } from 'react';
import { processColor } from 'react-native';
import { strings } from '~/locale';
import { BarChart } from '~/modules';

import SelectOptionsTab from '../SelectOptionsTab';
import { Wrapper } from './styles';

const FreightStatus: FC = ({ ...props }) => {
  const options = [
    { title: strings('showSelection.week'), isSeleted: false },
    { title: strings('showSelection.month'), isSeleted: true },
    { title: strings('showSelection.year'), isSeleted: false },
  ];

  const data = {
    dataSets: [
      {
        values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }],
        label: 'Bar dataSet',
        config: {
          color: processColor('#4070CE'),
          barShadowColor: processColor('black'),
          highlightAlpha: 0,
        },
      },
    ],

    config: {
      barWidth: 0.7,
    },
  };

  const xAxis = {
    valueFormatter: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    position: 'BOTTOM',
    drawGridLines: false,
    drawAxisLine: false,
    granularityEnabled: true,
    granularity: 1,
  };

  const yAxis = {
    left: {
      drawGridLines: false,
      drawAxisLine: false,
      drawLabels: true,
      valueFormatter: 'R$ ',
      textColor: processColor('#00000098'),
    },
    right: {
      gridColor: processColor('#00000045'),
      drawAxisLine: false,
      drawLabels: false,
    },
  };

  const handleLabelOption = (seleted: string): void => {};

  return (
    <Wrapper {...props}>
      <SelectOptionsTab
        options={options}
        handleLabelOption={handleLabelOption}
        title={strings('typeService.title')}
      />

      <BarChart
        style={{ flex: 1 }}
        data={data}
        legend={{
          enabled: false,
        }}
        // @ts-ignore
        yAxis={yAxis}
        // @ts-ignore
        xAxis={xAxis}
        drawValueAboveBar
        highlights={[{ x: 3 }, { x: 6 }]}
      />
    </Wrapper>
  );
};

export default FreightStatus;
