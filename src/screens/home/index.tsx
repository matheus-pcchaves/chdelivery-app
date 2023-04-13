import React from 'react';

import { 
  Container, 
  Header, 
  HeaderContent, 
  Title, 
  TotalDeliveries 
} from './styles';
import { StatusBar } from 'react-native';

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
          <Title>ch-delivery</Title>
          <TotalDeliveries>Total de 32 entregas</TotalDeliveries>
        </HeaderContent>
      </Header>
    </Container>
  );
}