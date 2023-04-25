import React from 'react';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { DeliveryProperties } from '../../components/DeliveryProperties';

import { 
  Container,
  Header, 
  Title,
  Content,
  Footer,
} from './styles';

export function DeliveryDetails() {
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.blue_light}/>
      </Header>

      <Title>Detalhes do pedido:</Title>
      <Content>
        <DeliveryProperties title='Categoria' text='Eletrodomésticos'/>
        <DeliveryProperties title='Produto' text='Maquina de Lavar'/>
        <DeliveryProperties title='Quantidade' text='01'/>
        <DeliveryProperties title='Cód Produto' text='222'/>
        <DeliveryProperties title='CEP' text='14092-172'/>
        <DeliveryProperties title='Endereço' text='Rua José Arigó, 1040'/>
      </Content>

      <Footer>
        <Button
          color={theme.colors.green}
          title='Realizar entrega'
        />
      </Footer>
    </Container>
  );
}