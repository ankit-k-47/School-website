import './App.css';
import About from './components/About';
import Academics from './components/Academics.jsx';
import Contact from './components/Contact';
import Admission from './components/Admission';
import Gallery from './components/Gallery';
import { FaBars,FaTimes } from 'react-icons/fa';  
import Home from './components/Home'
import {BrowserRouter as Router,Route,Routes, Link} from "react-router-dom";
import { FaCircleChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
import { faBuilding, faEnvelope, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className={isMenuOpen ? "Appc" : "App" }>
   
   <Router>
   <div className='nav2'>
       <nav>

                <div><a href="/"><img src="https://www.newmacaulayenglishschool.com/static/media/MHS.1fb7c88f9f3d5e1f7293.png" alt="" /></a></div>
       <div className={isMenuOpen ? "i active" : "navbar-toggle" }onClick={toggleMenu}>
          {!isMenuOpen&&<FaBars />}
          
        </div>
      <div className={isMenuOpen ? "i active" : "i"}>
      <div onClick={toggleMenu}>
          
          {isMenuOpen&&<FaTimes/>}
        </div>
        <ul className={isMenuOpen?"list-menu":"list"}>
        <Link to='/'><li className="icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" class="svg-inline--fa fa-house navbarMenuIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>Home
    
      </li></Link>
      <li className="icons dropdown-toggle" ><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="people-group" class="svg-inline--fa fa-people-group navbarMenuIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path></svg>
      About <FaCircleChevronDown />

      <ul className="dropdown-menu">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
      </li>
      <Link to="/academics"><li className="icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" class="svg-inline--fa fa-graduation-cap navbarMenuIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path></svg>Academics
      
      </li></Link>
      
      <Link to='/gallery'><li className="icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="server" class="svg-inline--fa fa-server navbarMenuIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"></path></svg>
      Gallery
      </li>  </Link>
    
      <Link to='/admission'><li className="icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="school" class="svg-inline--fa fa-school navbarMenuIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"></path></svg>Admission
      
      </li></Link>
      <Link to='/contact'><li className="icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="address-book" class="svg-inline--fa fa-address-book navbarMenuIcon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"></path></svg>Contact
     
      </li> </Link>
      </ul>
      </div>
      </nav>
       </div>
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/about" element={<About></About>}></Route>
      <Route exact path="/academics" element={<Academics></Academics>}></Route>
      <Route exact path="/gallery" element={<Gallery></Gallery>}></Route>
      <Route exact path="/admission" element={<Admission></Admission>}></Route>
      <Route exact path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    <section className="footerSec">
      <div className="container text-center text-md-start">
        <div className="row1">
          <div className="col-md-6 col-lg-3">
            <div className="footerlogo">
              <img src="https://www.newmacaulayenglishschool.com/static/media/MHS.1fb7c88f9f3d5e1f7293.png" alt="Company Logo" width="170px" className="mb-3 lo" />
              <p className="my-p1-class">Follow us on Social Media</p>
              <div className="icon">
                <a href="https://facebook.com/share/bRDUkRszHg7sRRcf/?mibextid=oFDknk" className="socialiconf">
                  <FontAwesomeIcon icon={faFacebookSquare} className="text-primary" />
                </a>
                <a href="https://instagram.com/nmehs7?utm\_source=qr&amp;igsh=d2x4NXZhajQzaHFk" className="socialicon">
                  <FontAwesomeIcon icon={faInstagramSquare} className="custom-instagram-icon" />
                </a>
                <a href="https://youtube.com/@NewMacaulayHighSchool?si=M8TEhnGL7EE6CRxk" className="socialicon">
                  <FontAwesomeIcon icon={faYoutubeSquare} className="text-danger" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 mb-4 black-text ql" style={{ marginTop: '25px' }}>
            <h3 className="text-uppercase fw-bold mb-4 black-text">Quick Links</h3>
            <p className="my-custom-class"><a href="/" className="no-underline text-black">Home</a></p>
            <p className="my-custom-class"><a href="/about" className="no-underline text-black">About Us</a></p>
            <p className="my-custom-class"><a href="/infrastructures" className="no-underline text-black">Infrastructure</a></p>
          </div>
          <div className="col-md-6 col-lg-2 mb-4 black-text" style={{ marginTop: '25px' }}>
            <h3 className="text-uppercase fw-bold mb-4 black-text">Info Links</h3>
            <p className="my-custom-class"><a href="/Academics" className="no-underline text-black">Academics</a></p>
            <p className="my-custom-class"><a href="/Contacts" className="no-underline text-black">Contact</a></p>
            <p className="my-custom-class"><a href="https://newmacaulayenglishschool.com/" className="no-underline text-black">School IMS</a></p>
          </div>
          <div id='con' className="col-md-6 col-lg-5 mb-4 black-text" style={{ marginTop: '25px' }}>
            <h3 className="text-uppercase fw-bold mb-4 black-text">Contact</h3>
            <p className="my-custom-class"><FontAwesomeIcon icon={faBuilding} className="me-3 black-icon" /> Kudlu Gate, Hosapalya Main Road, Banglore- 560068</p>
            <p className="my-custom-class"><FontAwesomeIcon icon={faEnvelope} className="me-3 black-icon" /> macaulayschool2010@gmail.com</p>
            <p className="my-custom-class"><FontAwesomeIcon icon={faPhone} className="me-3 black-icon" /> 080-49524676</p>
            <p className="my-custom-class"><FontAwesomeIcon icon={faMobile} className="me-3 black-icon" /> +91-9739156824</p>
          </div>
        </div>
      </div>
    </section>
    </Router>
    </div>
  );
}

export default App;
