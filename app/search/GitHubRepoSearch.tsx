"use client";

import React, { useState } from "react";

interface RepoData {
  full_name: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
}

const GitHubRepoSearch: React.FC = () => {
  const [repoName, setRepoName] = useState<string>("");
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${repoName}`
      );

      if (response.ok) {
        const data: RepoData = await response.json();
        console.log('data', data)
        setRepoData(data);
      } else {
        console.error("Error fetching repository data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching repository data:", error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
          placeholder="Enter repository name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {repoData ? (
        <div>
          <h1>Repository: {repoData.full_name}</h1>
          <p>Description: {repoData.description}</p>
          <p>Stars: {repoData.stargazers_count}</p>
          <p>Watchers: {repoData.watchers_count}</p>
          <p>Forks: {repoData.forks_count}</p>
        </div>
      ) : null}
    </div>
  );
};

export default GitHubRepoSearch;
