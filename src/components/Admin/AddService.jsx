import React from "react";
import logo from "../../assets/logos/Group 1329.png";
import { Link } from "react-router-dom";

const AddService = () => {
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const date = form.date.value;
    const Description = form.Description.value;
    const image = form.url.value
    const booking = {
      title,
      date,
      Description,
      image,
    };
    console.log(booking);
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    };

    fetch("https://volunteer-server-ivory.vercel.app/services", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
        form.reset();
      });
    // .catch(err => console.error(err));
  };
  return (
    <div>
      <div className="flex flex-col w-full mt-5">
        <div className="flex gap-16 h-20   rounded-box ">
          <Link to="/">
            <img src={logo} className="w-32 h-9 " alt="" />
          </Link>
          <h1 className="text-2xl font-semibold">Add event</h1>
        </div>
      </div>
      <div className="md:flex w-full mx-auto">
        <div className="w-1/4">
          <h1 className="mt-7">Volunteer register list</h1>
          <h2 className="text-[#207FEE] mt-7 btn">Add event</h2>
        </div>
        <div className="w-3/4 sm:mt-12 bg-[#E5E5E5] text-center ">
          <div className="p-12">
            <form onSubmit={handleBookService}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Event Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">Description</label>
                  <textarea name="Description" rows="" cols=""></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Banner</span>
                  </label>
                  <input
                    type="url"
                    
                    name="url"
                    className="input input-bordered"
                    placeholder="Url"
                    required
                  />
                </div>
              </div>
              <div className="text-end  ">
                <input
                  className="btn bg-[#0084FF]"
                  type="submit"
                  value="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
