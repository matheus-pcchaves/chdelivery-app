import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_body};
  font-size: ${RFValue(18)}px;

  margin-top: 35px;
  margin-left: 25px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: { 
      flexDirection: 'column',  
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    showVerticalScrowIndicator: false
  })``;

export const Input = styled.TextInput`
  width: 100%;
  height: 55px;

  margin-top: 14px;
  
  color: ${({theme}) => theme.colors.text_body};
  font-size: ${RFValue(15)}px;

  border-width: 1px;
  border-color: ${({theme}) => theme.colors.background};

  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.text_body};
  padding-bottom: 5px;
`;

export const Footer = styled.View`
  padding: 24px;
`;