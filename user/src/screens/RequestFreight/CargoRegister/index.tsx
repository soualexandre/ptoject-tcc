import React, { useEffect, useState } from 'react';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import { NavigationActions, Routes } from '~/navigation';
import { FIELDS_TYPE, PHOTO_TYPE, useAlerts, useStores } from '~/utils';
import CargoRegister from './CargoRegister';

const CargoRegisterContainer: React.FC = () => {
  const { request } = useStores();
  const { showWarning } = useAlerts();
  const [dataRequest, setDataRequest] = useState<CargoRegisterData>({
    cargo_document: {
      height: 0,
      uri: '',
      width: 0,
      fileName: '',
      type: '',
      fileSize: 0,
    },
    cargo_image: {
      height: 0,
      uri: '',
      width: 0,
      fileName: '',
      type: '',
      fileSize: 0,
    },
    load_product_id: null,
    load_species_id: 0,
  });
  const [dataCategory, setDataCategory] = useState<string[]>(['']);
  const [dataProduct, setDataProduct] = useState<string[]>([]);
  const [error, setError] = useState('');

  const handleNavigation = () => {
    NavigationActions.goBack();
  };

  const onChangeCategory = async (categoryName: string) => {
    if (request.dataAutoComplete.load_species) {
      const category = request.dataAutoComplete.load_species.find(
        (value) => value.load_specie_name === categoryName,
      );
      setDataRequest((oldState) => ({
        ...oldState,
        load_species_id: category ? category.id : 0,
      }));
      if (category) {
        await request.autoComplete({
          fields: [FIELDS_TYPE.LOAD_PRODUCTS],
          load_specie_id: category.id,
        });
        filterProduct();
        setError('');
      } else {
        showWarning(
          'Não foi possivel encontrar a categoria com o valor informado',
        );
      }
    }
  };

  const onChangeProduct = async (productName: string) => {
    if (request.dataAutoComplete.load_products) {
      const products = request.dataAutoComplete.load_products.find(
        (products) => products.load_product_name === productName,
      );

      setDataRequest((oldState) => ({
        ...oldState,
        load_product_id: products ? products?.id : 0,
      }));
    }
  };

  const onNext = () => {
    if (
      dataRequest?.cargo_document &&
      dataRequest.cargo_image &&
      !isEmpty(dataProduct)
    ) {
      request.cargoRegisterRequest(dataRequest);
      NavigationActions.navigate(Routes.PACK_INFO);
    } else {
      showWarning(strings('error.missingCategory'));
      setError(strings('error.mandatorySelection'));
    }
  };

  const filterProduct = () => {
    if (!isEmpty(request.dataAutoComplete.load_products)) {
      const products = request.dataAutoComplete.load_products.map(
        (products) => products.load_product_name,
      );

      setDataRequest((oldState) => ({
        ...oldState,
        load_product_id: request.dataAutoComplete.load_products[0].id,
      }));

      setDataProduct(products);
    }
  };
  const filterCategorie = async () => {
    if (!isEmpty(request.dataAutoComplete.load_species)) {
      const category = request.dataAutoComplete.load_species.map(
        (species) => species.load_specie_name,
      );

      setDataCategory(category);

      setDataRequest((oldState) => ({
        ...oldState,
        load_species_id: request.dataAutoComplete.load_species
          ? request.dataAutoComplete.load_species[0].id
          : 0,
      }));

      await request.autoComplete({
        fields: [FIELDS_TYPE.LOAD_PRODUCTS],
        load_specie_id: dataRequest.load_species_id,
      });

      filterProduct();
    }
  };

  const openModal = (img: ImageParams) => {
    const newData = dataRequest;
    if (img.type === PHOTO_TYPE.CARGO_DOCUMENT) {
      newData.cargo_document = img;
    } else {
      newData.cargo_image = img;
    }

    setDataRequest(newData);
  };

  useEffect(() => {
    filterCategorie();
  }, []);

  return (
    <CargoRegister
      product={dataProduct}
      category={dataCategory}
      onChangeCategory={onChangeCategory}
      onChangeProduct={onChangeProduct}
      handleNavigation={handleNavigation}
      onNext={onNext}
      openModal={openModal}
      error={error}
    />
  );
};

export default CargoRegisterContainer;
