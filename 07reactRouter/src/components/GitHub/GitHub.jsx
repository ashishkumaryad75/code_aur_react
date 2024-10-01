// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/ashishkumaryad75")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl text-center p-4 m-4 text-3">
      GitHub Followers : {data.followers}
      <img src={data.avatar_url} alt="git picture " width={300} />
    </div>
  );
}

export const GithubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ashishkumaryad75");
  return response.json();
};
