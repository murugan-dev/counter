import React from 'react';
import './Contact.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'



const Contact = () => {
  const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hfzk3qd', 'template_fgl7c4i', form.current, 'Lzp4njvpvI1TKucl7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    const backNavigate = useNavigate();
    const homeNavigate = useNavigate()

  return (
    <div className='contact-container'>
        <div className='contact-content'> 
            <h2 className='contact-h2'>To Contact Me</h2>
            <div className='form-container'>

            <form ref={form} onSubmit={sendEmail}>
              <h3 className='form-h3'>Contact With Me On</h3>
              <div className='social-icons'>
               <a href='https://www.linkedin.com/in/murugan-mk/'>               
                <BsLinkedin />
                </a> 
                <a href='https://github.com/murugan-dev'>
                <AiOutlineGithub />
                </a>
              </div>
              <div className='form-or-option'>
                <hr className='contact-hr'/>
                <p className='contact-or'>OR</p>
                </div>
              <div className='sub-form'>
              <label>Name</label>
              <br/>
              <input type='name' required name="user_name"/>
              <br/>
              <label>Gmail</label>
              <br/>
              <input type='email' required name='user_email'/>
              <br/>
              <label>Subject</label>
              <br/>
              <input type='text'required name='subject'/>
              <br/>
              <label>Message</label>
              <br/>
              <textarea className="form-textarea" required name='message'/> 
              <br/>
              <button className='contact-btn'>Send</button>
              </div>
            </form>
            </div>

            <button className='about-back-btn about-btn contact-btn1' onClick={()=>backNavigate('/contact')}><AiOutlineArrowLeft/>Back</button>
      <button className='about-more-btn about-btn contact-btn1' onClick={()=>homeNavigate("/")}><AiOutlineHome/>Home</button>


        </div>
    </div>
  )
}
export default  Contact;
