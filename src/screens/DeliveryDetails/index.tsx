import React from 'react';
import { Alert } from 'react-native'

import { 
  Container,
  Header, 
  Title,
  Content,
  Input,
  Footer,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

export function DeliveryDetails() {
  const theme = useTheme()
  
  async function handleInitDelivery(){
    Alert.alert(
      'Iniciar',
      'Deseja iniciar a entrega',
      [
        {text: 'Não', style: 'cancel'},
        {text: 'Sim', style: 'cancel'}
      ]
    )
  }

  return (
    <Container>
        <Header>
          <BackButton color={theme.colors.blue_light}/>
        </Header>

        <Title>Digite as seguintes informações:</Title>
        <Content>
          <Input placeholder='CNH do entregador'></Input>
          <Input placeholder='Placa do Veículo'></Input>
          <Input placeholder='Data de início da entrega'></Input>
        </Content>

        <Footer>
          <Button
            background={theme.colors.green}
            title='Iniciar entrega'
            onPress={handleInitDelivery}
          />
        </Footer>
    </Container>
  );
}