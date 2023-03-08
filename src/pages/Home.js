import React from "react";
import Topbar from "../components/Navbar";
import Posts from "../components/Posts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="cover">
        <div className="container">
        <h1 className="display-3 text-white">Welcome to Home Page</h1>
        </div>
      </div>
      <Posts />
    </>
  );
};

export default Home;
