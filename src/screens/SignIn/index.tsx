import React from 'react';

import { 
  Container,
  Content,
  LogoContent,
  LogoText,
  BrandText,
  Input,
  Submit,
  SignInContent,
  SignInText 
} from './styles';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function SignIn() {
  const theme = useTheme()
  return (
    <Container>
      <Content>
        <LogoContent>
          <Logo
            fill={theme.colors.blue_light}
            width={RFValue(65)}
            height={RFValue(60)}
          />
          <LogoText>ch-delivery</LogoText>
          <BrandText>O seu app de pedidos e entregas!</BrandText>
        </LogoContent>

        <Input>Email</Input>
        <Input>Senha</Input>
        <Submit>
          <Button title='Entrar'/>
        </Submit>

        <SignInContent>
          <SignInText>Não tem uma conta? Cadastre-se!</SignInText>
        </SignInContent>
      </Content>
    </Container>
  );
}