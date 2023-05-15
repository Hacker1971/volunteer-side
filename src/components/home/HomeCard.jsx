/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// eslint-disable-next-line react/prop-types
const HomeCard = ({ dt }) => {
  const { user } = useContext(AuthContext);
  const { title, image, date } = dt;

  const submit = () => {
    const email = user?.email;
    const add = {
      email,
      title,
      image,
      date,
    };

    fetch("https://volunteer-server-ivory.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
  };
  return (
    <>
      <div
        onClick={submit}
        className="card card-compact w-64 h-80 bg-base-100 shadow-xl"
      >
        <figure>
          <img src={dt.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">{dt.title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
