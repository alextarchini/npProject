import React from "react";
import "./Footer.css";
import image1 from "../../img/image1.png";

function Footer() {
  return (
    <div class="footer">
      <img src={image1}></img>
      <p class="footer-center">SpaceArt &copy;</p>
    </div>
  );
}

export default Footer;
