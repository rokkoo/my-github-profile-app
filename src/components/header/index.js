import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Styles
import {
  TextWrapper,
  Text,
  Background,
  Container,
  AvatarWrapper,
  Image
} from "./styles";

const Header = ({ username }) => {
  return (
    <Container>
      <Background
        colors={["#845EC2", "#2870EE", "#5FFBF1"]}
        start={{ x: 0.1, y: 2 }}
        end={{ x: 1, y: 0 }}
      />
      <AvatarWrapper>
        <Image url="https://avatars2.githubusercontent.com/u/25004016?v=4" />
      </AvatarWrapper>
      <TextWrapper>
        <Text>{username}</Text>
        <Icon name="theme-light-dark" size={35} />
      </TextWrapper>
    </Container>
  );
};

export default Header;
