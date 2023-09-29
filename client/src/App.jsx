import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register";
import Forgetpass from "./components/Auth/Forgetpass";
import Resetpass from "./components/Auth/Resetpass";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import Subscribe from "./components/Payment/Subscribe";
import PaymentSuccess from "./components/Payment/PymentSuccess";
import PaymentFail from "./components/Payment/PaymentFail";
import NotFound from "./components/Payment/NotFound";
import CoursePage from "./CoursePage/CoursePage";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import AdminCourses from "./Admin/AdminCourses/AdminCourses"
import CreateCourses from "./Admin/CreateCourses/CreateCourses"
import Users from "./Admin/Users/Users"
const App = () => {
  // window.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetpassword" element={<Forgetpass />} />
          <Route path="/resetpassword/:token" element={<Resetpass />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/admin/admincourses" element={<AdminCourses />} />
          <Route path="/admin/createcourses" element={<CreateCourses />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
