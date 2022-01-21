import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../img/project-2/Capture (1).jpg";
import banner2 from "../img/project-2/Capture (2).jpg";
import banner3 from "../img/project-2/Capture.jpg";

const Project2 = () => {
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
          <h1 className="">Bengal Motors</h1>
          <h4 className="text-start">This is a bike sales website when users visit this website, they see some bike in the home page. They can buy bike from there. There is explore button if they click there they see more products. They can give there reviews. They can see there orders.There is interesting part that is for admin when admin login there admin can see all orders admin can delete orders admin can add products and admin can delete products. Admin can make admin</h4>
          <div className="d-flex">
            <h5 className="project-tac mx-2 p-2 rounded">React.js</h5>
            <h5 className="project-tac mx-2 p-2 rounded">Node.js</h5>
            <h5 className="project-tac mx-2 p-2 rounded">Express.js</h5>
            
          </div>
          <div className="d-flex">
          <h5  className="project-tac mx-2 p-2 rounded">React Route Dom</h5>
            <h5  className="project-tac mx-2 p-2 rounded">React Bootstrap</h5>
            <h5  className="project-tac mx-2 p-2 rounded">CSS</h5>
            
          </div>
          <div className="d-flex">
          <h5  className="project-tac mx-2 p-2 rounded">Heroku </h5>
            <h5  className="project-tac mx-2 p-2 rounded">MongoDb </h5>
            <h5 className="project-tac mx-2 p-2 rounded">React Route Hooks</h5>
          </div>
          <div className="d-flex">
          <h5  className="project-tac mx-2 p-2 rounded">Firebase </h5>
          </div>
          <div className="text-start m-5 p-2 ">
          <span className=""> <a className="link-btn p-2  rounded" href="https://assignment12-f50ed.web.app/" target="_blank">Live-side</a></span>

          <span className="py-2"> <a className="link-btn p-2  rounded" href="https://github.com/Fuhad1998/Bike-Sales-websit-server-side" target="_blank">Server-side-Code</a></span>

          <span className="py2"> <a className="link-btn p-2 rounded" href="https://github.com/Fuhad1998/Bike-Sales-websit-client-side" target="_blank">Client-side-Code</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
