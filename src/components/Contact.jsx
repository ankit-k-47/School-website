import React from 'react'
import './Contact.css'
import { FaPhone } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsClockFill } from 'react-icons/bs'
const Contact = () => {
  return (
    <div className='contact-main'>
      <section className='con'>
        <div>
            <h1> Contact Us</h1>
        </div>
      </section>
      <section className='ge'>
      <div className='gen'>
      <div className='gen-sub1'>
      <span><FaPhone size="2em" color="red"/></span>
      <h1>Admissions</h1>
      <p>1209348932</p>
      <h1>Account Department</h1>
      <p>1209348932</p>
      <h1>Main office</h1>
      <p>1209348932</p>
      </div>
      <div className='gen-sub1'>
      <span>      <MdMail size="2em" color="blue" /> 
</span>
      <h1>General information</h1>
      <p>info@schoolofindia.com</p>
      <h1>Admissions:</h1>
      <p>admissions@schoolofindia.com</p>
      <h1>Careers:</h1>
      <p>hr@schoolofindia.com</p>
      </div>
      </div>
       <div className='gen2'>
      <div className='gen-sub1'>
      <span><FaMapMarkerAlt size="2em" color="green" /> </span>
      <h1>
      Anekal Road, <br />Bannerghatta,<br />Bangalore – <br /> 560 083.
      </h1>
      </div>
      
     
      <div className='gen-sub1'>
      <span> <BsClockFill size="2em" color="yellow" /></span>
      <h1>Office Hours</h1>
      <h1>Monday-Friday</h1>
      <p>9:00 AM - 4:00 PM</p>
      <h1>Saturday</h1>
      <p>9:00 AM - 12:00 PM</p>
      </div></div>
      </section>
      <section className='cont'>
      <div className='contact'>
      <div className='conh1'>
      <h1>Contact Anytime</h1>
      </div>
      <div className='con-h'>
       <div className="row">
      <form >
        <div className="col-md-6">
          <div className="contact-one__input-box">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-one__input-box">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
             
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-one__input-box">
            <input
              type="text"
              placeholder="Phone"
              name="phno"
            
              pattern="[0-9]{10}"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
              maxLength="10"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-one__input-box">
            <select
              name="subject"
             
              className="form-control inp-style"
              required
            >
              <option value="">Select Option</option>
              <option value="Request Prospectus">Request Prospectus</option>
              <option value="Enquiry">Enquiry</option>
              <option value="New Admission request">New Admission request</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-one__input-box a">
            <input
              type="text"
              placeholder="Area"
              name="area"
              
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-one__input-box text-message-box">
            <textarea
              name="message"
              placeholder="Write a Message"     
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact-one__btn-box">
            <button type="submit" className="eduact-btn eduact-btn-second">
              <span className="eduact-btn__curve"></span>
              Send Message
              <i className="icon-arrow"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
      </div>
      </section>
    </div>
  )
}

export default Contact
