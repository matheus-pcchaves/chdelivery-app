import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;

  background-color: ${({theme}) => theme.colors.blue_light};
  justify-content: flex-end;
  padding: 18px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContent = styled.View`
  flex-direction: column;
  align-items: center;
  width: 108px;
`;

export const LogoText = styled.Text`
  color: ${({theme}) => theme.colors.shape};
`;

export const TotalDeliveries = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text_body};
`;

export const DeliveryList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 24
  },
  showVerticalScrowIndicator: false
})``;
