import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitGithub = () => {
    window.location = "https://github.com/Khush174";
  };
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/khushwant-k-rawal/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src=""
              alt="Founder"
            />
            <Typography>Khushwant</Typography>
            <Button onClick={visitGithub} color="primary">
              <GitHubIcon>Visit github</GitHubIcon>
            </Button>
            <Button onClick={visitLinkedin} color="primary">
             <LinkedInIcon>Visit linkedIn</LinkedInIcon> 
            </Button>
            
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">About Us</Typography>
 <Typography variant="body1" paragraph>
          Welcome to our e-commerce project! We are dedicated to providing the
          best shopping experience for our customers.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to offer a wide range of high-quality products at
          competitive prices, delivered with excellent customer service.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you're looking for electronics, accessories, or
          games, we've got you covered.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing us for your online shopping needs. Feel free to
          explore our website and reach out to us if you have any questions or
          feedback.
        </Typography>           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
