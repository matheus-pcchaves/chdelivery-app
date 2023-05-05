import React from 'react';
import { StatusBar, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { DeliveryCard } from '../../components/DeliveryCard';

import { 
  Container, 
  DeliveryList, 
  Header, 
  HeaderContent,
  LogoContent,
  LogoText,
  TotalDeliveries, 
} from './styles';

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

      <DeliveryList
        data={[1,2,3,4,5,6,7,8,9]}
        keyExtractor={item => String(item)}
        renderItem={({item}) => 
          <DeliveryCard 
            info='Categoria'
            infoCategory='Eletrodomésticos' 
            product='Geladeira' 
            address='Rua José Arigó, 1040'/>
        }
      />
    </Container>
  );
}