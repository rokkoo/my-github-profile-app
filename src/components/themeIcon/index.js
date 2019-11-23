import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Themes
import light from "../../../theme/light";
import dark from "../../../theme/dark";

// Constants
import { theme } from "../../../theme/constants";

export default TheIcon = ({ mode, onPress }) => {
  const color =
    mode === theme.lightThemeName
      ? dark.colors.background
      : light.colors.background;

  return (
    <Icon name="theme-light-dark" color={color} size={35} onPress={onPress} />
  );
};
