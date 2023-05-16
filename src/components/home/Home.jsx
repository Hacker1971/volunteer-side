import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";

const Home = () => {
  const data = useLoaderData();
  const [count, setCount] = useState(data);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (count) {
      fetch(`http://localhost:5000/services/${searchData}`)
        .then((res) => res.json())
        .then((data) => setCount(data));
    }
  }, [count]);

  const handelSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    setSearchData(search);
  };

  return (
    <div>
      <h1 className="text-center md:text-4xl font-bold my-11">
        I grow by helping people in need.
      </h1>
      <form onSubmit={handelSearch} className="mx-auto md:ml-96 sm:ml-36 my-11">
      
        <input
          type="search"
          name="search"
          placeholder="Type here"
          className="input input-ghost w-full max-w-xs mx-2"
        />
        <input type="submit" value="Search" className="btn  " />
      </form>

      <div className="grid md:grid-cols-4 gap-9 justify-center">
        {count.map((dt) => (
          <HomeCard key={dt._id} dt={dt}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
