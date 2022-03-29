import { action, computed, observable, runInAction } from 'mobx';
import { FreightApi } from '~/api';
import { isEmpty } from '~/modules';
import { FREIGHT_STATUS } from '~/utils';

const defaultFreights: Freight[] = [];

const defaultFreightDetail = {} as FreightDetails;

const defaultChooseDrivers: ChooseDrivers[] = [];

export default class FreightStore {
  @observable
  freights: Freight[] = defaultFreights;

  @observable
  freightsDetails: FreightDetails = defaultFreightDetail;

  @observable
  chooseDrivers: ChooseDrivers[] = defaultChooseDrivers;

  @observable
  hasConcludedFreight = false;

  @computed get hasFreight(): boolean {
    return !isEmpty(this.freights);
  }

  @action
  getHasConcludedFreight = () => {
    const concludedFreights = this.freights.filter(
      (freight) => freight.status_id === FREIGHT_STATUS.DELIVERED,
    );
    !isEmpty(concludedFreights)
      ? (this.hasConcludedFreight = true)
      : (this.hasConcludedFreight = false);
  };

  @action
  getFreightsHistory = async () => {
    const data = await FreightApi.getFreightsHistory();
    runInAction(() => {
      this.freights = data;
    });
  };

  @action
  clearFreights = () => {
    this.freights = defaultFreights;
  };

  @action
  getSearchHistory = async (id: string) => {
    const data = await FreightApi.getSearchHistory(id);
    this.freights = [data];
  };

  @action
  getHistoryDetail = async (id: number) => {
    const freights = await FreightApi.getHistoryDetail(id);

    runInAction(() => {
      this.freightsDetails = freights;
    });
  };

  @action
  getChooseDriver = async (id: number) => {
    const drivers = await FreightApi.getChooseDriver(id);

    runInAction(() => {
      this.chooseDrivers = drivers;
    });
  };

  @action
  acceptDeclineDriver = async (
    confirm: number,
    request_id: number,
    provider_id: number,
  ) => {
    const drivers = await FreightApi.acceptDeclineDriver(
      confirm,
      request_id,
      provider_id,
    );
    runInAction(() => {
      this.chooseDrivers = drivers;
    });
  };

  @action
  getFilterHistory = async (params: FreightFilterParams) => {
    const data = await FreightApi.getFilterHistory(params);

    runInAction(() => {
      this.freights = data;
    });
  };

  @action
  clearFreightDetail = () => {
    this.freightsDetails = defaultFreightDetail;
  };

  @action
  setFreightRating = async ({
    request_id,
    rating,
    comment,
  }: FreightRating): Promise<void> => {
    await FreightApi.setFreightRating({ request_id, rating, comment });
  };
}
