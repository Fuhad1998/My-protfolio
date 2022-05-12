import React from "react";
import Particles from "react-tsparticles";
import "./Homes.css";

const Homes = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    <div style={{ backgroundColor: "#1C2833" }} className="control-practical ">
     <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
                
                
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
              
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        style={{height: '400px', width: "400px"}}
      />

      <div
        className="container d-flex justify-content-center align-items-center p-5 "
        
      >
        <div className="mt-5 title">
        <div className="text-container">
        <h2 className="text-white">Hi, This is </h2>
          <h2 className="text-white">Fuwad Hossian</h2>
          <h1 className=" text-title">Front End Developer</h1>
          <h1 className=" text-title">Web Developer</h1>
          <h1 className=" text-title">Full Stack Developer</h1>
        </div>
          <br />
          <span className="m-5">
            <a
              className="btn-resume p-2 "
              href="https://drive.google.com/file/d/1JPMvJm3JZf5v6J21FvMA8ST81pOtjzmM/view?usp=sharing"
              target="_blank"
            >
              Download Resume
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Homes;
