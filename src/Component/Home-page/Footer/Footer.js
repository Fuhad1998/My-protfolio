import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-5" style={{backgroundColor: "#1C2833"}}>
     <div className="d-flex justify-content-center">
     <h2><a className="" href="https://web.facebook.com/" target="_blank"><i className="fab fa-facebook text-primary m-2 "> </i></a></h2>
      <h2><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube text-danger m-2"> </i></a></h2>
     <h2> <a href="https://github.com/Fuhad1998?tab=repositories" target="_blank"><i className="fab fa-github m-2 text-white"></i></a></h2>
      <h2 ><a href="https://www.linkedin.com/in/md-fuwad-hossain-a3b499227/" target="_blank"><i className="fab fa-linkedin m-2"></i></a></h2>
     </div>
    
      <div>
      <p className="text-center  p-2 text-white">
        <i className="  fas fa-copyright mb-2 "></i> Copy right 2021 By Fuwad
        Hossian
      </p>
      </div>
    </div>
  );
};

export default Footer;
