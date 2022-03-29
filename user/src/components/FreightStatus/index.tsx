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
        values: [5, 40, 77, 81, 43],
        label: 'Aguardando início',
        config: {
          drawValues: false,
          colors: [processColor('red')],
        },
      },
      {
        values: [40, 5, 50, 23, 79],
        label: 'Iniciado',
        config: {
          drawValues: false,
          colors: [processColor('blue')],
        },
      },
      {
        values: [10, 55, 35, 90, 82],
        label: 'Atrasado',
        config: {
          drawValues: false,
          colors: [processColor('green')],
        },
      },
      {
        values: [60, 25, 30, 50, 100],
        label: 'Entregue',
        config: {
          drawValues: false,
          colors: [processColor('black')],
        },
      },
    ],
    config: {
      barWidth: 0.05,
      group: {
        fromX: -0.4,
        groupSpace: 0.4,
        barSpace: 0.1,
      },
    },
  };

  const xAxis = {
    valueFormatter: ['Abr', 'Mai', 'Jun', 'Jul', 'Ago'],
    position: 'BOTTOM',
    drawGridLines: false,
    drawAxisLine: false,
    granularityEnabled: true,
    granularity: 1,
    textColor: processColor('#00000097'),
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

  const marker = {
    enabled: false,
  };

  const handleLabelOption = (seleted: string): void => {};

  return (
    <Wrapper {...props}>
      <SelectOptionsTab
        options={options}
        handleLabelOption={handleLabelOption}
        title={strings('freightStatus.title')}
      />

      <BarChart
        style={{ flex: 1 }}
        data={data}
        legend={{
          enabled: false,
        }}
        // @ts-ignore
        xAxis={xAxis}
        yAxis={yAxis}
        drawValueAboveBar={false}
        highlights={[
          { x: 1, y: 40 },
          { x: 2, y: 50 },
        ]}
        marker={marker}
      />
    </Wrapper>
  );
};

export default FreightStatus;
