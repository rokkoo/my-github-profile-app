import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

import { ImageView } from "../../../nativeModules";

// Theme
import { Colors } from "../../../theme";

const { width: screenWidth } = Dimensions.get("window");
const avatarSize = { width: 100, height: 100 };

const height = 100;

// Styles
const Container = styled.View`
  width: ${screenWidth};
  height: ${(avatarSize.height * 2) / 2 - 10};
  align-items: center;
  /* background-color: tomato; */
  padding-top: 10;
`;

const AvatarWrapper = styled.View`
  width: ${avatarSize.width};
  height: ${avatarSize.height};
  border-radius: 80;
  overflow: hidden;
`;

const Text = styled.Text`
  color: ${Colors.light};
  font-size: 20;
`;

const Background = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = ({ username }) => {
  return (
    <Container>
      <Background
        colors={["#845EC2", "#2870EE", "#5FFBF1"]}
        start={{ x: 0.1, y: 2 }}
        end={{ x: 1, y: 0 }}
      />
      <Text>{username}</Text>
      <AvatarWrapper>
        <ImageView
          {...avatarSize}
          url="https://avatars2.githubusercontent.com/u/25004016?v=4"
        />
      </AvatarWrapper>
    </Container>
  );
};

export default Header;
