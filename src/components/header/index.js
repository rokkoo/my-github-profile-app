import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Theme
import { Colors } from "../../../theme";

// Styles
import { TextWrapper, Text, Container, AvatarWrapper, Image } from "./styles";

const Header = ({ username }) => {
  return (
    <Container>
      <AvatarWrapper>
        <Image url="https://avatars2.githubusercontent.com/u/25004016?v=4" />
      </AvatarWrapper>
      <TextWrapper>
        <Text>{username}</Text>
        <Icon name="theme-light-dark" size={35} color={Colors.light} />
      </TextWrapper>
    </Container>
  );
};

export default Header;
