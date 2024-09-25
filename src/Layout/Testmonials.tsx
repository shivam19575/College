import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testmonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="testmonialsCont">
      <div className="leftTest">
        <div className="datatest">
          <h2 className="text-base text-orange-600 capitalize mb-2 font-bold">
            our testimonials
          </h2>
          <h1 className="text-3xl text-blue-900 font-bold capitalize mb-2">
            peoples say about
          </h1>
          <h1 className="text-3xl text-teal-600 font-bold capitalize mb-2">
            IICS College
          </h1>
          <p className="text-base text-slate-500 mt-5 capitalize">
            Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat
            Juisque eget congue.
          </p>
        </div>
      </div>
      <div className="rightTest">
        <div className="slider-container sliderHome test">
          <Slider {...settings}>
            <div className="boxOneTest">
              <div className="topboxwithImage w-[90%] h-65 flex  flex-row gap-7 justify-center items-center m-auto">
                <div className="w-[50%] h-[100%]  flex justify-center items-center  mt-5">
                  <img
                    src="images/boy.jpg"
                    alt="lady"
                    className="rounded-2xl w-[100%] flex justify-center items-center h-[90px] object-cover"
                  />
                </div>
                <div className=" w-[100%] h-25  flex flex-col    mt-5">
                  <h2 className="text-left  text-xl text-blue-800  capitalize ">
                    shivam pandey
                  </h2>
                  <h3 className=" capitalize  text-gray-500  text-xl">
                    hr executive 
                  </h3>
                </div>
              </div>
              <div className="w-[80%] min-h-20 h-auto m-auto justify-center items-center mt-5">
                <p className="text-base text-slate-500 ">
                This college has provide us the lots of opportunities not only to enhance our skills but also to claim our success paths.Their teaching abilities their guidance not only took upward but also persist us to put our heads up.
                </p>
              </div>
            </div>
            
            <div className="boxOneTest">
              <div className="topboxwithImage w-[90%] h-65 flex  flex-row gap-7 justify-center items-center m-auto">
                <div className="w-[50%] h-[100%]  flex justify-center items-center  mt-5">
                  <img
                    src="images/lady.jpg"
                    alt="lady"
                    className="rounded-2xl w-[100%] flex justify-center items-center h-[90px] object-cover"
                  />
                </div>
                <div className=" w-[100%] h-25  flex flex-col    mt-5">
                  <h2 className="text-left  text-xl text-blue-800  capitalize ">
                  preeti sharma
                  </h2>
                  <h3 className=" capitalize  text-gray-500  text-xl">
                    marketing manager
                  </h3>
                </div>
              </div>
              <div className="w-[80%] min-h-20 h-auto m-auto justify-center items-center mt-5">
                <p className="text-base text-slate-500 ">
                This college has provide us the lots of opportunities not only to enhance our skills but also to claim our success paths.Their teaching abilities their guidance not only took upward but also persist us to put our heads up.
                </p>
              </div>
            </div>

            <div className="boxOneTest">
              <div className="topboxwithImage w-[90%] h-65 flex  flex-row gap-7 justify-center items-center m-auto">
                <div className="w-[50%] h-[100%]  flex justify-center items-center  mt-5">
                  <img
                    src="images/lady2.jpg"
                    alt="lady"
                    className="rounded-2xl w-[100%] flex justify-center items-center h-[90px] object-cover"
                  />
                </div>
                <div className=" w-[100%] h-25  flex flex-col    mt-5">
                  <h2 className="text-left  text-xl text-blue-800  capitalize ">
                    aastha gill
                  </h2>
                  <h3 className=" capitalize  text-gray-500  text-xl">
                    project manager
                  </h3>
                </div>
              </div>
              <div className="w-[80%] min-h-20 h-auto m-auto justify-center items-center mt-5">
                <p className="text-base text-slate-500 ">
                  This college has provide us the lots of opportunities not only to enhance our skills but also to claim our success paths.Their teaching abilities their guidance not only took upward but also persist us to put our heads up. 
                </p>
              </div>
            </div>

            <div className="boxOneTest">
              <div className="topboxwithImage w-[90%] h-65 flex  flex-row gap-7 justify-center items-center m-auto">
                <div className="w-[50%] h-[100%]  flex justify-center items-center  mt-5">
                  <img
                    src="images/boy.jpg"
                    alt="lady"
                    className="rounded-2xl w-[100%] flex justify-center items-center h-[90px] object-cover"
                  />
                </div>
                <div className=" w-[100%] h-25  flex flex-col    mt-5">
                  <h2 className="text-left  text-xl text-blue-800  capitalize ">
                    nikhil reddy
                  </h2>
                  <h3 className=" capitalize  text-gray-500  text-xl">
                    technical lead 
                  </h3>
                </div>
              </div>
              <div className="w-[80%] min-h-20 h-auto m-auto justify-center items-center mt-5">
                <p className="text-base text-slate-500 ">
                This college has provide us the lots of opportunities not only to enhance our skills but also to claim our success paths.Their teaching abilities their guidance not only took upward but also persist us to put our heads up.
                </p>
              </div>
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testmonials;
