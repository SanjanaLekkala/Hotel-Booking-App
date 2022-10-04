import React from "react";
import moment from "moment"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
AOS.init({
    duration:'2000'
});
function Landingscreen() {
  return (
    <div className="">
      <div className="landing row justify-content-center text-center" style={{ backgroundImage: `url("https://media.cntraveler.com/photos/5ace5512b3bdea1fe610eec7/16:9/w_2560,c_limit/Time-+-Tide---Miavana-HR-17.jpg")`}}>
        <div className="col-md-9 my-auto" >
          <h2 style={{ color: "black", fontSize: "80px" }} data-aos='zoom-in'> MY HOTELS.COM</h2>
          <h2 style={{ color: "#3297f5", fontSize:"5vh"}} data-aos='zoom-out' ><b>“There is only one boss. The Guest."</b></h2>
          <Link to="/home">
             <button className='btn btn-primary'><b>Explore More</b></button>
          </Link>
        </div>

        
        
      </div>
     
    </div>
  );
}

export default Landingscreen;
