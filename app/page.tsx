import GitHubRepoSearch from "./search/GitHubRepoSearch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <GitHubRepoSearch />
    </main>
  );
}
