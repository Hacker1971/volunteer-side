import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import EventPage from "./EventPage";

const Event = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const url = `https://volunteer-server-ivory.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          // logout and then navigate
          navigate("/");
        }
      });
  }, [url, navigate,user]);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-8">
        {bookings.map((booking) => (
          <EventPage
            key={booking._id}
            booking={booking}
            bookings={bookings}
            setBookings={setBookings}
          ></EventPage>
        ))}
      </div>
    </div>
  );
};

export default Event;
