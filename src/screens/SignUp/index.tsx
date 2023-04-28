import React from 'react';

import { 
  Container,
  Content,
  LogoContent,
  LogoText,
  BrandText,
  Input,
  Submit,
  SignUpContent,
  SignUpText 
} from './styles';

import Logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';

export function SignUp() {
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
          <LogoText>ch-delivery</LogoText>
          <BrandText>O seu app de pedidos e entregas!</BrandText>
        </LogoContent>

        <Input placeholder='Nome' placeholderTextColor={theme.colors.background}></Input>
        <Input placeholder='Email' placeholderTextColor={theme.colors.background}></Input>
        <Input placeholder='Senha' placeholderTextColor={theme.colors.background}></Input>
        <Submit>
          <Button background={theme.colors.background} color={theme.colors.blue_light} title='Cadastrar'/>
        </Submit>

        <SignUpContent>
          <SignUpText>Já tem uma conta? Entrar!</SignUpText>
        </SignUpContent>
      </Content>
    </Container>
  );
}