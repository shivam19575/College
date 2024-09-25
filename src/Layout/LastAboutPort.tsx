import { IoIosPeople } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";

const LastAboutPort = () => {
  return (
    <div className="lastAboutCont">
        <div className="floatBoxPort"></div>
        <img
        src="images/collageAboutInside.png"
        alt="insider"
        className=" Right"
      />
      <div className="leftPort">
        
        <img src="images/aboutLast.jpg" alt="image" className="imageAbt" />
        <div className="floatingDiv">
          <img src="images/offer.jpg" alt="image" className="imageOffer" />
        </div>
      </div>
      
      <div className="rightAboutPort">
        <div className="insideLt"></div>
        <div className="topPart">
          <h2 className="text-lg text-orange-600 uppercase font-bold">
            who we are
          </h2>
          <h1 className="text-4xl text-blue-900 font-bold">
            We Offer The{" "}
            <span className="text-blue-500 font-bold text-4xl">
              {" "}
              Best Carrier
            </span>
          </h1>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2 mt-10">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <PiStudentBold className="text-sm text-white w-12 h-12 rounded-full " />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Industry Expert Instructor
            </h2>
            <p className="text-zinc-600 text-base">
              Aonsectetur adipiscing elit Aenean scelerisque augue vitae
              consequat Juisque eget congue velit in cursus leo
            </p>
          </div>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <GrNotes className="text-sm text-white w-12 h-12 rounded-full bg-teal-200" />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Up-to-Date Course Content
            </h2>
            <p className="text-zinc-600 text-base">
              Hammer out we need to socialize the comms with the wider
              stakeholder community exposing new ways to evolve
            </p>
          </div>
        </div>
        <div className="adds flex flex-row justify-center items-center gap-5 w-100% h-40  border-t-2">
          <div className="w-18 h-18 rounded-full bg-orange-400 m-auto justify-center">
            <IoIosPeople className="text-sm text-white w-12 h-12 rounded-full bg-gray-600" />
          </div>
          <div>
            <h2 className="text-blue-800 text-lg font-bold">
              Biggest Student Community
            </h2>
            <p className="text-zinc-600 text-base">
              Focus on the customer journey we need to socialize the comms with
              the wider stakeholder community upsell window-licker
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastAboutPort;
