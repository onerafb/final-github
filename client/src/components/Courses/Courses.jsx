import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import test from "../../assets/images/test.jpg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./courses.css";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <>
      <img src={imageSrc} alt="test" />
      <h1>{title}</h1>
      <h4>{description}</h4>
      <h4>{`Creator - ${creator}`}</h4>
      <h4>{`Lectures - ${lectureCount}`}</h4>
      <h4>{`Views - ${views}`}</h4>
      <Link to={`/course/${id}`} className="course-link">
        Watch now
      </Link>
      <button onClick={() => addToPlaylistHandler(id)} className="add-bt">
        Add to Playlist
      </button>
    </>
  );
};

const Courses = () => {
  const [keyword, setkeyword] = useState("");
  const [category, setcategory] = useState("");
  const [state, setstate] = useState(false);
  const hs = () => {
    setstate(!state);
  };
  const setclick = () => {
    setstate(!state);
    // setcategory(item);
  };
  const addToPlaylistHandler = () => {
    console.log("added");
  };

  const categories = [
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
  
  ];
  return (
    <>
      <section className="section-courses">
        <Navbar />
        <div className="cr-one">
          <div className="courses-one">
            <input
              type="text"
              value={keyword}
              placeholder="Search a course"
              onChange={(e) => setkeyword(e.target.value)}
              className="course-input"
            />
          </div>
          <div className="show-hide" onClick={hs}>
            <button className="cr-bt">Select Course</button>
          </div>
          <div className={state ? "courses-two cr-active" : "courses-two"}>
            <div className="courses-u">
              <span onClick={hs}>
                <AiOutlineClose />
              </span>
            </div>
            <div className="courses-d">
              {categories.map((item, index) => (
                <button className="array-bt" key={index} onClick={setclick}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="courses-three">
            <Course
              title={"sample1"}
              description={"sample1"}
              views={23}
              imageSrc={test}
              id={"sample1"}
              creator={"sample boy"}
              lectureCount={2}
              addToPlaylistHandler={addToPlaylistHandler}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
