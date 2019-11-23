import styled from "styled-components/native";

// Theme
import { Colors } from "../../../theme";

export const ItemWrapper = styled.View`
  flex-direction: column;
  height: 85;
  align-content: center;
  justify-content: center;
  border-left-width: 5;
  border-left-color: red;
  margin-top: 10;
  margin-left: 25;
  padding-left: 10;
  background-color: #1f344b;
  border-radius: 5;
`;

export const Text = styled.Text`
  color: ${Colors.light};
  font-size: ${props => (props.title ? 20 : 15)};
  font-weight: bold;
`;

export const Touchable = styled.TouchableOpacity``;
