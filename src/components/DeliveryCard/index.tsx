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

interface Props {
  info?: string;
  infoDetail?: string;
  product?: string;
  address?: string;
}

export function DeliveryCard({ info, infoDetail, product, address }: Props) {
  return (
    <Container>
        <ProuctsView>
            <Category>{info}</Category>
            <Name>{infoDetail}</Name>

            <DetailsView>
                <ProductsView>
                    <Product>Produto</Product>
                    <ProductName>{product}</ProductName>
                </ProductsView>

                <AddressView>
                    <Address>Endereço</Address>
                    <AddressName>{address}</AddressName>
                </AddressView>
            </DetailsView>
        </ProuctsView>
    </Container>
  );
}