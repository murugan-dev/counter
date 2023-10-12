import React from 'react';
import {useNavigate} from 'react-router-dom'
import './About.scss';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'


const About = () => {
  // const edu_data =[
  // {"S.No": 1, "School/College" :"Govt Higher Secondary School pappapatti",Year: "2017-2018", percentage: "73%"},
  // {"S.No": 2, "School/College" :"Govt Higher Secondary School pappapatti",Year: "2019-2020", percentage: "76%"},
  // {"S.No": 3, "School/College" :"KNCET",Year: "2020-2024", percentage: "82.8%"}
  // ]
  const moreNavigate = useNavigate();
  const backNavigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-content">
        <h2 className='about-h2'>About me</h2>

        <h3 className="intro">
          <div className="h-points"></div>Introduction
        </h3>
        <br />
        <p>
          Murugan Kumarasamy present. I attend Kongunadu College of Engineering
          and Technology, pursuing a Bachelor of Engineering in the Electronics
          and Communication Engineering track. I am from Musiri, a town in
          TRICHY. I know a lot about front-end technology. Because I apply my
          knowledge and talents to help the organization growth
        </p>
        <br />
        <hr/>
        <br />
        <h3 className="education">
          <div className="h-points"></div>Education Details
        </h3>   
        <img src='Images/school.jpeg' alt='school' className='about-scl-img'/>
        <li className='about-scl-li'> I completed my SSLC at the Government higher secondary school in Papapatti in 2018.</li>
        <strong className="sslc-score">SSLC Score : 73%</strong>
        <li className='about-hsc-li'> I completed my HSC at the Government higher secondary school in Papapatti in 2020.</li>
        <strong className="hsc-score">SSLC Score : 76%</strong>
        <li className='about-clg-li'> I'm pursuing a Bachelor of Engineering at Kongunadu College of Engineering and Technology in the Electronics and Communication Engineering track.</li>
        <strong className="clg-score">Score upto 6th semseter : 82.8%</strong>
        <br />
      <button className='about-back-btn about-btn' onClick={()=>backNavigate('/')}><AiOutlineArrowLeft/>Back</button>
      <button className='about-more-btn about-btn' onClick={()=>moreNavigate("/skills")}>More<AiOutlineArrowRight/></button>
      </div>
    </div>
  );
}
export default About;
