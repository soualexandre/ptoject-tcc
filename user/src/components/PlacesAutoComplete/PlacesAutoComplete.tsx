import React from 'react';
import { strings } from '~/locale';
import { PlacesAutoComplete } from '~/modules';
import { AUTOCOMPLETE_URL } from '~/whitelabel';
import { Wrapper } from './styles';

type Props = {
  latitude: number;
  longitude: number;
  user: UserInfo;
  handleClickAddress(value: AddressFromGeolocation): void;
  handleNavigationGoBack(): void;
};

const PlacesAutoCompleteDump: React.FC<Props> = ({
  latitude,
  longitude,
  user,
  handleClickAddress,
  handleNavigationGoBack,
}) => (
  <Wrapper
    fullWidth
    fullHeight
    isCloseButton
    onBackButtonPress={handleNavigationGoBack}
    isOnBoardingHeader
    hasScroll={false}
    title={strings('placesAutoComplete.title')}
  >
    <PlacesAutoComplete
      placeholder="Endereço e número"
      placeholderTextColor="gray"
      showButton
      buttonColor="black"
      buttonTextColor="white"
      delay={1500}
      onButtonPress={handleNavigationGoBack}
      // @ts-ignore
      getDataAutocomplete={handleClickAddress}
      purveyorPlaces=""
      refreshSessionDeflateSearch=""
      route={AUTOCOMPLETE_URL}
      params={{
        id: user.id,
        token: user.token,
        latitude,
        longitude,
        lang: 'pt-br',
      }}
    />
  </Wrapper>
);

export default PlacesAutoCompleteDump;
