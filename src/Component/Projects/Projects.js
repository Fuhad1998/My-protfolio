import React from "react";
import AOS from "aos";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Project.css";
import img1 from "../../img/projuct-img/How-To-Choose-Baby-Products--Tips--Tricks-1518753060.webp";
import img2 from "../../img/projuct-img/New-Project-12.jpg";
import img3 from "../../img/projuct-img/New-Project-13.jpg";

const Projects = () => {
  AOS.init();
  return (
    <div data-aos="zoom-out-right" className="container  bg-white  pt-4">
      <h1 className="  p-3">My Recent Projects</h1>
      <div className="row mb-2 p-5">
        <div className="col-md-4 col-xs-12 col-sm-12 ">
          <Card style={{ width: "20rem" }}>
            <Card.Img style={{ height: "200px" }} variant="top" src={img1} />
            <Card.Body className="card-body">
              <Card.Title>Baby care shop</Card.Title>
              <Card.Text>
                This is a baby care website. users can buy baby products. Users
                can buy three category like, mild, cloths, toys.
              </Card.Text>
              <Button variant="primary">
                <Link className="Details-link" to="/details">
                  Details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12">
          <Card style={{ width: "20rem" }}>
            <Card.Img style={{ height: "200px" }} variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Bangla Drones</Card.Title>
              <Card.Text>
              This is a drone related website. users can buy drones.Also user can see their orders. 
              </Card.Text>
              <Button variant="primary">
                <Link className="Details-link" to="/project2">
                  Details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-12 ">
          <Card style={{ width: "20rem" }}>
            <Card.Img style={{ height: "200px" }} variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Trek Bicycle</Card.Title>
              <Card.Text>
              This is a bicycle website. users can buy bicycle from this website. Also user can see their orders.
              </Card.Text>
              <Button variant="primary">
                <Link className="Details-link" to="/project3">
                  Details
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
