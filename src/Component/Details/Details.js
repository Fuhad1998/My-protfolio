import React from "react";
import "./Details.css";
import { Card } from "react-bootstrap";
import banner1 from "../../img/projuct-img/How-To-Choose-Baby-Products--Tips--Tricks-1518753060.webp";

const Details = () => {
  return (
    <div className="container  bg-white rounded py-4">
      <div className="row">
        <div className="col-md-6 col-xs-12 col-sm-12">
          <Card className="border-0 " style={{ width: "20rem" }}>
            <Card.Img variant="top" src={banner1} />
          </Card>
        </div>
        <div className="col-md-6 col-xs-12 col-sm-12 text-container">
          <h1>Baby care shop</h1>
          <p className="project-detail">
            This is a baby care website. users can buy baby products. Users can
            buy three category product like, milks, cloths, toys.Also user can see their orders and user can delate their orders and update their orders And implement admin dashboard if admin visit this website they can add a products and can delate products, and make an admin. Admin can see all orders.

          </p>

          <h3 className="project-tacno">Technology used</h3>
          
          <li className="technology">React js</li>
          <li className="technology">Javascript</li>
          <li className="technology">React Router Dome</li>
          <li className="technology">Node js</li>
          <li className="technology">MongoDb</li>
          <li className="technology">Firebase</li>
          <li className="technology">Heroku</li>
          <li className="technology">Bootstrap</li>
          <li className="technology">Html</li>
          <li className="technology">Css</li>
          <div className="text-start pt-3 ">
          <span> <a className="link-btn p-2  rounded" href="https://baby-care-online-shop.web.app/" target="_blank">Live-side</a></span>

          <span> <a className="link-btn p-2 rounded" href="https://github.com/Fuhad1998/baby-care-online-shop" target="_blank">Client-Code</a></span>

          <span> <a className="link-btn p-2 rounded" href="https://github.com/Fuhad1998/baby-care-server-side-online-shop" target="_blank">Server-Code</a></span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Details;
