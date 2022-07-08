import styled from 'styled-components';
import {Text, View} from 'react-native';

export const TextField = styled(Text)`
  font-family: 'Inter';
  font-weight: 700;
  line-height: 15px;
  color: white;
  font-size: 12px;
  margin: 16px 0;
`;
export const Header = styled(Text)`
  color: white;
  font-family: 'Inter';
  font-weight: 700;
  line-height: 39px;
  font-size: 32px;
`;
export const Button = styled(Text)`
  text-align: center;
  padding: 10px 100px;
  border-radius: 8px;
  background-color: #ff344a;
  font-family: 'Inter';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  max-height: 39px;
`;

export const ErrorMessage = styled(Text)`
  color: red;
`;

