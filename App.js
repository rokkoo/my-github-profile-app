import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { CardView } from "./nativeModules";

// Theme
import { Colors } from "./theme";

// Components
import Header from "./src/components/header";
import List from "./src/components/list";

// Hooks
import useGithub from "./src/hooks/useGithub";

const { width: screenWidth } = Dimensions.get("window");

// Styles
const Container = styled.SafeAreaView`
  flex: 1;
  width: ${screenWidth};
  background-color: ${Colors.dark};
`;

const Card = styled(CardView)`
  background-color: red;
`;

const Text = styled.Text`
  font-size: 20;
  color: ${Colors.dark};
`;

const Body = styled.View`
  flex: 1;
`;

const App = () => {
  const { state, isLoaded, owner } = useGithub();

  console.log(state);

  return (
    <Container>
      <Header username={"alfonso"} />

      <Body>
        <List data={state} />
      </Body>
    </Container>
  );
};

export default App;
