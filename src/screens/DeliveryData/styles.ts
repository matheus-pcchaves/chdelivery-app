import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

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

export const Content = styled.View`
  width: 100%;

  flex-direction: column;

  margin-top: 75px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_body};
  font-size: ${RFValue(18)}px;

  margin-top: 35px;
  margin-left: 25px;
`;

export const List = styled.ScrollView.attrs({
    contentContainerStyle: {
      alignItems: 'center',
      padding: 24
    },
    showVerticalScrowIndicator: false
})``;

export const Footer = styled.View`
  flex: 1;
  width: 100%;
  
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  margin-top: 120px;
`;
