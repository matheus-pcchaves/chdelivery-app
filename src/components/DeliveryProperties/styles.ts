import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;

  background-color: ${({theme}) => theme.colors.shape};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.text_title};
  font-size: ${RFValue(15)}px;
  padding: 10px;
`;
