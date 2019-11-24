import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Themes
import light from "../../../theme/light";
import dark from "../../../theme/dark";

// Constants
import { theme } from "../../../theme/constants";

export default TheIcon = ({ mode, onPress }) => {
  const backgroundColor =
    mode === theme.lightThemeName
      ? dark.colors.background
      : light.colors.background;

  const rotateZ = mode === theme.lightThemeName ? "180deg" : "0deg";

  return (
    <Icon
      style={{ transform: [{ rotateZ }] }}
      name="theme-light-dark"
      color={backgroundColor}
      size={35}
      onPress={onPress}
    />
  );
};
