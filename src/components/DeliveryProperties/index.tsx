import React from 'react';

import { 
  Container,
  Text 
} from './styles';

interface Props {
  title: string;  
}

export function DeliveryProperties({ title }: Props) {
  return (
    <Container>
        <Text>{title}</Text>
    </Container>
  );
}