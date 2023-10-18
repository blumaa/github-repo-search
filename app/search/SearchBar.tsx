import React, { Dispatch, SetStateAction } from "react";

const SearchBar = ({
  repoName,
  setRepoName,
  handleSearch,
}: {
  repoName: string;
  setRepoName: Dispatch<SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  return (
    <div className="p-2 space-x-2">
      <input
        type="text"
        value={repoName}
        onChange={(e) => setRepoName(e.target.value)}
        placeholder="Enter repository name"
        className="text-black rounded-md pl-2 pr-2"
      />
      <button className="rounded-md border border-sky-500  pr-4 pl-4 hover:bg-sky-900" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
