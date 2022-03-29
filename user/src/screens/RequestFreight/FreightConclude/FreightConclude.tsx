import React, { FC } from 'react';
import { View } from 'react-native';
import { If, Touchable } from '~/components';
import { strings } from '~/locale';
import { Icon } from '~/modules';
import {
  Container,
  DeliverySeparator,
  DestinationAddress,
  InfoCargo,
  InfoUsuario,
  Name,
  Next,
  OtherServiceLabel,
  OtherServicesWrapper,
  ProposePrice,
  Row,
  RowAddress,
  RowBodywork,
  Services,
  SourceAddress,
  Title,
  Value,
  VehicleIdentification,
  Wrapper,
} from './styles';

type Props = {
  onGoBack(): void;
  onNext(): void;
  getNameCategory(id: number): string;
  getNameProduct(id: number | null): string;
  getProviderType(id: number): string;
  getNameCategoryVehicle(id: number): string;
  getNameVehicleBody(id: number): string;
  dataRequest: DataConstructionRequestParams;
  dataRequestAddress: DataRequestAddressParams;
  userProfile: UserProfile;
  getIconName: () => string;
  toggleOtherService: () => void;
  showServices: boolean;
  services: string;
  dataEstimate: {
    estimated_duration: string;
    estimated_distance: string;
    estimated_price: string;
  };
  currency(num: string): string;
};

const FreightConclude: FC<Props> = ({
  onGoBack,
  onNext,
  dataRequest,
  dataRequestAddress,
  userProfile,
  dataEstimate,
  getNameCategory,
  getNameProduct,
  getProviderType,
  getNameCategoryVehicle,
  getNameVehicleBody,
  getIconName,
  toggleOtherService,
  showServices,
  services,
  currency,
}) => (
  <>
    <Wrapper
      onBackButtonPress={onGoBack}
      title={strings('freightConclude.title')}
      fullWidth
      isMainSimpleHeader
    >
      <Container>
        <InfoUsuario>
          <Title>{strings('freightConclude.user')}</Title>
          <Row>
            <Name>{strings('freightConclude.user')}</Name>
            <Value>{userProfile.user.name}</Value>
          </Row>
        </InfoUsuario>
        <ProposePrice>
          <Title>{strings('proposePrice.title')}</Title>
          <Row>
            <Name>{strings('vehicle.duration')}</Name>
            <Value>{dataEstimate.estimated_duration}</Value>
          </Row>
          <Row>
            <Name>{strings('vehicle.distance')}</Name>
            <Value>{dataEstimate.estimated_distance}</Value>
          </Row>
          <Row>
            <Name>{strings('proposePrice.title')}</Name>
            <Value>{dataEstimate.estimated_price}</Value>
          </Row>
          <If condition={dataRequest.desired_price > 0}>
            <Row>
              <Name>{strings('proposePrice.proposedPrice')}</Name>
              <Value>{currency(dataRequest.desired_price.toString())}</Value>
            </Row>
          </If>
        </ProposePrice>
        <InfoCargo>
          <Title>{strings('freightConclude.infoCargo')}</Title>
          <Row>
            <Name>{strings('freightConclude.category')}</Name>
            <Value>{getNameCategory(dataRequest.load_species_id)}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.product')}</Name>
            <Value>{getNameProduct(dataRequest.load_product_id)}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.length')}</Name>
            <Value>{dataRequest.length}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.width')}</Name>
            <Value>{dataRequest.width}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.amount')}</Name>
            <Value>{dataRequest.quantity}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.unitaryPrice')}</Name>
            <Value>{dataRequest.unit_weight}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.totalweight')}</Name>
            <Value>{dataRequest.total}</Value>
          </Row>
        </InfoCargo>
        <SourceAddress>
          <Title>{strings('freightConclude.sourceAddress')}</Title>
          <Row>
            <Name>{strings('freightConclude.typeAddress')}</Name>
            <Value>{strings('freightConclude.collectionLabel')}</Value>
          </Row>
          <RowAddress>
            <Name>{strings('freightConclude.address')}</Name>
            <Value>{`${dataRequestAddress.collect.main_text} ${dataRequestAddress.collect.secondary_text}`}</Value>
          </RowAddress>
          <Row>
            <Name>{strings('freightConclude.number')}</Name>
            <Value>{dataRequest.collect_number}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.referencePoint')}</Name>
            <Value>{dataRequest.collect_reference}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.collectionDate')}</Name>
            <Value>{dataRequest.collect_date}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.collectionTime')}</Name>
            <Value>{dataRequest.collect_time}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.collectionName')}</Name>
            <Value>{dataRequest.collect_name}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.collectionPhone')}</Name>
            <Value>{dataRequest.collect_phone}</Value>
          </Row>
        </SourceAddress>
        <DestinationAddress>
          <Title>{strings('freightConclude.destinationAddress')}</Title>
          <Row>
            <Name>{strings('freightConclude.typeAddress')}</Name>
            <Value>{strings('freightConclude.deliveryLabel')}</Value>
          </Row>
          {dataRequest.delivery_points.map((point) => (
            <View key={point.delivery_number}>
              <DeliverySeparator />
              <RowAddress>
                <Name>{strings('freightConclude.address')}</Name>
                <Value>{point.delivery_address}</Value>
              </RowAddress>
              <Row>
                <Name>{strings('freightConclude.number')}</Name>
                <Value>{point.delivery_number}</Value>
              </Row>
              <Row>
                <Name>{strings('freightConclude.referencePoint')}</Name>
                <Value>{point.delivery_reference}</Value>
              </Row>
              <Row>
                <Name>{strings('freightConclude.deliveryDate')}</Name>
                <Value>{point.delivery_date}</Value>
              </Row>
              <Row>
                <Name>{strings('freightConclude.deliveryTime')}</Name>
                <Value>{point.delivery_time}</Value>
              </Row>
              <Row>
                <Name>{strings('freightConclude.deliveryName')}</Name>
                <Value>{point.delivery_name}</Value>
              </Row>
              <Row>
                <Name>{strings('freightConclude.deliveryPhone')}</Name>
                <Value>{point.delivery_phone}</Value>
              </Row>
            </View>
          ))}
        </DestinationAddress>
        <VehicleIdentification>
          <Title>{strings('freightConclude.vehicleIdentification')}</Title>
          <Row>
            <Name>{strings('freightConclude.vehicleType')}</Name>
            <Value>{getProviderType(dataRequest.type_id)}</Value>
          </Row>
          <Row>
            <Name>{strings('freightConclude.vehicleCategory')}</Name>
            <Value>{getNameCategoryVehicle(dataRequest.category_id)}</Value>
          </Row>
          <RowBodywork>
            <Name>{strings('freightConclude.typeBodywork')}</Name>
            <Value>{getNameVehicleBody(dataRequest.bodywork_id)}</Value>
          </RowBodywork>
          <Row>
            <OtherServiceLabel>
              <Name>{strings('freightConclude.otherServices')}</Name>
              <If condition={dataRequest.other_services.length !== 0}>
                <>
                  <Touchable onPress={toggleOtherService}>
                    <Icon name={getIconName()} size={22} color="grey" />
                  </Touchable>
                </>
              </If>
            </OtherServiceLabel>
            <Value>{dataRequest.other_services.length}</Value>
          </Row>
          <If condition={showServices}>
            <OtherServicesWrapper>
              <Services>{services}</Services>
            </OtherServicesWrapper>
          </If>
          <Row>
            <Name>{strings('freightConclude.cardPayment')}</Name>
            <Value>{strings('general.no')}</Value>
          </Row>
        </VehicleIdentification>
      </Container>
      <Next onPress={onNext}>{strings('freightConclude.next')}</Next>
    </Wrapper>
  </>
);

export default FreightConclude;
