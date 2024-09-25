import { MdOutlineMail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbarBox">
      <div className="threeActionBox">
        <div className="numberOne openWala">
          <MdOutlineMail className="icons" />
          {/* <span>admisssionenquiry@gmail.com</span> */}
          <a href="mailto:admisssionenquiry@gmail.com" className='items-center m-auto ml-2'>admisssionenquiry@gmail.com</a>
        </div>
        <div className="numberOne">
          <PiPhoneCallBold className="icons" />
          <span>+91 9335071182</span>
        </div>
        <div className="numberOne">
          <IoLocationOutline className="icons" />
          <span>Tagore Town Prayagraj</span>
        </div>
      </div>
      <div className="fourActionBox">
        <div className="numberOne">
        <FaFacebookF className="icons" />
        </div>
        <div className="numberOne">
        <FaXTwitter className="icons" />
        </div>
        <div className="numberOne">
        <FaYoutube className="icons" />
        </div>
        <div className="numberOne">
        <RiLinkedinFill className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
