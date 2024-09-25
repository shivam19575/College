import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Placement = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="placementCont">
      <div className="subPlacementCont">
        <div className="topBox">
          <h2 className="text-orange-500 text-xl  mb-3 capitalize text-center">
            Placed Student
          </h2>
          <h1 className="text-4xl text-blue-700 font-bold mb-3 capitalize">
            OUR{" "}
            <span className="text-4xl text-teal-700 font-bold mb-3 capitalize">
              placed{" "}
            </span>
            student
          </h1>
        </div>

        {/* this is the css for slider of placement  */}

        <div className="slider-container sliderHome scrole">
          <Slider {...settings}>
            <div className="boxPlacement">
              <img
                src="images/placement1.jpg"
                alt="placements"
                className="placement"
              />
              <div className="placementBody">
                <h1 className="text-blue-900 text-2xl font-bold mb-3 capitalize">
                  shivam pandey
                </h1>
                <h2 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  MERN Developer
                </h2>
                <h3 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  vedsar pvt ltd 2024
                </h3>
              </div>
            </div>

            <div className="boxPlacement">
              <img
                src="images/placement2.jpg"
                alt="placements"
                className="placement"
              />
              <div className="placementBody">
                <h1 className="text-blue-900 text-2xl font-bold mb-3 capitalize">
                  shivam pandey
                </h1>
                <h2 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  MERN Developer
                </h2>
                <h3 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  vedsar pvt ltd 2024
                </h3>
              </div>
            </div>

            <div className="boxPlacement">
              <img
                src="images/placement1.jpg"
                alt="placements"
                className="placement"
              />
              <div className="placementBody">
                <h1 className="text-blue-900 text-2xl font-bold mb-3 capitalize">
                  shivam pandey
                </h1>
                <h2 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  MERN Developer
                </h2>
                <h3 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  vedsar pvt ltd 2024
                </h3>
              </div>
            </div>

            <div className="boxPlacement">
              <img
                src="images/placement2.jpg"
                alt="placements"
                className="placement"
              />
              <div className="placementBody">
                <h1 className="text-blue-900 text-2xl font-bold mb-3 capitalize">
                  shivam pandey
                </h1>
                <h2 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  MERN Developer
                </h2>
                <h3 className="text-slate-700 text-base font-bold mb-3 capitalize">
                  vedsar pvt ltd 2024
                </h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="lastSub"></div>
      </div>
    </div>
  );
};

export default Placement;
