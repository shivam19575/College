import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const HomeFAQ = () => {
  return (
    <div className="faqHome">
      <div className="leftFaq">
      <img src="images/homeFQ2.png" alt="float image" className="homeFQ2 rotateleft" />
        <div className="databoxFAQ mb-5">
          <h2 className="text-xl text-orange-600 uppercase font-semibold mb-2">
            faq
          </h2>
          <h1 className="text-blue-900 text-4xl font-bold mb-2">
            We Always Ensure{" "}
            <span className="text-teal-500 text-4xl font-bold ">best</span>
          </h1>
          <h1 className="text-teal-500 text-4xl font-bold mb-2 ">
            Course{" "}
            <span className="text-blue-900 text-4xl font-bold">
              For Your Learning
            </span>
          </h1>
        </div>
        <div className="boxFaqOne">
          <details>
            <summary className='flex flex-row justify-around gap-5 text-xl text-blue-800'>
              How long should a business plan be?{" "}
              <MdOutlineKeyboardDoubleArrowLeft className='text-2xl' />
            </summary>
            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humour.
          </details>
        </div>
        <div className="boxFaqOne">
          <details>
            <summary className='flex flex-row justify-around gap-5 text-xl text-blue-800'>
              How long should a business plan be?{" "}
              <MdOutlineKeyboardDoubleArrowLeft className='text-2xl' />
            </summary>
            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humour.
          </details>
        </div>
        <div className="boxFaqOne">
          <details>
            <summary className='flex flex-row justify-around gap-5 text-xl text-blue-800'>
              How long should a business plan be?{" "}
              <MdOutlineKeyboardDoubleArrowLeft className='text-2xl' />
            </summary>
            There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humour.
          </details>
        </div>
      </div>
      <div className="rightFaq">
        <img src="images/collageInside.png" alt="float image" className="homeFQ2" />
        <img src="images/homeFQ4.png" alt="float image" className="homeFQ2 rotateHo" />
        <img src="images/collageInside.png" alt="float image" className="homeFQ2 twoHome" />
        <img src="images/homeFQ3.png" alt="float image" className="homeFQ2 threeHome" />
        <div className="floatHomeDown"></div>
        <div className="imagesHomeBox">
            <img src="images/homeFQ.jpg" alt="home images" className="imgFloatHome" />
        </div>
        <img src="images/homeFQ1.jpg" alt="home images" className="imgFloatTwoHome" />
      </div>
    </div>
  );
};

export default HomeFAQ;
