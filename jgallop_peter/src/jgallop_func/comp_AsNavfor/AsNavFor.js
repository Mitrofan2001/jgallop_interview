import React, {useEffect,useState,useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"

function AsNavFor() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
  
    useEffect(() => {
      setNav1(slider1Ref.current);
      setNav2(slider2Ref.current);
    }, []);
  
    return (
      <div  className="w-[50%] mx-auto">
        <h4>First Slider</h4>
        <Slider
          asNavFor={nav2}
          ref={slider1Ref}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={nav1}
          ref={slider2Ref}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
  
  export default AsNavFor;