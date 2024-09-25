import { FaHandshake } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import { FaPeopleGroup } from "react-icons/fa6";
import { BorderBeam } from "../components/magicUI/BorderBeam";
import AutoPlay from "../components/magicUI/AutoPlay";

const CoursesHome = () => {
  const sizew = window.innerWidth;
  console.log(sizew);

  return (
    <div className="coursesDataHome">
      {/* <div className="itemsContHome">
      <AutoPlay />
      </div> */}

      {/* this is the code for top blue background box */}

      <div className="topDataBoxHome">
        <h2 className="text-orange-700 text-xl font-medium uppercase">
          our courses
        </h2>
        <h1 className="text-blue-800 text-4xl font-bold mt-4 ">
          Our Most Popular{" "}
          <span className="text-teal-700 text-4xl font-bold">Courses</span>
        </h1>
      </div>
      {/* this is the top blue color background */}

      <div className="blueBackGround">
        {/* just test of slider */}

        <div className="itemsContHome">
          {/* {sizew > 850 ? <h1 className="text-orange-600">hello come </h1> : <h1 className="text-orange-600">hello bye </h1>  } */}
          <AutoPlay />
        </div>

        <div className="overflowContr">
          {" "}
          <div className="boxesOne w-[300px] h-[150px] ">
            <FaHandshake className="text-6xl bg-teal-300 rounded-full" />
            <h2 className="text-5xl text-white font-bold mb-2">30k</h2>
            <h2 className="text-xl text-slate-500 font-medium mb-2 capitalize">
              satisfied students
            </h2>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
          <div className="boxesOne">
            <FaPeopleCarry className="text-6xl bg-orange-500 rounded-full mb-2" />
            <h1 className="text-5xl text-white font-bold mb-2">6500</h1>
            <h2 className="text-xl text-slate-500 font-medium mb-2 capitalize">
              class completed
            </h2>
          </div>
          <div className="boxesOne">
            <FaPeopleGroup className="text-6xl bg-orange-500 rounded-full mb-2" />
            <h1 className="text-5xl text-white font-bold mb-2">600+</h1>
            <h2 className="text-xl text-slate-500 font-medium mb-2 capitalize">
              lab sections
            </h2>
          </div>
          <div className="boxesOne">
            <FcBusinessman className="text-6xl bg-teal-200 mb-2" />
            <h1 className="text-5xl text-white font-bold mb-2">40+</h1>
            <h2 className="text-xl text-slate-500 font-medium mb-2 capitalize">
              total seminars
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesHome;
