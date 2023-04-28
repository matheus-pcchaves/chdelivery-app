import React from 'react';
import { useTheme } from 'styled-components';

import { 
  Container,
  Header,
  Content, 
  Title,
  List,
  Footer,
} from './styles';

import { DeliveryProperties } from '../../components/DeliveryProperties'
import { Button } from '../../components/Button';

export function DeliveryData() {
  const theme = useTheme()  
  return (
    <Container>
        <Content>
            <Title>Detalhes do pedido:</Title>
            <List>
                <DeliveryProperties title='Documento do entregador' text='11223344'/>
                <DeliveryProperties title='Placa do veículo' text='DXS-2880'/>
                <DeliveryProperties title='Cód Pedido' text='222'/>
                <DeliveryProperties title='Data de início da entrega' text='01/04/2024'/>
                <DeliveryProperties title='Status' text='Pendente'/>
            </List>
        </Content>

        <Footer>
            <Button
              background={theme.colors.blue_light}
              title='Voltar a tela inicial'
            />        
            <Button
              background={theme.colors.green}
              title='Finalizar entrega'
            />
        </Footer>
    </Container>
  );
}