import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

// Constants
import { theme } from "../../theme/constants";

const useAppContext = () => {
  const [state, setState] = useContext(AppContext);

  // Changue mode bween light and dark mode
  const toggleMode = () => {
    setState({
      ...state,
      mode:
        state.mode === theme.lightThemeName
          ? theme.darkTheName
          : theme.lightThemeName
    });
  };

  return { toggleMode, state };
};

export default useAppContext;
