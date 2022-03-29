import React, { FC, useEffect, useState } from 'react';
import { strings } from '~/locale';
import { observer } from '~/modules';
import { NavigationActions, useRoute } from '~/navigation';
import { FREIGHT_STATUS, useAlerts, useStores } from '~/utils';
import { FreightDetailsParams } from '~/utils/types';
import { TRACKING_URL } from '~/whitelabel';
import { FormRating } from './formValue';
import FreightDetail from './FreightDetails';

const FreightDetailContainer: FC = () => {
  const { freight } = useStores();
  const { showError, showSuccess } = useAlerts();
  const { params } = useRoute<FreightDetailsParams>();
  const [freightEnded, setFreightEnded] = useState(false);
  const [freightInProgress, setFreightInProgress] = useState(false);
  const [trackingUrl, setTrackingUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { id } = params;

  const currentFreightStatus = freight.freights.find(
    (freight) => freight.request_id === id,
  )?.status_id;

  const getTrackingUrl = () => {
    const { public_key } = freight.freightsDetails.request;
    const url = `${TRACKING_URL}${public_key}`;
    setTrackingUrl(url);
  };

  const getChooseDriver = async () => {
    try {
      await freight.getChooseDriver(id);
    } catch ({ message }) {
      showError(message);
    }
  };

  const getDetails = async () => {
    try {
      await freight.getHistoryDetail(id);
      const freightEnded = currentFreightStatus === FREIGHT_STATUS.DELIVERED;
      const freightInProgress =
        currentFreightStatus === FREIGHT_STATUS.IN_PROGRESS;
      setFreightEnded(freightEnded);
      setFreightInProgress(freightInProgress);
      getTrackingUrl();
    } catch ({ message }) {
      showError(message);
    }
  };

  useEffect(() => {
    getChooseDriver();
    getDetails();

    return () => freight.clearFreightDetail();
  }, []);

  const onSubmitRating = async (values: FormRating): Promise<void> => {
    try {
      setIsLoading(true);
      const data = {
        request_id: id,
        rating: values.stars,
        comment: values.comment,
      };
      await freight.setFreightRating(data);
      NavigationActions.goBack();
      showSuccess(strings('rating.successAlert'));
    } catch ({ message }) {
      showError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FreightDetail
      freightEnded={freightEnded}
      freightInProgress={freightInProgress}
      freight={freight.freightsDetails}
      driver={freight.chooseDrivers}
      onSubmitRating={onSubmitRating}
      trackingUrl={trackingUrl}
      isLoading={isLoading}
    />
  );
};

export default observer(FreightDetailContainer);
