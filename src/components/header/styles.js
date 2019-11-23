import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { ImageView } from "../../../nativeModules";

// Theme
import { Colors } from "../../../theme";

const avatarSize = { width: 60, height: 60 };

// Styles
export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: ${avatarSize.height * 1.5};
  align-items: center;
  padding-left: 10;
  z-index: 999;
  background-color: ${Colors.ternary};
  shadow-color: white;
  shadow-opacity: 0.8;
  elevation: 8;
`;

export const Image = styled(ImageView)`
  width: ${avatarSize.width};
  height: ${avatarSize.height};
`;

export const AvatarWrapper = styled.View`
  width: ${avatarSize.width};
  height: ${avatarSize.height};
  border-radius: 80;
  overflow: hidden;
  border-color: ${Colors.dark};
  margin-right: 10;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Text = styled.Text`
  color: ${Colors.light};
  font-size: 25;
  font-weight: bold;
  text-transform: capitalize;
`;

export const Background = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
