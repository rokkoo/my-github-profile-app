import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

// Context
import { AppProvider } from "./context/AppContext";

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
  background-color: ${props => props.theme.colors.background};
`;

const Body = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  color: white;
`;

const App = () => {
  const { state, isLoaded, owner } = useGithub();

  return isLoaded ? (
    <AppProvider>
      <Container>
        <Header username="Alfonso aguirre" imageUrl={owner.avatar_url} />
        <Body>
          <List data={state} />
        </Body>
      </Container>
    </AppProvider>
  ) : (
    <Text>Loading...</Text>
  );
};

export default App;
