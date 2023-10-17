"use client";

import React, { useState } from "react";
import RepoCard from "../components/RepoCard";
import { useQuery } from "react-query";

const fetchGitHubRepos = async (repoName: string) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${repoName}`,
  );
  const data = await response.json();
  return data;
};

const GitHubRepoSearch: React.FC = () => {
  const [repoName, setRepoName] = useState<string>("");

  const { data, isLoading, isError, isSuccess, refetch } = useQuery(
    ["githubRepos", repoName],
    () => fetchGitHubRepos(repoName),
    { enabled: false },
  );

  const handleSearch = () => {
    refetch();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data from GitHub API</div>;
  }

  return (
    <div>
      <h1>GitHub Repositories</h1>
      <input
        type="text"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        placeholder="Enter repository name"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {isSuccess &&
          data.items.map((repo: any) => <RepoCard key={repo.id} repo={repo} />)}
      </ul>
    </div>
  );
};

export default GitHubRepoSearch;
