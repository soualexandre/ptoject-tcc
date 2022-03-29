import React from 'react';
import { View } from 'react-native';
import { If } from '~/components';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import { PHOTO_TYPE } from '~/utils';
import {
  Category,
  Container,
  Information,
  Next,
  Product,
  SubTitle,
  Title,
  UploadDocumentCharge,
  UploadImageCharge,
  Wrapper,
} from './styles';

type Props = {
  category: string[];
  product: string[];
  handleNavigation(): void;
  onChangeCategory(item: string): void;
  onChangeProduct(item: string): void;
  onNext(): void;
  openModal(img: ImageParams): void;
  error?: string;
};

const CargoRegister: React.FC<Props> = ({
  handleNavigation,
  onChangeCategory,
  onChangeProduct,
  category,
  product,
  openModal,
  onNext,
  error,
}) => (
  <Wrapper
    onBackButtonPress={handleNavigation}
    title={strings('requestFreight.titleScreen')}
    fullWidth
    isMainSimpleHeader
  >
    <Container>
      <View>
        <Category
          title={strings('requestFreight.category')}
          items={category}
          onChangeItem={onChangeCategory}
          defaultValue={strings('general.selectCategory')}
        />
        <If condition={!isEmpty(product)}>
          <Product
            title={strings('requestFreight.product')}
            items={product}
            onChangeItem={onChangeProduct}
          />
        </If>
      </View>
      {/* <Title>{strings('requestFreight.title')}</Title>
      <SubTitle>{strings('requestFreight.subTitle')}</SubTitle>
      <Information>{strings('requestFreight.information')}</Information>
      <UploadImageCharge
        typeFoto={PHOTO_TYPE.CARGO_IMAGE}
        handleImage={openModal}
        title={strings('requestFreight.imageCharge')}
      />
      <UploadDocumentCharge
        typeFoto={PHOTO_TYPE.CARGO_DOCUMENT}
        handleImage={openModal}
        title={strings('requestFreight.documentCharge')}
      /> */}
      <Next onPress={onNext}>{strings('requestFreight.button')}</Next>
    </Container>
  </Wrapper>
);

export default CargoRegister;
