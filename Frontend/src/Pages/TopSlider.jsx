import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        <div className="wdt ">
          <img style={{width:'100%',height:'500px'}} className="img" alt="pic1" src={"images/Homepage2.jpg"} />
        </div>
        <div className="wdt ">
          <img style={{width:'100%',height:'500px'}} className="img" alt="pic1" src={"images/HomePage3.jpg"} />
        </div>
        <div  className="wdt ">
          <img style={{width:'100%',height:'500px'}} className="img" alt="pic1" src={"images/Homepage4.jpg"} />
        </div>
       
      </Slider>
    </>
  );
}

export default TopSlider;
