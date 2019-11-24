import React from "react";

// Components
import Icon from "../themeIcon";

// Hooks
import useAppContext from "../../hooks/useAppContext";

// Styles
import { TextWrapper, Text, Container, AvatarWrapper, Image } from "./styles";

const Header = ({ username, imageUrl }) => {
  const { toggleMode, themeMode } = useAppContext();

  return (
    <Container>
      <AvatarWrapper>
        <Image url={imageUrl} />
      </AvatarWrapper>
      <TextWrapper>
        <Text>{username}</Text>
        <Icon onPress={toggleMode} mode={themeMode} />
      </TextWrapper>
    </Container>
  );
};

export default Header;
