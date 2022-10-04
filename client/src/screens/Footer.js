import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedinIn
  } from "@fortawesome/free-brands-svg-icons";
  


const Footer = () => {
  const style1 = { color: "#0033a0", fontSize: "20px", fontWeight: "500" };
  const style2 = { color: "#00b140", fontSize: "15px" };
  return (
    <div className="footer mt-3 px-5 py-4">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <ul>
            <h5 style={style1}>Categories</h5>
            <li>
              <a href="/foot" className="nav-link">
                Discoveries
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                All Destinations
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Furnishing
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Corporates
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <ul my-3>
            <h5 style={style1}>Services</h5>
            <li>
              <a href="/foot" className="nav-link">
                Healthcare
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Sports
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Entertainment
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6">
          <ul my-3>
            <h5 style={style1}>Community</h5>
            <li>
              <a href="/foot" className="nav-link">
                Announcements
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Product Zone
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Reselling Tips
              </a>
            </li>
            <li>
              <a href="/foot" className="nav-link">
                Fun
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 ">
          <ul my-3>
            <h5 style={style1}>Follow Us</h5>
            
              <i ><a className="facebook social mr-3" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a></i>
              <i><a  className="instagram social mr-3" href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a></i>
              <i ><a className="youtube social mr-3" href="https://www.youtube.com/"> <FontAwesomeIcon icon={faYoutube} size="2x" /></a></i>
              <i ><a className="linkedIn social mr-3" href="https://www.linkedin.com/"> <FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a></i>
              <i ><a className="twitter social" href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></i>
            
            <li>
              <a href="/" className="nav-link">
                query@myhotelrooms.com
              </a>
            </li>
          </ul>
          </div>
        </div>
        <p className="copyright">&copy; Copyrights, MY HOTELS.COM all rights reserved &reg;2022 </p>
    </div>
  );
};

export default Footer;
