import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./profilestyle/changepassword.css";
const ChangePassword = () => {
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  return (
    <section className="ch-pass">
      <Navbar />
      <h2 className="ch-pass-h2">ChangePassword</h2>
      <form className="ch-pass-form">
        <input
          type="password"
          onChange={(e) => setoldpassword(e.target.value)}
          placeholder="Enter Password"
          value={oldpassword}
          className="ch-pass-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setnewpassword(e.target.value)}
          placeholder="Enter New Password"
          value={newpassword}
          className="ch-pass-input"
          required
        />
        <button type="submit" className="ch-pass-bt">
          Change
        </button>
      </form>
    </section>
  );
};

export default ChangePassword;
