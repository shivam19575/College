import { IoLocationOutline } from "react-icons/io5";
import { PiPhoneCallBold } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footerCont w-100% min-h-50 h-auto bg-teal-500 flex flex-row flex-wrap content-center items-center m-auto">
      <img src="images/footerMover.png" alt="mover" className="footerMover" />
      <img src="images/mover1.png" alt="mover" className="mover1" />
      <img src="images/mover3.png" alt="mover1" className="mover2" />
      <img src="images/mover4.png" alt="mover1" className="mover4" />
      <img src="images/mover5.png" alt="mover1" className="mover5" />
      <div className="subFooter">
        <div className="noOneFoot w-50 min-h-30 h-auto   gap-4 m-auto mt-10 flex flex-col">
          <div className="imageTopBox ">
            <img
              src="images/logo.png"
              alt="footerLogo"
              className="imageFo text-white bg-white outline-none"
            />
          </div>
          <div className=" dataBox">
            <IoLocationOutline className="text-2xl" />
            <p>Tagore Town Prayagraj</p>
          </div>
          <div className="dataBox">
            <PiPhoneCallBold className="text-2xl" />
            <p>admisssionenquiry@gmail.com</p>
          </div>
          <div className="dataBox">
            <MdOutlineMail className="text-2xl" />
            <p>+91 9335071182</p>
          </div>
        </div>

        <div className="noOneFoot w-50 min-h-30 h-auto   gap-4 m-auto mt-10 flex flex-col">
          <div className="imageTopBox ">
            <h1 className="text-2xl font-bold text-blue-950 capitalize ">
              Quick Link
            </h1>
          </div>
          <div className=" dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>About</p>
          </div>
          <div className="dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>Gallery</p>
          </div>
          <div className="dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>Courses</p>
          </div>
          <div className="dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>Contact us </p>
          </div>
        </div>

        <div className="noOneFoot w-50 min-h-30 h-auto   gap-4 m-auto mt-10 flex flex-col">
          <div className="imageTopBox ">
            <h1 className="text-2xl font-bold text-blue-950 capitalize">
              Courses
            </h1>
          </div>
          <div className="dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>Full Stack Training In python </p>
          </div>
          <div className="dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>Tally GST </p>
          </div>
          <div className="dataBox">
            <IoIosArrowDropleftCircle className="text-2xl" />
            <p>CCC </p>
          </div>
        </div>

        <div className="noOneFoot w-50 min-h-30 h-auto   gap-4 m-auto mt-10 flex flex-col">
          <div className="imageTopBox ">
            <h1 className="text-2xl font-bold text-blue-950 capitalize">
              Our Gallery
            </h1>
          </div>
          <div className="imageShow">
            <div className="boxImageOne">
              <img
                src="images/imgFoot.jpg"
                alt="Footer Image"
                className="footIMg"
              />
            </div>
            <div className="boxImageOne">
              <img
                src="images/foot4.jpg"
                alt="Footer Image"
                className="footIMg"
              />
            </div>
            <div className="boxImageOne">
              <img
                src="images/third.jpg"
                alt="Footer Image"
                className="footIMg"
              />
            </div>
            <div className="boxImageOne">
              <img
                src="images/foot3.jpg"
                alt="Footer Image"
                className="footIMg"
              />
            </div>
            <div className="boxImageOne">
              <img
                src="images/foot2.jpg"
                alt="Footer Image"
                className="footIMg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lastSUB">
        <div >
          <p className='text-zinc-500 text-xl'>
            © Copyright 2024 by IICS COLLEGE | BCA | MCA | PGDCA | O Level | BBA
            | MBA.
          </p>
        </div>
        <div >
          <p className='text-zinc-500 text-xl'>
          Developed by <span className='text-blue-900'>Shivam Pandey</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
