import React from "react";
import { ScrollView, Dimensions } from "react-native";
import styled from "styled-components";

// Components
import Header from "./src/components/header";

import { Colors } from "./theme";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Styles
const Container = styled.SafeAreaView`
  flex: 1;
  width: ${screenWidth};
  background-color: ${Colors.dark};
`;

const App = () => {
  return (
    <Container>
      <Header username={"alfonso"} />
      <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView>
    </Container>
  );
};

export default App;
