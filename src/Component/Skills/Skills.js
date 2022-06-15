import React from "react";
import AOS from 'aos';
import "./Skills.css"
import img1 from "../../img/Skill-2/javascript--v1.png"
import img2 from "../../img/Skill-2/react.png"
import img3 from "../../img/Skill-2/node-js.png"
import img4 from "../../img/Skill-2/pngfind-com-pc-master-race-png-1363736.png"
import img5 from "../../img/Skill-2/mongodb.png"
import img6 from "../../img/Skill-2/firebase.png"
import img7 from "../../img/Skill-2/css3.png"
import img8 from "../../img/Skill-2/bootstrap.png"
import img9 from "../../img/Skill-2/material-ui.png"
import img10 from "../../img/Skill-2/github.png"
import img11 from "../../img/Skill-2/git.png"
// import img12 from "../../img/Skill-2/figma--v1.png"



const Skills = () => {
  AOS.init();
  return (
    <div data-aos="zoom-in" className="container  bg-white  mt-3 p-5">
      <h1>Skills</h1>
      <div className="row">

      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img1} alt="" />
        <br />
        <span>javascript</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img2} alt="" />
        <br />
        <span>React Js</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img3} alt="" />
        <br />
        <span>Node Js</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img4} alt="" />
        <br />
        <span>Express Js</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img5} alt="" />
        <br />
        <span>Mongodb</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img6} alt="" />
        <br />
        <span>Firebase</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img7} alt="" />
        <br />
        <span>CSS3</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img8} alt="" />
        <br />
        <span>Bootstrap</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img9} alt="" />
        <br />
        <span>Material UI</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img10} alt="" />
        <br />
        <span>Github</span>
      </div>
      <div className="col-md-2 col-xs-12 col-sm-12 p-3">
        <img src={img11} alt="" />
        <br />
        <span>Git</span>
      </div>

      </div>
    </div>
  );
};

export default Skills;








// const array = [
//   {
//     id: "1",
//     img: ""
//   },
//   {
//     id: "1",
//     img: ""
//   },
//   {
//     id: "3",
//     img: "https://i.ibb.co/ZW8yD09/node-js-icon-11.png"
//   },
//   {
//     id: "4",
//     img: "https://i.ibb.co/0jm5V7T/images-2.png"
//   },
//   {
//     id: "5",
//     img: "https://i.ibb.co/nD6JwT1/images-1.png"
//   },
//   {
//     id: "6",
//     img: ""
//   },
//   {
//     id: "1",
//     img: ""
//   },
//   {
//     id: "8",
//     img: ""
//   },
//   {
//     id: "9",
//     img: ""
//   },
//   {
//     id: "10",
//     img: "https://i.ibb.co/mcYKgG6/images.png"
//   },
//   {
//     id: "11",
//     img: "https://i.ibb.co/h1nY0GB/Material-UI.png"
//   },
//   {
//     id: "12",
//     img: "https://i.ibb.co/XCsxbx0/tailwindcss-pre.png"
//   },
// ]
