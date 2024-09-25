import { NavLink } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const SubNavbar = () => {
  const [openham, setOpenHam] = useState(false);

  return (
    <div className="secondNavbar sticky">
      <div className="leftPart">
        <div className="logoBox">
          <NavLink to="/">
            <img src="images/logo.png" alt="logo" className="logoImage" />
          </NavLink>
        </div>
        <div className="actionLinks">
          <ul>
            <NavLink to="/" className="link">
              <li>home</li>
            </NavLink>
            <NavLink to="/about" className="link">
              <li>about</li>
            </NavLink>
            <NavLink to="/gallery" className="link">
              <li>gallery</li>
            </NavLink>
            <NavLink to="/courses" className="link">
              <li>courses</li>
            </NavLink>
            <NavLink to="/contact" className="link">
              <li>contact</li>
            </NavLink>
          </ul>
        </div>
        {/* this is the navitems of mobile screeen */}

        <div className={openham ? "hidden" : "mbNavItems"}>
          <img src="images/homeFQ2.png" alt="silder" className="mbSilder" />
          <img src="images/homeFQ3.png" alt="silder" className=" again" />
          <ul>
           
            <div className="linkBoxMb">
              {" "}
              <NavLink to="/">
                <li className="navMbV" onClick={() => setOpenHam(true)}>home</li>
              </NavLink>
            </div>
            <div className="linkBoxMb">
              {" "}
              <NavLink to="/about">
                <li className="navMbV" onClick={() => setOpenHam(true)}>about</li>
              </NavLink>
            </div>
            <div className="linkBoxMb">
              {" "}
              <NavLink to="/gallery">
                <li className="navMbV" onClick={() => setOpenHam(true)}>gallery</li>
              </NavLink>
            </div>
            <div className="linkBoxMb">
              {" "}
              <NavLink to="/courses">
                <li className="navMbV" onClick={() => setOpenHam(true)}>courses</li>
              </NavLink>
            </div>
            <div className="linkBoxMb">
              {" "}
              <NavLink to="/contact">
                <li className="navMbV" onClick={() => setOpenHam(true)}>contact</li>
              </NavLink>
            </div>
          </ul>
        </div>
      </div>
      <div className="actionButtons">
        <RxHamburgerMenu
          className="hambur"
          onClick={() => setOpenHam(!openham)}
        />
        <button className="btnApply">
          apply now
          <IoIosArrowDropleftCircle className="insideIconBtn" />
        </button>

        {/* this is for whatsApp integration */}
        {/* <button className="btnApply"><a href="https://wa.me/918299692948?text=Hello how can i help you?" target="_blank">apply now<IoIosArrowDropleftCircle className="insideIconBtn" /></a></button> */}
      </div>
    </div>
  );
};

export default SubNavbar;
