import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Themes
import light from "../theme/light";
import dark from "../theme/dark";

// Contants
import { theme } from "../theme/constants";

const AppContext = React.createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({ mode: theme.lightThemeName });

  return (
    <ThemeProvider theme={state.mode === theme.lightThemeName ? light : dark}>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
};

export { AppContext, AppProvider };
