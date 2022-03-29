import React, { FC } from 'react';
import { VoidExpression } from 'typescript';
import { strings } from '~/locale';
import {
  FormikProps,
  Modal,
  PlacesAutoComplete,
  observer,
  useFormikContext,
} from '~/modules';
import { useStores } from '~/utils';
import { AUTOCOMPLETE_URL } from '~/whitelabel';

import { Wrapper } from './styles';

type Props = {
  onClose(): void;
  setVisible(boolean: boolean): void;
  visible?: boolean;
};

const PlacesAutoCompleteContainer: FC<Props> = ({
  visible = false,
  setVisible,
  onClose,
}) => {
  const { handleChange }: FormikProps<any> = useFormikContext();
  const { user: userStore, request } = useStores();
  const { user } = userStore.userProfile;

  const handleClickAddress = (item: AddressFromGeolocation) => {
    const typeAddress = `${item.main_text} ${item?.secondary_text}`;
    handleChange('collect_address')(typeAddress);
    setVisible(false);
    request.setAddressFromGeolocation(item);
  };
  return (
    <Modal isVisible={visible} useNativeDriver style={{ margin: 0 }}>
      <Wrapper
        fullWidth
        fullHeight
        isCloseButton
        onBackButtonPress={onClose}
        isOnBoardingHeader
        hasScroll={false}
        title={strings('placesAutoComplete.title')}
      >
        <PlacesAutoComplete
          placeholder="Endereço e número"
          placeholderTextColor="gray"
          buttonColor="black"
          buttonTextColor="white"
          delay={1500}
          // @ts-ignore
          getDataAutocomplete={handleClickAddress}
          purveyorPlaces=""
          refreshSessionDeflateSearch=""
          route={AUTOCOMPLETE_URL}
          params={{
            id: user.id,
            token: user.token,
            latitude: 1,
            longitude: 1,
            lang: 'pt-br',
          }}
        />
      </Wrapper>
    </Modal>
  );
};
export default observer(PlacesAutoCompleteContainer);
