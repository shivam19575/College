import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const AboutPart = () => {
  return (
    <div className="topAbout">
      <div className="leftAbout">
        <img src="images/collageInside.png" alt="inside" className="inside" />
        <div className="boxOverImage"></div>
        <img src="images/collage.jpeg" alt="collage" className="collage" />
      </div>
      <div className="rightAbout ">
        <div className="aboutDown"></div>
        <h2 className="text-orange-500 text-xl mb-4">About</h2>
        <h1 className="text-blue-700 text-4xl font-bold down">About</h1>
        <div className="aboutDataTop">
          {/* <p className="paras pt-6"> */}
            WE, IICS College, offering a comprehensive O Level, BCA, MCA, PGDCA,
            BBA, MBA programs. IICS College is located in Prayagraj, UP, India.
            The IICS College is renowned for its high-quality education and
            corporate-relevant curriculum. As a IT graduate from IICS College,
            you will be well-prepared to embark on a successful career in areas
            such as software development, database management, system
            administration, IT consulting, or pursue higher education in
            computer science or related fields. We invite you to join IICS
            College and become part of our vibrant academic community, where
            innovation, excellence, and career growth are nurtured.
          {/* </p> */}
        </div>
        <div className="secondThirdAbout">
          <div className="firstOneInside">
            <FaRegCircleCheck className="iconAbout" />
            <span>Flexible Course Plan</span>
          </div>
          <div className="firstOneInside">
            <FaRegCircleCheck className="iconAbout" />
            <span>Flexible Course Plan</span>
          </div>
          <div className="firstOneInside">
            <FaRegCircleCheck className="iconAbout" />
            <span>Flexible Course Plan</span>
          </div>
          <div className="firstOneInside">
            <FaRegCircleCheck className="iconAbout" />
            <span>Flexible Course Plan</span>
          </div>
        </div>
        {/* <div className="actionButtons"> */}
        <button className="btnApply aboutBtn mt-5">apply now<IoIosArrowDropleftCircle className="insideIconBtn" /></button>
      {/* </div> */}
      </div>
    </div>
  );
};

export default AboutPart;
