import React from "react";

// Components
import Icon from "../themeIcon";

// Hooks
import useAppContext from "../../hooks/useAppContext";

// Styles
import { TextWrapper, Text, Container, AvatarWrapper, Image } from "./styles";

const Header = ({ username, imageUrl }) => {
  const { toggleMode, state } = useAppContext();

  return (
    <Container>
      <AvatarWrapper>
        <Image url={imageUrl} />
      </AvatarWrapper>
      <TextWrapper>
        <Text>{username}</Text>
        <Icon onPress={toggleMode} mode={state.mode} />
      </TextWrapper>
    </Container>
  );
};

export default Header;
