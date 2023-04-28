import React from 'react';

import { 
  Container,
  Content, 
  LogoContent,
  LogoText,
  Message,
  Footer,
} from './styles';

import Logo from '../../assets/logo.svg';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';

export function DeliveryComplete() {
  const theme = useTheme()
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
      />

      <Content>
        <LogoContent>
          <Logo
            fill={theme.colors.background}
            width={RFValue(65)}
            height={RFValue(60)}
          />
        </LogoContent>

        <Message>
          Entrega finalizada com sucesso! :){`\n`} 
        </Message>
      </Content>  

      <Footer>
        <Button
        title='Voltar a tela inicial'
        background={theme.colors.green_light}
        color={theme.colors.background}
        />
      </Footer>    
    </Container>
  );
}