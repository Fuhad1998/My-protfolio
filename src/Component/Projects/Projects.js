import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../img/project-1/New Project (6).jpg";
import banner2 from "../../img/project-1/New Project (7).jpg";
import banner3 from "../../img/project-1/New Project (8).jpg";
import Project2 from "../Project2";
import Project3 from "../Project3";
import "./Project.css";

const Projects = () => {
  return (
    <div>
      <div className="container  bg-white rounded">
        <h1 className="  p-3">My Recent Projects</h1>
        <div className="row mb-2">
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
            <h1 className="">Cruise Ship</h1>
            <h4 className="text-start">
              This is a Cruise Ship's websites. Users get different services
              like, Royal class cabin, VIP cabin and one person sits. They can
              book this cabin and see the Upcoming Schedule. They can see their
              orders. Users get Gallery they can spent their time there.
            </h4>
            <div className="d-flex">
              <h5 className="project-tac mx-2 p-2 rounded">React.js</h5>
              <h5 className="project-tac mx-2 p-2 rounded">Node.js</h5>
              <h5 className="project-tac mx-2 p-2 rounded">Express.js</h5>
            </div>
            <div className="d-flex">
              <h5 className="project-tac mx-2 p-2 rounded">Heroku </h5>
              <h5 className="project-tac mx-2 p-2 rounded">MongoDb </h5>
              <h5 className="project-tac mx-2 p-2 rounded">CSS</h5>
            </div>
            <div className="d-flex">
              <h5 className="project-tac mx-2 p-2 rounded">
                React Route Hooks
              </h5>
              <h5 className="project-tac mx-2 p-2 rounded">React Route Dom</h5>
              
            </div>
           
            <div className="d-flex">
              <h5 className="project-tac mx-2 p-2 rounded">Firebase </h5>
              <h5 className="project-tac mx-2 p-2 rounded">React Bootstrap</h5>
            </div>
            <div className="text-start m-5 p-2 ">
              <span>
                {" "}
                <a
                  className="link-btn  p-2 rounded"
                  href="https://simple-assignment-11-676d8.web.app/"
                  target="_blank"
                >
                  Live-side
                </a>
              </span>
              <span>
                {" "}
                <a
                  className="link-btn p-2  rounded"
                  href="https://github.com/Fuhad1998/Tourism-websit-server-side"
                  target="_blank"
                >
                  Server-side-Code
                </a>
              </span>
              <span>
                {" "}
                <a
                  className="link-btn p-2  rounded"
                  href="https://github.com/Fuhad1998/Tourism-websit-cline-side"
                  target="_blank"
                >
                  Client-side-Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Project2></Project2>
      <Project3></Project3>
    </div>
  );
};

export default Projects;
