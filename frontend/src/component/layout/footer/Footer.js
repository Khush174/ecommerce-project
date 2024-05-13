import React from "react";
import playStore from "../images/playstore.png";
import appStore from "../images/Appstore.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../footer/Footer.css";

const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>
  
        <div className="midFooter">
          <h1>ELECTROZONE</h1>
          <p>High Quality is our first priority</p>
  
          <p>Copyrights 2024 &copy; KhushWant</p>
        </div>
  
        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com/"><InstagramIcon>Instagram</InstagramIcon></a>
          <a href="https://www.youtube.com/"><YouTubeIcon>Youtube</YouTubeIcon></a>
          <a href="https://www.linkedin.com/in/khushwant-k-rawal/"><LinkedInIcon>LinkedIn</LinkedInIcon></a>
        </div>
      </footer>
    );
  };
  
  export default Footer;