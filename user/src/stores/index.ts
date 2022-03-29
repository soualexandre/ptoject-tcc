import { create } from 'mobx-persist';
import { AsyncStorage } from '~/modules';
import FreightStore from './freight.store';
import RequestStore from './request.store';
import UserStore from './user.store';

class RootStore {
  user: UserStore;

  request: RequestStore;

  freight: FreightStore;

  constructor() {
    this.user = new UserStore();
    this.request = new RequestStore();
    this.freight = new FreightStore();
  }
}

const hydrate = create({ storage: AsyncStorage });
const store = new RootStore();

hydrate('user', store.user);

export { RootStore, UserStore, FreightStore, RequestStore };

export default store;
