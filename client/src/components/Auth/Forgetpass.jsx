import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./auth-style/forgetpass.css";
const Forgetpass = () => {
  const [email, setemail] = useState("");
  return (
    <>
      <section className="forget-pass">
        <Navbar/>
        
        <form className="forget-form">
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            placeholder="Enter Email"
            value={email}
            className="forget-input"
            required
          />
          <button type="submit" className="forget-bt">Send reset link</button>
        </form>
      </section>
    </>
  );
};

export default Forgetpass;
