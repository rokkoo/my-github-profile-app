import { useState, useEffect } from "react";

const PROFILE_END_POINT = "https://api.github.com/users/rokkoo/repos";

const useGithub = () => {
  const [state, setState] = useState([]);
  const [owner, setOwner] = useState({});
  const [isLoaded, setIsloaded] = useState(false);

  // Get github repositories
  useEffect(() => {
    (async () => {
      const data = await fetch(PROFILE_END_POINT);
      const jsonData = await data.json();
      // Order repo list by date ASC
      const sortedByDate = jsonData.sort((current, next) => {
        const firstDate = new Date(current.created_at);
        const nextDate = new Date(next.created_at);
        return nextDate - firstDate; // ASC
      });

      setState(sortedByDate);
      setOwner(sortedByDate[0].owner);
      setIsloaded(true);
    })();
  }, []);

  return { state, isLoaded, owner };
};

export default useGithub;
