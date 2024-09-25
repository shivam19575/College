import { IoMdHome } from "react-icons/io";

interface HeroTopProps {
  text1: string; // Declare 'text1' as a string type
}

const HeroTop: React.FC<HeroTopProps> = ({ text1 }) => {
  return (
    <div className="topContainer">
      <img src="images/recentIICS.png" alt="WWWW" className="wwww" />
      <div className="firstOne"></div>
      <div className="secondOne">
        <div className="firstHomeBox">
          <IoMdHome className="iconsHero" to="/" />
          <span className='text-violet-900 homeFirst'>Home :</span>
          <span className='text-orange-500'> {text1} </span>
        </div>
        <h1 className="text-center mt-8 text-violet-900 text-3xl font-bold">{text1}</h1>
      </div>
      <div className="thirdOne"></div>
      <img src="images/secondIICS.png" alt="WWWW" className="wwwwS" />
    </div>
  );
};

export default HeroTop;
