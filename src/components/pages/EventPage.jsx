/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
const EventPage = ({ booking, setBookings, bookings }) => {
  const handelCencel = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://volunteer-server-ivory.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = bookings.filter((bookin) => bookin._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-52 h-52 p-8 rounded-lg"
          src={booking.image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{booking.title}</h2>
        <p>{booking.date}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handelCencel(booking._id)}
            className="btn btn-primary"
          >
            Cencel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
