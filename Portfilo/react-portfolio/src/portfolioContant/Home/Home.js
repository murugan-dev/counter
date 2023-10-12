import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Typical from "react-typical";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdCodeDownload } from "react-icons/io";

const Home = () => {
  const Navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-contant">
        <img src="murugan.jpeg" alt="Profile"  className="home-img"/>
        <div className="home-text">
          
        </div>

        <div className="home-content">
          <Typical
            loop={Infinity}
            steps={["WELCOME TO", 500, "MY PORTFOLIO", 500]}
          />
          <h1>
            Hi, I am
          </h1>
          <h1>
            <span className="home-span">MURUGAN K</span>
          </h1>
          <h3 className="home-h3">Ethusiastic Frontend Web Developer</h3>
          <a href="MURUGAN_K.pdf" download="Murugan.pdf">
          <button className='resume-btn home-btn'><IoMdCodeDownload />Get Resume</button>
          </a>
          <button onClick={() => Navigate("about")} className="more-btn home-btn">
            Know More <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
