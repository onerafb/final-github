import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./profilestyle/updateprofile.css";
const UpdateProfile = () => {
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  return (
    <section className="up-p-sec">
      <Navbar />
      <h2 className="up-p-h2">UpdateProfile</h2>
      <form className="up-p-form">
        <input
          type="password"
          onChange={(e) => setname(e.target.value)}
          placeholder="Enter Password"
          value={name}
          className="up-p-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter New Password"
          value={email}
          className="up-p-input"
          required
        />
        <button type="submit" className="up-p-bt">
          Change
        </button>
      </form>
    </section>
  );
};

export default UpdateProfile;
