import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.blue_light};
`;

export const Content = styled.View`
  width: 100%;
`;

export const LogoContent = styled.View`
  flex-direction: column;
  align-items: center;

  padding: 24px;
  width: 100%;
`;

export const LogoText = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: ${RFValue(25)}px;
`;

export const BrandText = styled.Text`
  color: ${({theme}) => theme.colors.text_body};
  font-size: ${RFValue(15)}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;

  margin-top: 14px;
  
  text-align: center;
  color: ${({theme}) => theme.colors.background};
  font-size: ${RFValue(15)}px;

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.text_body};
`;

export const Submit = styled.View`
  margin-top: 14px;
  font-size: ${RFValue(15)}px;
`;

export const SignUpContent = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SignUpText = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-size: ${RFValue(17)}px;

  margin-top: 10px;
  margin-left: 48px;
`;
