import React from 'react';
import "./About.css"
import AOS from 'aos';

const About = () => {
    AOS.init();
    return (
        <div data-aos="zoom-in" className="container about-text pt-5 p-5" style={{backgroundColor: "rgb(40, 238, 245)"}}>
            <h1 className="fw-bold">Know who I am?</h1>
            <h2 className='p-2'>Fuwad Hossian</h2>
            <h4 className='p-2'>A 22 years old Bangladeshi, I am Full Stack Web Developer</h4>
            <br />
            <h4 className='about-text'>I love programing and learning  new things is my hobby.My current focus is on Deep Learning. I try to pay my full attention for developing my skills and learning new language and Frameworks. I am a Full Stack Web Developer with solid knowledge in different technologies like React.js, Node.js, Express.js and so on and enough experience to creat responsive websites </h4>
        </div>
    );
};

export default About;