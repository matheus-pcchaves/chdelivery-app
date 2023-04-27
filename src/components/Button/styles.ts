import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
  background?: string;
}

interface TextProps {
  color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: 19px;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ background, theme }) => background ? background : theme.colors.blue_light};
`;

export const Title = styled.Text<TextProps>`
  font-size: ${RFValue(15)}px;
  color: ${({color, theme}) => color ? color : theme.colors.shape};
`;
