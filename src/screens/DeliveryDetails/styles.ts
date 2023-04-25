import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

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
  
  position: absolute;

  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 120px;
`;

export const DeliveryList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrowIndicator: false
})``;

export const Maps = styled.View`
  width: 100%;
  height: 300px;
  padding: 24px;
`;

export const TitleMaps = styled.Text`
  color: ${({theme}) => theme.colors.text_body};
  font-size: ${RFValue(20)}px;
  margin: 10px 0;
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
