import styled from "styled-components/native";

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
  background-color: ${props => props.theme.colors.cardBackground};
  border-radius: 5;
  shadow-color: white;
  shadow-opacity: 0.8;
  elevation: 8;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.textColor};
  font-size: ${props => (props.title ? 20 : 15)};
  font-weight: bold;
`;

export const Touchable = styled.TouchableOpacity``;
