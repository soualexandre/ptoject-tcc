import { action, computed, observable, runInAction } from 'mobx';
import { persist } from 'mobx-persist';
import { RequestApi } from '~/api';
import { strings } from '~/locale';
import { REQUEST_DEFAULT, REQUEST_FREIGHT_POINT } from '~/utils';
import { FIELDS_TYPE, PropsAutoComple } from '~/utils/types';
import {
  defaultAutoComplete,
  defaultCurrentPoint,
  defaultDataRequestAddress,
  defaultRequest,
} from './constants/request.contants';
import {
  getContructionParamsRequestCreate,
  getParamsCreateRequest,
} from './dto/request.dto';
import { getOtherServicesDTO } from './dto/services.dto';

export default class RequestStore {
  @persist('object')
  @observable
  dataRequest = defaultRequest;

  @observable
  dataAutoComplete = defaultAutoComplete;

  @observable
  freight = defaultAutoComplete;

  @observable
  dataConstructionRequest = {} as DataConstructionRequestParams;

  @observable
  dataEstimate = {} as EstimateRequestParams;

  @observable
  providerIdWeight = 0;

  @observable
  dataRequestAddress = defaultDataRequestAddress;

  @observable
  editCurrentPoint = defaultCurrentPoint;

  @computed get hasFirstPoint(): boolean {
    return this.dataRequest.collect.id === REQUEST_FREIGHT_POINT.FIRST_POINT;
  }

  @computed get hasMoreThenOneDestiny(): boolean {
    return this.dataRequest.delivery.length > 1;
  }

  @action
  autoComplete = async ({
    fields,
    load_specie_id,
    provider_type_id,
  }: PropsAutoComple): Promise<void> => {
    const data = await RequestApi.autoComplete({
      fields,
      load_specie_id,
      provider_type_id,
    });
    if (data.load_species) {
      runInAction(() => {
        const otherServices = getOtherServicesDTO(data);
        this.dataAutoComplete = { ...data, ...otherServices };
      });
    } else if (data.load_products) {
      this.dataAutoComplete.load_products = data.load_products;
    } else {
      runInAction(() => {
        const otherServices = getOtherServicesDTO(data);
        this.dataAutoComplete = { ...this.dataAutoComplete, ...otherServices };
      });
    }
  };

  @action
  getOtherServices = async (): Promise<void> => {
    const data = await RequestApi.autoComplete({
      fields: [FIELDS_TYPE.OTHER_SERVICES],
    });

    const autoCompleteRequest = getOtherServicesDTO(data);

    runInAction(() => {
      this.dataAutoComplete = {
        ...this.dataAutoComplete,
        ...autoCompleteRequest,
      };
    });
  };

  @action
  selectOtherService = (selected: boolean, id: number): void => {
    runInAction(() => {
      this.dataAutoComplete.other_services.forEach((service) => {
        if (service.id === id) service.is_selected = selected;
      });
    });
  };

  @action
  setOtherServiceInputValue = (value: string, id: number): void => {
    runInAction(() => {
      this.dataAutoComplete.other_services.forEach((service) => {
        if (service.id === id) service.input_value = value;
      });
    });
  };

  @action
  setOtherServiceInputAmount = (value: string, id: number): void => {
    runInAction(() => {
      this.dataAutoComplete.other_services.forEach((service) => {
        if (service.id === id) service.input_amount = value;
      });
    });
  };

  @action
  createRequest = async (): Promise<void> => {
    await RequestApi.createRequest(
      getParamsCreateRequest({
        dataConstructionRequest: this.dataConstructionRequest,
        address: this.dataRequestAddress,
      }),
    );
  };

  @action
  constructionRequest = async (info: {
    packaging: string;
    length: string;
    width: string;
    height: string;
    quantity: string;
    unit_weight: string;
    total: string;
  }): Promise<void> => {
    this.dataConstructionRequest = { ...this.dataConstructionRequest, ...info };
  };

  @action
  createNewPointRequest = async (
    newPoint: NewPointParams,
    type_address: string,
  ): Promise<void> => {
    const { delivery } = this.dataRequest;
    if (type_address === strings('collectionPoint.collect')) {
      runInAction(() => {
        this.dataRequest.collect = newPoint;
      });
    } else {
      delivery?.push(newPoint);
    }
  };

  @action
  addPointFromRequest = (return_to_start: boolean) => {
    const newDelivery = this.dataRequest.delivery.map((delivery) => ({
      action_type: delivery.action_type,
      delivery_address: delivery.collect_address,
      delivery_number: delivery.collect_number,
      delivery_reference: delivery.collect_reference,
      delivery_date: delivery.collect_date,
      delivery_time: delivery.collect_time,
      delivery_name: delivery.collect_name,
      delivery_phone: delivery.collect_phone,
      delivery_place_image: delivery.collect_place_image,
    }));
    runInAction(() => {
      this.dataConstructionRequest = {
        ...this.dataConstructionRequest,
        ...this.dataRequest.collect,
        delivery_points: newDelivery,
        return_to_start,
      };
    });
  };

  @action
  setAddressFromGeolocation = (item: AddressFromGeolocation) => {
    if (!this.hasFirstPoint) {
      this.dataRequestAddress.collect = item;
    } else {
      this.dataRequestAddress.delivery = item;
    }
  };

  @action
  setDesiredPrice = (item: number) => {
    this.dataConstructionRequest.desired_price = item;
  };

  @action
  vehicleRequest = async ({
    type_id,
    category_id,
    bodywork_id,
  }: {
    type_id: number;
    category_id: number;
    bodywork_id: number;
  }) => {
    runInAction(() => {
      this.dataConstructionRequest = {
        ...this.dataConstructionRequest,
        type_id,
        category_id,
        bodywork_id,
      };
    });
  };

  @action
  cargoRegisterRequest = async ({
    cargo_document,
    cargo_image,
    load_product_id,
    load_species_id,
  }: {
    cargo_document: ImageParams;
    cargo_image: ImageParams;
    load_product_id: number | null;
    load_species_id: number;
  }) => {
    runInAction(() => {
      this.dataConstructionRequest = {
        ...this.dataConstructionRequest,
        cargo_document,
        cargo_image,
        load_product_id,
        load_species_id,
      };
    });
  };

  @action
  setProvider = async ({
    provider_category,
    provider_type,
  }: {
    provider_category: number;
    provider_type: number;
  }) => {
    runInAction(() => {
      this.dataRequest = {
        ...this.dataRequest,
        provider_category,
        provider_type,
      };
    });
  };

  @action
  estimate = async () => {
    const data = await RequestApi.estimate(
      getContructionParamsRequestCreate({
        dataRequest: this.dataRequest,
        request: this.dataConstructionRequest,
        address: this.dataRequestAddress,
      }),
    );
    runInAction(() => {
      this.dataEstimate = data;
    });
  };

  @action
  paymentRequest = (payment_method: number) => {
    this.dataConstructionRequest = {
      ...this.dataConstructionRequest,
      payment_method: 0,
    };
  };

  @action
  providerTypeByWeight = async (weight: string) => {
    const { id } = await RequestApi.providerTypeByWeight(weight);

    runInAction(() => {
      this.providerIdWeight = id;
    });
  };

  @action
  editPointRequest = (newPoint: NewPointParams): void => {
    if (
      this.editCurrentPoint.typeAddress === strings('collectionPoint.collect')
    ) {
      runInAction(() => {
        this.dataRequest.collect = newPoint;
      });
    } else {
      runInAction(() => {
        this.dataRequest.delivery = this.dataRequest.delivery?.map((point) =>
          point.id === newPoint.id ? newPoint : point,
        );
      });
    }
  };

  @action
  loadEditCurrentPoint = async (
    currentPoint: NewPointParams,
    typeAddress: string,
  ) => {
    await runInAction(async () => {
      this.editCurrentPoint = {
        currentPoint,
        typeAddress,
      };
    });
  };

  @action
  removePointRequest = (id: number, typeAddress: string): void => {
    if (typeAddress === strings('collectionPoint.collect')) {
      return this.clearPoints();
    }
    const indexPoint = this.dataRequest.delivery.findIndex(
      (point) => point.id === id,
    );
    this.dataRequest.delivery.splice(indexPoint, 1);
  };

  @action
  onChangeProviderType = async (value: string): Promise<{ id: number }> => {
    let id = this.providerIdWeight;
    const provider_type = this.dataAutoComplete.provider_types.find(
      (products) => products.provider_type_name === value,
    );
    if (provider_type) id = provider_type?.id;

    await this.autoComplete({
      fields: [FIELDS_TYPE.PROVIDER_TYPE_CATEGORIES, FIELDS_TYPE.BODYWORKS],
      provider_type_id: id,
    });

    return { id };
  };

  @action
  onChangeBodyworks = (value: string): { id: number } => {
    const bodywork = this.dataAutoComplete.bodyworks.find(
      (products) => products.bodywork_name === value,
    );
    if (bodywork) {
      return { id: bodywork.id };
    }

    return {
      id: REQUEST_DEFAULT.ID_DEFAULT,
    };
  };

  @action
  autoCompleteProviderTypeCategories = (): {
    provider_types_category: string[];
    provider_types_category_id: number;
    body_works: string[];
    body_works_id: number;
  } => {
    const provider_types_category =
      this.dataAutoComplete.provider_type_categories.map(
        (value) => value.provider_type_category_name,
      );

    const body_works = this.dataAutoComplete.bodyworks.map(
      (value) => value.bodywork_name,
    );

    return {
      provider_types_category,
      provider_types_category_id:
        this.dataAutoComplete.provider_type_categories[0].id,
      body_works,
      body_works_id: this.dataAutoComplete.bodyworks[0].id,
    };
  };

  @action
  onChangeProviderTypeCategory = async (
    value: string,
  ): Promise<{ id: number }> => {
    const provider_type = this.dataAutoComplete.provider_type_categories.find(
      (products) => products.provider_type_category_name === value,
    );
    if (provider_type) {
      return {
        id: provider_type.id,
      };
    }

    return {
      id: REQUEST_DEFAULT.ID_DEFAULT,
    };
  };

  @action
  autoCompleteProviderType = async (): Promise<{
    id: number;
    provider_types_name: string[];
  }> => {
    const { provider_types } = this.dataAutoComplete;

    const provider_types_name = provider_types.map(
      (value) => value.provider_type_name,
    );
    const { id } = provider_types[0];

    await this.autoComplete({
      fields: [FIELDS_TYPE.PROVIDER_TYPE_CATEGORIES, FIELDS_TYPE.BODYWORKS],
      provider_type_id: id,
    });

    return {
      id,
      provider_types_name,
    };
  };

  @action
  tryRegisterOtherServices = () => {
    const { other_services } = this.dataAutoComplete;

    const isEmptyString = (value: string) => value === '';

    const formattedData = <OtherServiceParams[]>[];
    other_services.forEach((service) => {
      if (service.is_selected) {
        formattedData.push({
          id: service.id,
          value: !isEmptyString(service.input_value)
            ? Number(service.input_value)
            : service.default_value,
          amount: !isEmptyString(service.input_amount)
            ? Number(service.input_amount)
            : 1,
        });
      }
    });
    runInAction(() => {
      this.dataConstructionRequest = {
        ...this.dataConstructionRequest,
        other_services: formattedData,
      };
    });
  };

  @action
  clearRequest = () => {
    this.dataRequest = defaultRequest;
  };

  @action
  clearRequestAddress = () => {
    this.dataRequestAddress = defaultDataRequestAddress;
  };

  @action
  clearPoints = () => {
    this.dataRequest.collect = {} as NewPointParams;
    this.dataRequest.delivery = [] as NewPointParams[];
    this.dataRequestAddress = defaultDataRequestAddress;
  };

  @action
  clearEditCurrentPoint = () => {
    this.editCurrentPoint = defaultCurrentPoint;
  };
}
