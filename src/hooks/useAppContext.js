import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { SharedPreference } from "../../nativeModules";

// Constants
import { theme } from "../../theme/constants";

const useAppContext = () => {
  const [state, setState] = useContext(AppContext);
  const { themeMode } = state;

  // Changue theme shared prefence themeMode bween light and dark themeMode
  const toggleMode = () => {
    const selectedTheme =
      themeMode === theme.lightThemeName
        ? theme.darkTheName
        : theme.lightThemeName;

    SharedPreference.setSharedPreference(
      theme.preferenceName,
      selectedTheme,
      (_, saved) => {
        if (saved) setState({ ...state, themeMode: selectedTheme });
      }
    );
  };

  // Get theme shared preference
  // If something wrong trigger toggleTheme
  useEffect(() => {
    SharedPreference.getSharedPreference(
      theme.preferenceName,
      (err, themeMode) => {
        if (err) toggleTheme();
        setState({ ...state, themeMode });
      }
    );
  }, []);

  return { toggleMode, themeMode };
};

export default useAppContext;
