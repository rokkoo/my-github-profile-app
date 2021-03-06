import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import { ImageView } from "../../../nativeModules";

// Avatar size
import { avatarSize } from "../../../theme/constants";

// Styles
export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: ${avatarSize.height * 1.5};
  align-items: center;
  padding-left: 10;
  z-index: 999;
  background-color: ${props => props.theme.colors.headerBackground};
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
  margin-right: 10;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.textColor};
  font-size: 22;
  font-weight: bold;
  text-transform: capitalize;
  align-self: center;
`;

export const Background = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const IconWrapper = styled.View`
  color: red;
  background-color: red;
`;
