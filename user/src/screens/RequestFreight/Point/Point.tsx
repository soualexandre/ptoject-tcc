import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { CardPoint, If } from '~/components';
import { strings } from '~/locale';
import { isEmpty, observer } from '~/modules';
import { getAlphabetPoint } from '~/utils';
import {
  Button,
  Container,
  ContentWrapper,
  Instruction,
  NextWrapper,
  ReturnPoint,
  SwitchPointReturn,
  Text,
  TextReturnPoint,
  Wrapper,
} from './styles';

type Props = {
  pointsData: NewPointRequestParams;
  isSwitchOn: boolean;
  hasFirstPoint: boolean;
  hasMoreThenOneDestiny: boolean;
  onToggleSwitch(): void;
  onPressEdit(point: NewPointParams, typeAddress: string): void;
  onPressClose(id: number, typeAddress: string): void;
  addNextPoint(): void;
  onButtonPress(): void;
};

const Point: FC<Props> = ({
  pointsData,
  isSwitchOn,
  hasFirstPoint,
  hasMoreThenOneDestiny,
  onToggleSwitch,
  onPressEdit,
  onPressClose,
  addNextPoint,
  onButtonPress,
}) => (
  <Wrapper
    title={strings('point.titleScreen')}
    fullWidth
    fullHeight
    isMainSimpleHeader
  >
    <Container>
      <ContentWrapper>
        <Text>{strings('point.origin')}</Text>

        <If condition={!hasFirstPoint}>
          <CardPoint
            point="A"
            address={strings('point.cardPointAddress')}
            subAddress={strings('point.cardPointSubAddress')}
            addNewAddress={addNextPoint}
          />
        </If>
        <If condition={hasFirstPoint}>
          <CardPoint
            key={pointsData.collect.id}
            point="A"
            address={pointsData.collect.collect_address}
            onPressClose={() =>
              onPressClose(
                pointsData.collect.id,
                strings('collectionPoint.collect'),
              )
            }
            onPressEdit={() =>
              onPressEdit(
                pointsData.collect,
                strings('collectionPoint.collect'),
              )
            }
          />
        </If>
        <If condition={!isEmpty(pointsData.delivery)}>
          <>
            <Text>Destino</Text>
            {pointsData.delivery.map((point, index) => (
              <CardPoint
                key={index}
                point={getAlphabetPoint(index)}
                address={point.collect_address}
                onPressClose={() =>
                  onPressClose(point.id, strings('collectionPoint.delivery'))
                }
                onPressEdit={() =>
                  onPressEdit(point, strings('collectionPoint.delivery'))
                }
              />
            ))}
            <ReturnPoint>
              <SwitchPointReturn
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
              <TextReturnPoint>{strings('point.returnPoint')}</TextReturnPoint>
            </ReturnPoint>
          </>
        </If>
        <If condition={hasFirstPoint}>
          <Button onPress={addNextPoint}>
            {strings('collectionPoint.addPoint')}
          </Button>
        </If>
      </ContentWrapper>
      <NextWrapper>
        <If condition={isEmpty(pointsData.delivery)}>
          <Instruction>{strings('collectionPoint.instruction')}</Instruction>
        </If>
        <Button disabled={isEmpty(pointsData.delivery)} onPress={onButtonPress}>
          {strings('general.next')}
        </Button>
      </NextWrapper>
    </Container>
  </Wrapper>
);

export default observer(Point);
