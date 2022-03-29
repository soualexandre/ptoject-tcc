import { strings } from '~/locale';

type ValueProps = {
  type_address: string;
  collect_address: string;
  collect_number: string;
  collect_reference: string;
  collect_date: string;
  collect_time: string;
  collect_name: string;
  collect_phone: string;
};

export const getLabelDate = (values: ValueProps): string =>
  values.type_address === strings('collectionPoint.collect')
    ? strings('collectionPoint.inputDateColletion')
    : strings('collectionPoint.inputDateDelivery');

export const getLabelCollectMan = (values: ValueProps): string =>
  values.type_address === strings('collectionPoint.collect')
    ? strings('collectionPoint.inputNameDeliveryMan')
    : strings('collectionPoint.inputNameCollectMan');

export const getLabelCollectPhoneMan = (values: ValueProps): string =>
  values.type_address === strings('collectionPoint.collect')
    ? strings('collectionPoint.inputPhoneDeliveryMan')
    : strings('collectionPoint.inputPhoneCollectMan');

export const getLabelTime = (values: ValueProps): string =>
  values.type_address === strings('collectionPoint.collect')
    ? strings('collectionPoint.inputTimeColletion')
    : strings('collectionPoint.inputTimeDelivery');
