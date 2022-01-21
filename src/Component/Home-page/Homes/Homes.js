import React from 'react';
import "./Homes.css"

const Homes = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center p-5" style={{backgroundColor: "#1C2833"}}>
        <div className="mt-5">
        <h2 className="text-white">Hi, This is </h2>
           <h2 className="text-white">Fowad Hossian</h2>
           <h1 className="text-white ">Front End Developer</h1>
           <br />
           <span className="m-5">
           <a className="btn-resume p-2 " href="https://drive.google.com/file/d/13ePfpUpM0KsMNHj0joWkiJ0yXHTZ6jMU/view?usp=sharing" target="_blank">Download Resume</a>
           </span>
        </div>
        </div>
    );
};

export default Homes;