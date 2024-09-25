
import HeroVideoDialog from "../components/magicUI/HeroVideoDialog";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const AboutOfHome = () => {
  return (
    <div className="aboutHomeCont">
      <div className="aboutSubHomeCont">
        <img src="images/homeFloat.png" alt="floating image" className="floatHome1" />
        <img src="images/vibrate3.jpg" alt="vibarte" className="vibrate" />
        <div className="leftAboutHome">
          <img src="images/homeInside.png" alt="home" />
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block videoBox"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/dEs2BMCRGGQ?si=AHcOItTz_9rupS6_"
              thumbnailSrc="images/courses.jpg"
              thumbnailAlt=""
            />
          </div>
        </div>

        {/* this is the same about logic */}

        <div className="rightAbout ">
          <div className="aboutDown"></div>
          <h2 className="text-orange-500 text-xl mb-4">About US</h2>
          <h1 className="text-blue-700 text-4xl font-bold down">About</h1>
          <div className="aboutDataTop">
            {/* <p className="paras pt-6 font-bold"> */}
              WE, IICS College, offering a comprehensive O Level, BCA, MCA,
              PGDCA, BBA, MBA programs. IICS College is located in Prayagraj,
              UP, India. The IICS College is renowned for its high-quality
              education and corporate-relevant curriculum. As a IT graduate from
              IICS College, you will be well-prepared to embark on a successful
              career in areas such as software development, database management,
              system administration, IT consulting, or pursue higher education
              in computer science or related fields. We invite you to join IICS
              College and become part of our vibrant academic community, where
              innovation, excellence, and career growth are nurtured.
            {/* </p> */}
          </div>

          <div className="downAboutHome">
            <div className="leftdata">
              <div className="onebyone">
                <IoIosArrowDropleftCircle className="insideIconBtn text-blue-900" />
                <span className="text-blue-900">Expert Trainers</span>
              </div>
              <div className="onebyone">
                <IoIosArrowDropleftCircle className="insideIconBtn text-blue-900" />
                <span className="text-blue-900">Remote Learning</span>
              </div>

              <div className="onebyone">
                <IoIosArrowDropleftCircle className="insideIconBtn text-blue-900" />
                <span className="text-blue-900">Lifetime Access</span>
              </div>
            </div>
            <div className="rightpart">
              <button className="btnApply aboutBtn homebtn">
                More About Us
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOfHome;
