import { StarIcon } from "@heroicons/react/24/solid";

export const calculateRepoScore = (
  openIssuesCount: number,
  score: number,
  stargazersCount: number,
): JSX.Element => {
  // Calculate an overall score based on the given parameters
  const overallScore: number = (openIssuesCount + score + stargazersCount) / 3;

  // Map the overall score to a scale from 1 to 5
  if (overallScore >= 80) {
    return (
      <>
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
      </>
    );
  } else if (overallScore >= 60) {
    return (
      <>
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
      </>
    );
  } else if (overallScore >= 40) {
    return (
      <>
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
      </>
    );
  } else if (overallScore >= 20) {
    return (
      <>
        <StarIcon className="h-4 w-4 text-yellow-500" />
        <StarIcon className="h-4 w-4 text-yellow-500" />
      </>
    );
  } else {
    return <StarIcon className="h-4 w-4 text-yellow-500" />;
  }
};
