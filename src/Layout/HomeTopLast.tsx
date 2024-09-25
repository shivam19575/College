import { NavLink } from "react-router-dom";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const HomeTopLast = () => {
  return (
    // this is the parent of all home

    <div className="homeLastBox w-full min-h-[600px] h-auto flex justify-center items-center gap-5 m-auto mt-10 mb-20   ">
      {/* this is the left section of the home */}

      <div className="left w-1/2 min-h-full h-auto flex flex-col gap-5 justify-center items-center m-auto  relative">
        <div className="topdataFade">
          <h2 className="text-blue-800 text-xl capitalize">
            the path way to education
          </h2>
        </div>
        <div className="boxFade   flex items-center m-auto justify-center absolute mb-10"></div>
        <h1 className="text-blue-700 text-6xl font-bold mb-4 capitalize">
          learn new skills online{" "}
        </h1>
        <h1 className="text-blue-700 text-6xl font-bold mb-12 capitalize ">
          with top{" "}
          <span className="text-teal-400 text-6xl font-bold mb-12 capitalize">
            instructors
          </span>
        </h1>
        <div className="downDataHome w-2/3 h-15  m-auto absolute ">
          <p className="text-xl text-slate-600 capitalize mb-5">
            there are many variations of passage of time some have sufferd and
            some has been alterd
          </p>
        </div>
        <div className="actionHomeBtn w-full h-25 flex flex-row gap-6 justify-center items-center m-auto ">
          <NavLink
            to="/courses"
            className="max-w-[150px] w-1/2  h-20 m-auto flex flex-row  rounded-xl justify-center items-center bg-blue-700 text-white border-blue-700 cursor-pointer navLi"
          >
            <span className="text-xl capitalize">find courses</span>
            <IoIosArrowDropleftCircle className="text-xl flex justify-center items-center m-auto" />
          </NavLink>
          <NavLink
            to="/about"
            className=" max-w-[150px] w-1/2 h-20 m-auto flex flex-row  rounded-xl justify-center items-center bg-white border-blue-700 outline-blue-800 btnHomeNav navLi"
          >
            <span className="text-xl capitalize text-blue-900">about us</span>
            <IoIosArrowDropleftCircle className="text-xl flex justify-center items-center m-auto" />
          </NavLink>
        </div>
      </div>

      {/* right side of top section is here*/}

      <div className="right ">
      <img src="images/sliderHome.jpg" alt="slider" className="sliderHome_Top" />
      <div className="beat"></div>
      <img src="images/silder2.0.png" alt="slider" className="slider2point" />
      <img src="images/sliderHome1.jpg" alt="slider" className="slide_One" />
        <div className="hexagon">
          <img src="images/courses3.jpg" alt="home images" className="imgHomeTop" />
          <div className="bluestar"><p className="text-base text-white font-semibold p-3 capitalize">200k + students</p></div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopLast;
