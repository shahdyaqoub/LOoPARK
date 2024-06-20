import React, { useState } from "react";
import image from "../image/contact.png";
import '../style/Contact.css';
import { ContactUs } from '../api/user';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () =>{
    let [Name, setContactName] = useState('');
    let [Email, setContactEmail] = useState('');
    let [Message, setContactMessage] = useState('');

  
    const handleNameChange = (event) => {
      setContactName(event.target.value);
    };
    const handleEmailChange = (event) => {
      setContactEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
      setContactMessage(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      
      try {
        await ContactUs(Name, Email,Message);
        console.log("تم إرسال التجربة بنجاح");
        setContactName('');
        setContactEmail('');
        setContactMessage('');

      } catch (error) {
        console.error("خطأ في إرسال التجربة:", error);
      }
    };
    const showToastMessage = () => {
      toast.success("Massege submitted successfully");
    };
  
    const handleButtonClick = async (event) => {
      await handleSubmit(event); // Ensure handleSubmit is awaited
      showToastMessage();
    };
  
    return(
        <div className="interior_13">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-container-block">
              <div className="orange-card">
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6" id="i7wk">
                <div className="card-content">
                  <p className="text-blk section-head">
                    Get in touch
                  </p>
                  <p className="text-blk sub-head">
                    Feel free to contact us any time. We will get back to you as soon as we can!  
                  </p>
                  <form className="for">
  
        <div className="form-group position-relative">
          <label htmlFor="formName" className="d-block">
            <i className="icon" data-feather="user"></i>
          </label>
          <input required type="text" id="formName" className="form-control form-control-lg thick" placeholder="Name" name="Name" value={Name} onChange={handleNameChange}/>
        </div>
  
        
        <div className="form-group position-relative">
          <label htmlFor="formEmail" className="d-block">
            <i className="icon" data-feather="mail"></i>
          </label>
          <input required type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="email" name="Email"  value={Email} onChange={handleEmailChange}/>
        </div>
  
        
        <div className="form-group message">
          <textarea required id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Message" name="Message" value={Message} onChange={handleMessageChange }></textarea>
        </div>
      
        
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleButtonClick}>Send</button>
        </div>
    </form>
                </div>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6 img-one" id="iwgx">
                <img className="img-sofa3" src={image} alt="image "/>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
    	position="top-center"
    	/>
      </div>
          );
        };
export default Contact; 

