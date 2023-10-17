import Image from "next/image";
import Link from "next/link";
import { calculateRepoScore } from "../utils/calculateRepoScore";

const RepoCard = ({ repo }) => {
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


  const formattedDate = new Intl.DateTimeFormat("en-US").format(
    new Date(updated_at),
  );

  return (
    <Link href={`/Owner/${owner.id}`}>
      <div className="flex space-x-2 p-2 border border-sky-500 border-solid w-1/2">
        <div className="flex justify-center items-center h-full border border-yellow-500">
          <Image
            width={200}
            height={200}
            src={owner.avatar_url}
            alt="repo avatar"
            className="p-2 border border-gray-500 border-solid rounded-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="space-y-2">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="flex">{repoScore}</div>
            <p>{language}</p>
            <p>Last updated: {formattedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RepoCard;
