import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import AOS from 'aos';

const Contact = () => {
  AOS.init();
  function sendEmail(e) {
    e.preventDefault();

    // emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  }
  return (
    <div
    data-aos="zoom-out-left"
      className="container p-3 mt-3 "
      style={{ backgroundColor: "rgb(40, 238, 245)" }}
    >
      <h1 className="p-5">Contact Me</h1>
      <div className="row ">
        <div className="col-md-6 col-12 ">
          
                <ul className="footer-ul"> <h2>
                  <i className="fas fa-map-marker-alt px-3 "></i>
                   Bhola, Bangladesh
                </h2></ul>
                <ul className="footer-ul"> <h2>
                <i className="fas fa-envelope px-3"></i>
                fuhadrare444@gmail.com
                </h2></ul>
                <ul className="footer-ul"> <h2>
                <i class="fab fa-whatsapp px-3"></i>
                01715497198
                </h2></ul>
               
        </div>
        <div className="col-md-6 col-12 ">
          <form onSubmit={sendEmail} className="text-field">
            <input className="m-2 w-50 px-2 rounded p-2" type="text" placeholder="Name" />
            <br />
            <input
              className="m-2 w-50 px-2 rounded p-2"
              type="text"
              placeholder="Subject"
            />
            <br />
            <textarea
              className="m-2 w-50 px-2 rounded p-2"
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="message"
            ></textarea>
            <br />
            <input className="w-50 mb-2 p-2 bg-dark text-white btn-submit rounded-pill" type="submit" value="Send Email" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
