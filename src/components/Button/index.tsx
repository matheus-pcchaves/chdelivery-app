import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
  Container,
  Title, 
} from './styles';

interface Props extends TouchableOpacityProps {
  background?: string;
  color?: string;
  title: string;  
}

export function Button({background, color, title, ...rest}: Props) {
  return (
    <Container background={background} {...rest}>
      <Title color={color}>{title}</Title>
    </Container>
  );
}