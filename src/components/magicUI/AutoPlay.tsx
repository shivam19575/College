import Slider from "react-slick";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoPlay() {
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
    <div className="slider-container sliderHome">
      <Slider {...settings}>
        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>PGDCA</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses1.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">PGDCA</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>O LEVEL</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses2.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">O LEVEL</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>BCA</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses5.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">BCA</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>BCA</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses1.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">BCA</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>GST</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses2.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">GST</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>MCA</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses3.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">MCA</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>CCC</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses3.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">CCC</div>
        </div>

        <div className="itemsOneBox">
          {/* this is the data which will be shown after hover */}
          <div className="card-body">
            <div className="cardBodyData">
              <h2>MBA</h2>
            </div>
            <div className="btnCont">
              <button className="btnApply">
                apply now
                <IoIosArrowDropleftCircle className="insideIconBtn" />
              </button>
            </div>
          </div>

          {/* ending of hover data here */}

          <div className="imageboxCo">
            <img src="images/courses5.jpg" alt="courses" className="imgCour" />
          </div>
          <div className="dataCourses text-blue-900 font-bold">MBA</div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
