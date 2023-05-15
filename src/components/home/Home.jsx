import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-center md:text-4xl font-bold my-11">
        I grow by helping people in need.
      </h1>

      <div className="grid md:grid-cols-4 gap-9 justify-center">
        {data.map((dt) => (
          <HomeCard key={dt._id} dt={dt}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
