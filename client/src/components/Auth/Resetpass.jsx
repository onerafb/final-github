import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./auth-style/resetpass.css"
import Navbar from "../Navbar/Navbar";
const Resetpass = () => {
  const [password, setpassword] = useState("");
  const params = useParams();
  return (
    <section className="reset-pass">
      <Navbar/>
      <form className="reset-form">
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter new password"
          value={password}
          className="reset-input"
          required
        />
        <button type="submit" className="reset-bt">Update Password</button>
      </form>
    </section>
  );
};

export default Resetpass;
