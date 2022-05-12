import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


const Contact = () => {
   


    function sendEmail (e){
        e.preventDefault();

        // emailjs.sendForm('gmail', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
    }
    return (
    <div className="container p-3 mt-3 rounded" style={{backgroundColor: "rgb(40, 238, 245)"}}>
        
        <h1 className="">Contact</h1>
            <div className="row ">
            
            
                <div className="col-md-6 col-12 ">


                  
                    <table>
                        <tbody>
                           <tr>
                           <td>
                            <h2><i className="fas fa-map-marker-alt  "></i></h2>
                            </td>
                            <td>
                                <h2  >Bhola, Bangladesh</h2>
                            </td>
                           </tr>
                           <tr>
                           <td>
                            <h2><i className="fas fa-envelope "></i></h2>
                            </td>
                            <td>
                                <h2 >fuhadrare444@gmail.com</h2>
                            </td>
                           </tr>
                           <tr>
                           <td>
                            <h2><i class="fab fa-whatsapp"></i></h2>
                            </td>
                            <td>
                                <h2  >01715497198</h2>
                            </td>
                           </tr>
                           <tr>
                           <td>
                            <h2><i className="fas fa-phone  "></i></h2>
                            </td>
                            <td>
                                <h2  >01715497198</h2>
                            </td>
                           </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-md-6 col-12 ">
                    <form onSubmit={sendEmail} className="text-field">
                        <input className="m-2 w-50 px-2" type="text" placeholder="Name" />
                        <br />
                        <input className="m-2 w-50 px-2" type="text" placeholder="Subject" />
                        <br />
                       <textarea className="m-2 w-50 px-2" name="" id="" cols="30" rows="5" placeholder="message"></textarea>
                        <br />
                        <input className="w-50 mb-2 " type="submit" value="Send Email" />
                    </form>
                </div>
          
        </div>
    </div>
    );
};

export default Contact;