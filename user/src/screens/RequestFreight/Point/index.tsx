import React, { FC, useState } from 'react';
import { observer } from '~/modules';
import { NavigationActions, Routes, Stacks } from '~/navigation';
import { useAlerts, useStores } from '~/utils';
import Point from './Point';

const PointContainer: FC = () => {
  const { request } = useStores();
  const { showError } = useAlerts();
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const addNextPoint = () => {
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.COLLECT_POINT,
    });
  };

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const onNext = () => {
    try {
      request.addPointFromRequest(isSwitchOn);

      NavigationActions.navigate(Routes.ESTIMAT_VEHICLE);
    } catch ({ message }) {
      showError(message);
    }
  };

  const onPressClose = (id: number, typeAddress: string) => {
    request.removePointRequest(id, typeAddress);
  };

  const onPressEdit = async (point: NewPointParams, typeAddress: string) => {
    await request.loadEditCurrentPoint(point, typeAddress);
    NavigationActions.navigate(Stacks.MODAL, {
      screen: Routes.COLLECT_POINT,
    });
  };

  return (
    <Point
      isSwitchOn={isSwitchOn}
      onToggleSwitch={onToggleSwitch}
      onButtonPress={onNext}
      addNextPoint={addNextPoint}
      hasMoreThenOneDestiny={request.hasMoreThenOneDestiny}
      pointsData={request.dataRequest}
      onPressClose={onPressClose}
      onPressEdit={onPressEdit}
      hasFirstPoint={request.hasFirstPoint}
    />
  );
};

export default observer(PointContainer);
