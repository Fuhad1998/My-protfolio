import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../img/project-3/Capture-svg (1).jpg";
import banner2 from "../img/project-3/New Project (6).jpg";
import banner3 from "../img/project-3/New Project (7).jpg";

const Project3 = () => {
  return (
    <div className="container mt-3 bg-white rounded">
      <div className="row ">
        <div className="col-md-6 col-12">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={banner1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={banner2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-100"
                src={banner3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-6 col-12">
          <h1 className="">Modern Care Hospital</h1>
          <h5 className="text-start">
            This is a health related websites. There are different type of
            health services like Eye Care, Dental Care, Medicine, etc. Users can
            take these services. They can see the most popular doctors.
          </h5>
          <div className="d-flex">
            <h5 className="project-tac mx-2 p-2 rounded">React.js</h5>
            <h5  className="project-tac mx-2 p-2 rounded">React Route</h5>
            <h5  className="project-tac mx-2 p-2 rounded">Bootstrap</h5>
            
          </div>
          <div className="d-flex">
          <h5  className="project-tac mx-2 p-2 rounded">CSS</h5>
            <h5  className="project-tac mx-2 p-2 rounded">Netlify</h5>
          </div>
          <div className="text-start p-5 ">
          <span> <a className="link-btn p-2  rounded" href="https://elated-hamilton-79b7a5.netlify.app/" target="_blank">Live-side</a></span>
          <span> <a className="link-btn p-2 rounded" href="https://github.com/Fuhad1998/Health-Care-Related-websit" target="_blank">Github</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
