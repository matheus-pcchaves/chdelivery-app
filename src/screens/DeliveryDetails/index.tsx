import React from 'react';
import { useTheme } from 'styled-components';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';

import { 
  Container,
  Header, 
  Content,
  DeliveryList,
  Maps,
  TitleMaps,
  Footer,
} from './styles';
import WebView from 'react-native-webview';
import { DeliveryProperties } from '../../components/DeliveryProperties';

export function DeliveryDetails() {
  const theme = useTheme()
  return (
    <Container>
      <Header>
        <BackButton color={theme.colors.blue_light}/>
      </Header>

      <Content>
        <DeliveryList
          data={[1,2,3,4]}
          keyExtractor={item => String(item)}
          renderItem={({item}) => <DeliveryProperties title='Maquina de Lavar'/>}
        />
      </Content>

      <Maps>
        <TitleMaps> Ver no Maps: </TitleMaps>
        <WebView
          source={{ 
            uri: 'https://www.google.com.br/maps/@-21.1627951,-47.7940133,13.09z?hl=pt-BR' 
          }}
        />
      </Maps>

      <Footer>
        <Button
          color={theme.colors.green}
          title='Realizar entrega'
        />
      </Footer>
    </Container>
  );
}