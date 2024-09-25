import { PiHandshakeBold } from "react-icons/pi";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { GiRead } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";

const Advert = () => {
  return (
    <div className="advertContainer">
      <div className="boxOneAdv">
        <PiHandshakeBold className="imageAdv" />
        <h1 className=' text-3xl font-bold mt-2 '>30 k+</h1>
        <p className='mt-2 '>Satisfied Student</p>
      </div>
      <div className="boxOneAdv">
        <FaHandsHoldingChild className="imageAdv" />
        <h1 className=' text-3xl font-bold mt-2 '>6500 +</h1>
        <p className='mt-2 '>Class Completed</p>
      </div>
      <div className="boxOneAdv ">
        <GiRead className="imageAdv" />
        <h1 className=' text-3xl font-bold mt-2 '>600 +</h1>
        <p className='mt-2 '>Lab Section</p>
      </div>
      <div className="boxOneAdv">
        <IoIosPeople className="imageAdv" />
        <h1 className=' text-3xl font-bold mt-2 '>40 +</h1>
        <p className='mt-4 '>Total Seminar</p>
      </div>
    </div>
  );
};

export default Advert;
