import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 112px;

  background-color: ${({theme}) => theme.colors.shape};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-bottom: 16px;
`;

export const ProuctsView = styled.View`
  width: 100%;
`;

export const Category = styled.Text`
  text-transform: uppercase;
  
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_body};
`;

export const Name = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_title};
`;

export const DetailsView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const ProductsView = styled.View`
  margin-right: 12px;
`;

export const Product = styled.Text`
  text-transform: uppercase;

  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_body};
`;

export const ProductName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_title};
`;

export const AddressView = styled.View``;

export const Address = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_body};
`;

export const AddressName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_title};
`;
