import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 24px 24px;
  width: 100%;
  background: ${({theme}) => theme.colors.background};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.shape};;
`;
