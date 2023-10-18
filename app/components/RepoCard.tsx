import Image from "next/image";
import Link from "next/link";
import { calculateRepoScore } from "../utils/calculateRepoScore";

const RepoCard = ({ repo }: { repo: any }) => {
  const {
    description,
    full_name: title,
    language,
    owner,
    open_issues_count,
    score,
    stargazers_count,
    updated_at,
  } = repo;

  const repoScore: JSX.Element = calculateRepoScore(
    open_issues_count,
    score,
    stargazers_count,
  );

  const formattedDate = new Intl.DateTimeFormat("en-DE").format(
    new Date(updated_at),
  );

  return (
    <div className="flex border border-sky-500 border-solid min-h-fit max-w-lg mb-2 rounded-md overflow-auto hover:scale-105 transition-all">
      <Link href={`/Owner/${owner.id}`}>
        <div className="flex space-x-2 p-2 ">
          <Image
            width={200}
            height={200}
            src={owner.avatar_url}
            alt="repo avatar"
            className="p-2 border border-gray-500 border-solid rounded-full shadow-lg"
          />
          <div className="flex justify-center items-center">
            <div className="space-y-2">
              <div className="text-2xl text-white">{title}</div>
              <p>{description || "No description found."}</p>
              <div className="flex">{repoScore}</div>
              <p>{language || "No language listed."}</p>
              <p>Last updated: {formattedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RepoCard;
