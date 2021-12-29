import { useEffect, useState } from "react";
import axios from "axios"; // for API Calling

const api = axios.create({
  baseURL: "https://api.github.com",
});

function GitHubAPI() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  //   ComponentDidMount
  useEffect(() => {
    // Immediately Invoked Function Expression - IIFE
    (async () => {
      const { data: user } = await api.get("/users/abdullahGhani1"); // user Data
      console.log("user ", user);
      setUserData(user); // update state of the userData

      const { data: repo } = await api.get("/users/abdullahGhani1/repos");
      console.log("repos: ", repo);
      setUserRepos(repo); // update state of the userRepos        // user repos
    })();
  }, []);
  return (
    <div>
      <h1>User Data</h1>
      <pre>{userData && JSON.stringify(userData, null, 4)}</pre>
      <h3>User Repo Data</h3>
      <pre>{userRepos && JSON.stringify(userRepos, null, 4)}</pre>
    </div>
  );
}

export default GitHubAPI;
