"use client";
import { useQuery } from "react-query";
import Image from "next/image";
import AnimatedAirplaneLoader from "../../components/AnimatedAirplaneLoader";

const fetchOwnerData = async (userId: number) => {
  const response = await fetch(`https://api.github.com/user/${userId}`);
  const data = await response.json();
  return data;
};

const OwnerPage = ({ params }: { params: { id: number } }) => {
  const userId = params.id;

  const { data, isLoading, isError } = useQuery(
    ["owner", userId],
    () => fetchOwnerData(userId),
    {
      enabled: !!userId,
    },
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AnimatedAirplaneLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching owner data</div>;
  }

  const { avatar_url, bio, name, followers } = data;

  return (
    <div className="h-screen w-full flex justify-center items-center shadow-lg">
      {isLoading && <div>Loading</div>}
      {!isLoading && (
        <div className="border border-sky-500 rounded-lg flex-col space-y-4 p-4 bg-sky-900 max-w-lg">
          <div className="flex justify-center pt-2">
            <Image
              width={200}
              height={200}
              src={avatar_url}
              alt="avatar"
              className="p-2 border border-gray-500 border-solid rounded-full shadow-lg"
            />
          </div>
          <div className="text-2xl text-white flex justify-center">{name}</div>
          <p>{bio || "No bio found"}</p>
          <p>Followers: {followers}</p>
        </div>
      )}
    </div>
  );
};

export default OwnerPage;
