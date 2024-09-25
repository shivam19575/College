import { BsFillHandbagFill } from "react-icons/bs";
import { GiStrong } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

import { AiFillSound } from "react-icons/ai";


const HomeSecond = () => {
  return (
    <div className="boxSecondTop">
      <div className="floatHome"></div>
      <div className="floatTwo"></div>
      <div className="home2">
        {/* <div className="floatHome2"></div> */}
        <h2 className="text-center text-xl uppercase text-orange-700 font-bold mt-10 h2HomeTest ">
          our category
        </h2>
        <h1 className="text-center text-4xl uppercase text-blue-950 font-bold mt-10">
          our{" "}
          <span className="text-center text-4xl  text-teal-300 capitalize font-bold mt-10 ">
            Top
          </span>{" "}
          Categories
        </h1>
      </div>

      {/* thsi is the second home section that is advertisement section */}

      <div className="advertContainer">
        <div className="boxOneAdv letsHome">
          <BsFillHandbagFill className="imageAdv" />
          <h1 className=" text-base font-bold mt-2 ">Business Management</h1>
          {/* <p className='mt-2 '>Satisfied Student</p> */}
        </div>
        <div className="boxOneAdv letsHome">
          <GiStrong className="imageAdv" />
          <h1 className=" text-base font-bold mt-2 ">Personal Development</h1>
        </div>
        <div className="boxOneAdv letsHome ">
          <FaUniversity className="imageAdv" />
          <h1 className=" text-base font-bold mt-2 ">IT & Software</h1>
        </div>
        <div className="boxOneAdv letsHome">
          <FaComputer className="imageAdv" />
          <h1 className=" text-base font-bold mt-2 ">Computer Science</h1>
        </div>

        <div className="boxOneAdv letsHome">
          {/* lets test hover updown animation here */}

          <AiFillSound className="imageAdv" />
          <h1 className=" text-base font-bold mt-2 ">digital Marketing</h1>
        </div>
      </div>

   {/* this is just video demo here */}

 
{/* call it in another compoents */}

  

    </div>
  );
};

export default HomeSecond;
