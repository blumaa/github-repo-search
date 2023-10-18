"use client";
import React, { useEffect, useState } from "react";
import RepoCard from "../components/RepoCard";
import { useQuery } from "react-query";
import SearchBar from "./SearchBar";
import AnimatedAirplaneLoader from "../components/AnimatedAirplaneLoader";

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

  return (
    <div className="w-full flex-col justify-center items-center">
      <h1>Which Gihub Repo are you looking for?</h1>
      <SearchBar
        repoName={repoName}
        setRepoName={setRepoName}
        handleSearch={refetch}
      />
      <div className="w-full flex-col justify-center items-center">
        {isLoading && (
          <div className="flex justify-center items-center h-screen">
            <AnimatedAirplaneLoader />
          </div>
        )}
        {isError && <div>Error fetching data from Github</div>}
        {isSuccess &&
          data.items.map((repo: any) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default GitHubRepoSearch;
