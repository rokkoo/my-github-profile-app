import { useState, useEffect } from "react";

const PROFILE_END_POINT = "https://api.github.com/users/rokkoo/repos";

const useGithub = () => {
  const [state, setState] = useState([]);
  const [owner, setOwner] = useState({});
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetch(PROFILE_END_POINT);
      const jsonData = await data.json();
      setState(jsonData);
      setOwner(jsonData[0].owner);
      setIsloaded(true);
    })();
  }, []);

  return { state, isLoaded, owner };
};

export default useGithub;
