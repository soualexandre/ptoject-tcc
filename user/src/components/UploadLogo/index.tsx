import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import { IconUpload } from '~/assets';
import { strings } from '~/locale';
import { Modal, isEmpty, launchCamera, launchImageLibrary } from '~/modules';
import { setImageUndefined, useAlerts } from '~/utils';

import If from '../If';
import {
  ButtonCloseModal,
  ButtonHandleCamera,
  ButtonHandleGallery,
  Container,
  ContainerIcon,
  ImageUrl,
  RowButtonModal,
  Text,
  Title,
  Wrapper,
  WrapperModal,
  WrapperUploadLogo,
} from './styles';

type Props = {
  typeFoto?: string;
  title?: string;
  clearImage?: string;
  handleImage?(img: {
    height?: number;
    uri?: string;
    width?: number;
    fileName?: string;
    type?: string;
    fileSize?: number;
  }): void;
};

const UploadLogo: React.FC<Props> = ({
  title,
  typeFoto = 'custom',
  handleImage = () => {},
  clearImage = '',
  ...props
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [url, setUrl] = useState(clearImage);
  const { showError } = useAlerts();
  const imageSize = 2500000;

  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleGallery = async () => {
    const { assets } = await launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo',
      quality: 0.8,
      maxWidth: 1200,
      maxHeight: 1600,
    });
    if (assets) {
      const { fileSize } = assets[0] || null;
      if (fileSize && fileSize >= imageSize) {
        assets[0] = setImageUndefined(assets[0]);

        showError(strings('infoAccount.uploadLogoError'));
      }

      const data = { ...assets[0], type: typeFoto };
      handleImage(data);
      setUrl(assets[0].uri ? assets[0].uri : '');
    }

    setModalVisible(false);
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permitir acesso a câmera',
          message:
            'O aplicativo precisa acessar de permissão para acessa a camera do seu dispositivo.',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Permitir',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleCamera();
      }
    } catch (err) {}
  };

  const handleCamera = async () => {
    const { assets } = await launchCamera({
      mediaType: 'photo',
      quality: 0.8,
      cameraType: 'back',
      saveToPhotos: true,
      maxWidth: 1200,
      maxHeight: 1600,
    });
    if (assets) {
      const { fileSize } = assets[0] || null;
      if (fileSize && fileSize >= imageSize) {
        assets[0] = setImageUndefined(assets[0]);

        showError(strings('infoAccount.uploadLogoError'));
      }

      const data = { ...assets[0], type: typeFoto };
      handleImage(data);
      setUrl(assets[0].uri ? assets[0].uri : '');
    }

    setModalVisible(false);
  };

  useEffect(() => {
    setUrl('');
  }, []);

  return (
    <WrapperUploadLogo>
      <Wrapper {...props}>
        <If condition={!isEmpty(title)}>
          <Title>{title}</Title>
        </If>

        <Container onPress={handleOpenModal}>
          <If condition={isEmpty(url)}>
            <ContainerIcon>
              <IconUpload />
              <Text>{strings('infoAccount.uploadLogo')}</Text>
            </ContainerIcon>
          </If>
          <If condition={!isEmpty(url)}>
            <ImageUrl resizeMode="cover" source={{ uri: url }} />
          </If>
        </Container>
      </Wrapper>

      <Modal isVisible={modalVisible}>
        <WrapperModal>
          <RowButtonModal>
            <ButtonHandleGallery onPress={handleGallery}>
              {strings('modal.openGallery')}
            </ButtonHandleGallery>
            <ButtonHandleCamera onPress={requestCameraPermission}>
              {strings('modal.openCamera')}
            </ButtonHandleCamera>
          </RowButtonModal>

          <ButtonCloseModal onPress={handleCloseModal}>
            {strings('modal.close')}
          </ButtonCloseModal>
        </WrapperModal>
      </Modal>
    </WrapperUploadLogo>
  );
};

export default UploadLogo;
