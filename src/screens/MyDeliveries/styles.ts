import styled from 'styled-components/native';

import { FlatList } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  
  background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + 10}px;
  margin-left: 24px;
`;

export const Content = styled.View``;

export const DeliveryList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 24,
    },
    showVerticalScrowIndicator: false
})``;