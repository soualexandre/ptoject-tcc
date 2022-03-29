import React, { FC } from 'react';
import { CardChooseDriver, If } from '~/components';
import { isEmpty } from '~/modules';
import { FreightListBase, Separator } from './styles';

type Props = {
  drivers: ChooseDrivers[];
};

const renderSeparator = (): JSX.Element => <Separator />;

const ChooseDriverList: FC<Props> = ({ drivers }) => (
  <If condition={!isEmpty(drivers)}>
    <FreightListBase
      data={drivers}
      keyExtractor={(item) => item.provider.provider_id.toString()}
      ItemSeparatorComponent={renderSeparator}
      renderItem={({ item: driver }) => <CardChooseDriver driver={driver} />}
    />
  </If>
);

export default ChooseDriverList;
