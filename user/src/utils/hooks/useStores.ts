import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import store from '~/stores';

export const useStores = (): typeof store =>
  useContext(MobXProviderContext).rootStore;
