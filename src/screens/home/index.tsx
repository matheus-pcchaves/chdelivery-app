import React from 'react';
import { StatusBar, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { 
  Container, 
  Header, 
  HeaderContent,
  LogoContent,
  LogoText,
  TotalDeliveries, 
} from './styles';
import theme from '../../styles/theme';

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <LogoContent>
            <Logo
              fill="#ffffff"
              width={RFValue(34)}
              height={RFValue(32)}
            />
            <LogoText>ch-delivery</LogoText>
          </LogoContent>

          <TotalDeliveries>total de 32 entregas</TotalDeliveries>
        </HeaderContent>
      </Header>
    </Container>
  );
}