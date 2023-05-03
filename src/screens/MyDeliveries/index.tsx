import React from 'react';

import { 
  Container,
  Header, 
  Content,
  DeliveryList,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { DeliveryCard } from '../../components/DeliveryCard';

export function MyDeliveries() {
  const theme = useTheme()  
  return (
    <Container>
        <Header>
          <BackButton color={theme.colors.blue_light}/>
        </Header>

        <DeliveryList
          data={[1,2,3,4,5,6,7,8,9]}
          keyExtractor={item => String(item)}
          renderItem={({item}) => 
            <DeliveryCard info='Status' infoDetail='Pendente' product='Geladeira' address='Rua José Arigó, 1040'/>
          }
        />
    </Container>
  );
}