import React from 'react';

import { 
  Container, 
  ProuctsView, 
  Name, 
  Category, 
  DetailsView,
  ProductsView, 
  Product, 
  ProductName, 
  AddressView, 
  Address,
  AddressName,
} from './styles';

export function DeliveryCard() {
  return (
    <Container>
        <ProuctsView>
            <Category>Categoria</Category>
            <Name>Eletrodomésticos</Name>

            <DetailsView>
                <ProductsView>
                    <Product>Produto</Product>
                    <ProductName>Micro-ondas</ProductName>
                </ProductsView>

                <AddressView>
                    <Address>CEP</Address>
                    <AddressName>14092-172</AddressName>
                </AddressView>
            </DetailsView>
        </ProuctsView>
    </Container>
  );
}