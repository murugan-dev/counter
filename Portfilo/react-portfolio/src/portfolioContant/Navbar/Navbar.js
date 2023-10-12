import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { TbBrandReact } from "react-icons/tb";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { MdOutgoingMail } from "react-icons/md";

import "./Navbar.scss";
const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
 
  return (
    <>
      <nav>
        <div className="nav-icon">
          <TbBrandReact />
          <h3>PortfoliO</h3>
        </div>      
        <div className={Mobile ? "list-container-mobile" : "list-container"}>
          <li>
            <NavLink to="/">
              <AiOutlineHome className="sub-icons" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <CgProfile className="sub-icons" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills">
              <GiSkills className="sub-icons" />
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdOutgoingMail className="sub-icons" />
              Contact
            </NavLink>
          </li>
        </div>
        <div className="mobile-view" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <RxCross2 /> : <VscThreeBars />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
