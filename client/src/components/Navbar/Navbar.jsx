import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [state, setstate] = useState(false);
  const hs = () => {
    setstate(!state);
  };
  const isAuthenticated = false;
  const user = {
    role: "admin",
  };
  const logouthandler = () => {
    setstate(!state);
  };
  return (
    <>
      <nav>
        <div className="logo">LOGO</div>
        <div className="bars" onClick={hs}>
          {state ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul className={state ? "ul-one" : "ul-one active"}>
          <Link to="/" className="link-pd" onClick={hs}>
            Home
          </Link>
          <Link to="/about" className="link-pd" onClick={hs}>
            About
          </Link>
          <Link to="/request" className="link-pd" onClick={hs}>
            Request-Course
          </Link>
          <Link to="/courses" className="link-pd" onClick={hs}>
            All-Course
          </Link>
          <Link to="/contact" className="link-pd" onClick={hs}>
            Contact
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="link" onClick={hs}>
                <button className="nav-bt">Profile</button>
              </Link>
              <p className="or">OR</p>
              <button onClick={logouthandler} className="nav-bt nav-logout">
                Logout
              </button>
              {user && user.role === "admin" && (
                <Link to="/admin/dashboard" className="link" onClick={hs}>
                  <button className="nav-bt">Dashboard</button>
                </Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="link" onClick={hs}>
                <button className="nav-bt">Login</button>
              </Link>
              <p className="or">OR</p>
              <Link to="/register" className="link" onClick={hs}>
                <button className="nav-bt">Sign-Up</button>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
