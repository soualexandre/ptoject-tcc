import React, { FC, useEffect, useState } from 'react';
import { FormContainer, PlacesAutoComplete } from '~/components';
import { strings } from '~/locale';
import { FormikHelpers, isEmpty, observer } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import {
  FREIGHT_ADRESS_TYPE,
  UnFormatDate,
  isSameDay,
  useStores,
} from '~/utils';
import CollectionPoint from './CollectionPoint';
import { FormCollectionPoint, initialValues, validationSchema } from './form';

const CollectionPointContainer: FC = () => {
  const { request, user } = useStores();
  const { hasFirstPoint } = request;
  const { create_request_settings } = user.settings;
  const [modalVisible, setModalVisible] = useState(false);
  const [minimumTime, setMinimumTime] = useState<Date | undefined>(new Date());
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  const getMinimumDate = () => {
    const { collect_date } = request.dataRequest.collect;
    if (collect_date) {
      return new Date(collect_date);
    }
    return new Date();
  };

  const getCurrentTime = (value: Date) => {
    setCurrentTime(value);
  };

  const getMinimumTime = (value: Date) => {
    if (!hasFirstPoint) {
      if (!isSameDay(value, new Date())) {
        setMinimumTime(undefined);
      } else {
        setMinimumTime(new Date());
      }
    } else if (!isSameDay(value, currentTime)) {
      setMinimumTime(undefined);
    } else {
      setMinimumTime(currentTime);
    }
  };

  const onSubmit = (
    values: FormCollectionPoint,
    action: FormikHelpers<any>,
  ) => {
    const formattedDate = UnFormatDate(values.collect_date);
    if (!isEmpty(request.editCurrentPoint)) {
      const params = {
        collect_place_image: {},
        id: request.editCurrentPoint.currentPoint.id,
        action_type: hasFirstPoint
          ? FREIGHT_ADRESS_TYPE.DELIVERY
          : FREIGHT_ADRESS_TYPE.COLLECT,
        ...values,
        collect_date: formattedDate,
      };
      request.editPointRequest(params);
    } else {
      const { typeAddress } = getTexts();
      const params = {
        id: !hasFirstPoint ? 1 : request.dataRequest.delivery.length,
        action_type: hasFirstPoint
          ? FREIGHT_ADRESS_TYPE.DELIVERY
          : FREIGHT_ADRESS_TYPE.COLLECT,
        collect_place_image: {},
        ...values,
        collect_date: formattedDate,
      };
      request.createNewPointRequest(params, typeAddress);
    }

    action.resetForm();
    NavigationActions.navigate(Routes.POINT);
  };

  useEffect(() => () => request.clearEditCurrentPoint(), []);

  const getTexts = () => {
    if (!isEmpty(request.editCurrentPoint)) {
      const { typeAddress } = request.editCurrentPoint;
      return {
        title:
          typeAddress === strings('collectionPoint.collect')
            ? strings('collectionPoint.titleScreen')
            : strings('collectionPoint.delivery'),
        typeAddress: request.editCurrentPoint.typeAddress,
      };
    }
    if (!hasFirstPoint) {
      return {
        title: strings('collectionPoint.titleScreen'),
        typeAddress: strings('collectionPoint.collect'),
      };
    }
    return {
      title: strings('collectionPoint.point'),
      typeAddress: strings('collectionPoint.delivery'),
    };
  };

  const onModalClose = () => {
    setModalVisible(false);
  };

  const onModalOpen = () => {
    setModalVisible(true);
  };

  return (
    <FormContainer
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={{
        ...initialValues,
        type_address: getTexts().typeAddress,
        ...request.editCurrentPoint?.currentPoint,
      }}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <>
        <CollectionPoint
          getTexts={getTexts}
          onPresssAutoComplete={onModalOpen}
          showType={create_request_settings.step_by_step_point_type}
          getMinimumDate={getMinimumDate}
          getMinimumTime={getMinimumTime}
          getCurrentTime={getCurrentTime}
          minimumTime={minimumTime}
        />

        <PlacesAutoComplete
          onClose={onModalClose}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      </>
    </FormContainer>
  );
};

export default observer(CollectionPointContainer);
