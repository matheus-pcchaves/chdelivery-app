import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;

  background-color: ${({theme}) => theme.colors.green_light};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const LogoContent = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const LogoText = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.blue_light};
`;

export const Message = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.background};
`;

export const Footer = styled.View`
  padding: 24px;
`;