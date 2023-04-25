import React from 'react';

import { 
  Container,
  Text,
  Title 
} from './styles';

interface Props {
  title: string; 
  text: string; 
}

export function DeliveryProperties({ title, text }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}