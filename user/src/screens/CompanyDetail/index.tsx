import * as React from 'react';
import { Text } from 'react-native-paper';
import { observer } from '~/modules';
import { useRoute } from '~/navigation';
import { FREIGHT_STATUS, useAlerts, useStores } from '~/utils';
import { Wrapper } from './styles';

export const CompanyDetail: React.FC = () => {
  const { params } = useRoute<FreightDetailsParams>();
  const { company } = params;
  console.log(company);
  return (
    <Wrapper isMainSimpleHeader fullWidth showSearchInput isFixed showAvatar>
      <Text>{company.id}</Text>
    </Wrapper>
  );
};

export default observer(CompanyDetail);
