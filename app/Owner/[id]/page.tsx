"use client";
import { useQuery } from "react-query";
import Image from "next/image";

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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching owner data</div>;
  }

  console.log("owner data", data);
  const { avatar_url, bio, name, followers } = data;

  return (
    <div>
      <Image width={200} height={200} src={avatar_url} alt="avatar" />
      <h1>{name}</h1>
      <p>{bio || "No bio found"}</p>
      <p>Followers: {followers}</p>
    </div>
  );
};

export default OwnerPage;
