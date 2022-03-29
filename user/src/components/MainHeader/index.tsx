import * as React from 'react';
import { IconFilter, IconMenu, IconSearch } from '~/assets';
import { strings } from '~/locale';
import { isEmpty } from '~/modules';
import { useStores } from '~/utils';
import If from '../If';

import {
  Avatar,
  ChildrenWrapper,
  Description,
  Header,
  HeaderContainer,
  Input,
  SearchBox,
  Title,
  TouchableFilter,
  TouchableMenu,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  description?: string;
  onPressMenu(): void;
  onSearch?(value: string): void;
  onPressFilter?(): void;
  showFilter?: boolean;
  showSearchInput?: boolean;
  showAvatar?: boolean;
};

const MainHeader: React.FC<Props> = ({
  title,
  onPressMenu,
  description = '',
  showAvatar = false,
  showSearchInput = false,
  onSearch = () => {},
  onPressFilter = () => {},
  showFilter = false,
  ...props
}) => {
  const { user } = useStores();

  return (
    <Wrapper {...props} showSearchInput={showSearchInput}>
      <ChildrenWrapper>
        <Header>
          <HeaderContainer>
            <TouchableMenu onPress={onPressMenu}>
              <IconMenu />
            </TouchableMenu>
            <If condition={showFilter}>
              <TouchableFilter onPress={onPressFilter}>
                <IconFilter />
              </TouchableFilter>
            </If>
          </HeaderContainer>

          <If condition={showAvatar}>
            <Avatar source={{ uri: user.userProfile.institution.logo }} />
          </If>
        </Header>

        <Title>{title}</Title>
        <If condition={!isEmpty(description)}>
          <Description>{description}</Description>
        </If>
      </ChildrenWrapper>
      <If condition={showSearchInput}>
        <SearchBox>
          <IconSearch />
          <Input
            placeholder="Prucure por cultura, propriedade ou produtor."
            keyboardType="numeric"
            onChangeText={(value) => {
              onSearch(value);
            }}
          />
        </SearchBox>
      </If>
    </Wrapper>
  );
};
export default MainHeader;
