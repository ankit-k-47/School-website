import React from 'react';
import "./Home.css";
import img from "../assets/gathering.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { RiContactsBookLine, RiDiscussLine, RiDraftLine } from 'react-icons/ri';


const Home = () => {
  return (
    <>
    <section>
    <div className='nav'>
      <div className="content"><div><h3 class="hco">       Unlocking Potential, having Futures</h3><h1 class="homereroh1"> New Macaulay English School</h1><h5 class="homereroh5"><q>         Knowledge is Supreme</q></h5></div></div>
      </div>
      </section>
      <section >
        <div className='intro'><div className="sub"><h1>Welcome to Our School</h1><p>Where we believe in the supreme power of knowledge. Our institution is dedicated to not only fostering academic excellence but also ensuring the holistic development of each student. We go beyond traditional teaching methods, creating an environment where creativity, critical thinking, and innovation flourish. With state-of-the-art facilities, including a modern computer lab, alongside our team of dedicated educators and a supportive community, we empower students to unlock their full potential and embark on a lifelong journey of learning.</p>
        <button >Explore</button></div>
        <div className="sub"><img src="https://www.newmacaulayenglishschool.com/static/media/home.bb37fbcd5e5fd7a75a8c718460dc95fb.svg" alt="" /></div></div>
      </section>
   <section className="admissionMarquee topmarq">
      <h3 className="topCrslHead">Our Toppers</h3>
      <div className="rfm-marquee-container" style={{ '--pause-on-hover': 'running', '--pause-on-click': 'running', '--width': '100%', '--transform': 'none' }}>
        <div className="rfm-marquee" style={{ '--play': 'running', '--direction': 'normal', '--duration': '61.1s', '--delay': '0s', '--iteration-count': 'infinite', '--min-width': '100%' }}>
          <div className="rfm-initial-child-container">
            <div className="rfm-child" style={{ '--transform': 'none' }}>
              <div className="card studentCard inlblock">
                <img className="img" src="https://www.newmacaulayenglishschool.com/static/media/Deepika.92a83f38eba29426c644.jpeg" alt="" />
                <span>Bhoomika R Pai</span>
                <p className="percentage">100 %</p>
                <p className="year">2022-2023</p>
              </div>
            </div>
            <div className="rfm-child" style={{ '--transform': 'none' }}>
              <div className="card studentCard inlblock">
                <img className="img" src="https://www.newmacaulayenglishschool.com/static/media/Deepika.92a83f38eba29426c644.jpeg" alt="" />
                <span>Bhoomika R Pai</span>
                <p className="percentage">100 %</p>
                <p className="year">2022-2023</p>
              </div>
            </div>
            <div className="rfm-child" style={{ '--transform': 'none' }}>
              <div className="card studentCard inlblock">
                <img className="img" src="https://www.newmacaulayenglishschool.com/static/media/Deepika.92a83f38eba29426c644.jpeg" alt="" />
                <span>Bhoomika R Pai</span>
                <p className="percentage">100 %</p>
                <p className="year">2022-2023</p>
              </div>
            </div>
            <div className="rfm-child" style={{ '--transform': 'none' }}>
              <div className="card studentCard inlblock">
                <img className="img" src="https://www.newmacaulayenglishschool.com/static/media/Deepika.92a83f38eba29426c644.jpeg" alt="" />
                <span>Bhoomika R Pai</span>
                <p className="percentage">100 %</p>
                <p className="year">2022-2023</p>
              </div>
            </div>
            <div className="rfm-child" style={{ '--transform': 'none' }}>
              <div className="card studentCard inlblock">
                <img className="img" src="https://www.newmacaulayenglishschool.com/static/media/Deepika.92a83f38eba29426c644.jpeg" alt="" />
                <span>Bhoomika R Pai</span>
                <p className="percentage">100 %</p>
                <p className="year">2022-2023</p>
              </div>
            </div>
            {/* More student cards here */}
          </div>
        </div>
        
      </div>
    </section>
      <section  className='int'>
      <div className='intr'>
        <div className="sub1"><img src="https://www.newmacaulayenglishschool.com/static/media/home.bb37fbcd5e5fd7a75a8c718460dc95fb.svg" alt="" />
        </div>
        <div className="sub1">
        <div>
        <h1>About Us</h1>
        <p>"At Our School, we are dedicated to nurturing young minds and preparing them for success in our rapidly changing world. Our goal is to empower each student to reach their full potential through innovative teaching methods and comprehensive extracurricular programs. Join us on our journey to excellence!"</p>
        </div>
        <div className='about-sub'>
        <div>
        <h1>4K</h1>
        <p>SSLC Students passed</p>
        
        <h1>3+</h1>
        <p>Total Branches</p>
        </div>
        <div>
        <h1>50+</h1>
        <p>Teaching Staff</p>
        <h1>17+ Years</h1>
        <p>Continue with Excellence</p>
        </div>
        </div>
        </div></div></section>
      <section className='hype'>
     <div className='run'>
  <div className='marquee-content'>
    <h4>
      <FontAwesomeIcon icon={faTrophy} className="fa-duotone" />
      <strong>Congratulations to our students for winning the Inter-School Debate Competition! </strong>
      <FontAwesomeIcon icon={faTrophy} className="fa-duotone" />
      "Our school ranked among the Top 10 Schools in the district for academic excellence."
    </h4>
  </div>
  <div className='marquee-content'>
    <h4>
      <FontAwesomeIcon icon={faTrophy} className="fa-duotone" />
      <strong>Congratulations to our students for winning the Inter-School Debate Competition! </strong>
      <FontAwesomeIcon icon={faTrophy} className="fa-duotone" />
      "Our school ranked among the Top 10 Schools in the district for academic excellence."
    </h4>
  </div>
</div>
      </section>
      <section className='intr1 '>
      <div className='intr1 '><div className="sub2"><h1>Discover the Difference</h1>
        <p>At Our School, we stand out for more than just our academic excellence. Our commitment goes beyond textbooks and grades. Here's why parents and students choose us:
        <ul>
        
        
        <li>Empowering Education: Macaulay School offers an empowering education experience, where students are encouraged to explore their passions, think critically, and reach their full potential.</li>
        
        <li>Innovative Excellence: Macaulay School combines innovative teaching methods with a commitment to excellence.</li></ul></p>
        </div>
        <div className="sub2"><img src="https://www.newmacaulayenglishschool.com/static/media/15.c72c542cbfa366dfff16.JPG" alt="" />
        </div></div></section>
      <section className='acoffer'>
      <div className='offer'> <h1>Academics offering</h1>
      <p>Our comprehensive curriculum are designed to inspire intellectual curiosity, foster critical thinking skills, and empower students to reach their full potential. From innovative teaching methods to comprehensive extracurricular programs.</p>
      </div>
      <div className='offer1'>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/courseImg2.8f07ca0507036325f5c0fb14fac8a3d7.svg" alt="" />
      <p>English</p>
      </div>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/courseImg3.935f26c4d1fb7f8f84c3be66f6c67bd3.svg" alt="" />
      <p>Maths</p>
      </div>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/courseImg1.0b771fb6c0e70a43fb20530f1df14d6e.svg" alt="" />
      <p>Science</p>
      </div>
      </div>

      </section>
       <section className="section-background">
      <div className="container">
        <div className="text-center ourfetr mb-5">
          <h2>Our Features</h2>
        </div>
        <div className="row">
          <div className="single_feature_col col-md-4 col-lg-4">
            <div className="single__feature text-center px-4">
              <h2 className="mb-4"><RiDraftLine /></h2>
              <h6>Inclusive Environment</h6>
              <p>A welcoming atmosphere that celebrates diversity</p>
            </div>
          </div>
          <div className="single_feature_col col-md-4 col-lg-4">
            <div className="single__feature text-center px-4">
              <h2 className="mb-4"><RiDiscussLine /></h2>
              <h6>Personalized Support</h6>
              <p>Dedicated counseling and mentorship for student success.</p>
            </div>
          </div>
          <div className="single_feature_col col-md-4 col-lg-4">
            <div className="single__feature text-center px-4">
              <h2 className="mb-4"><RiContactsBookLine /></h2>
              <h6>Enriching Extracurriculars</h6>
              <p>Diverse activities fostering talent and holistic growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section className='acoffer'>
      <div className='offer'> <h1>News and Events</h1>
      <p>Welcome to the News and Events section, where you can stay updated on the latest happenings at Macaulays School. From exciting student achievements to upcoming activities, there's always something new to discover!</p>
      </div>
      <div className='offer2'>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/WhatsApp%20Image%202024-03-18%20at%2011.30.48%20AM.5bfaea6e313f1b6c8823.jpeg" alt="" />
      <p>English</p>
      </div>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/courseImg02.86d808a5cef348a8d5daab63df3d0c44.svg" alt="" />
      <p>Maths</p>
      </div>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/WhatsApp%20Image%202024-03-18%20at%2011.30.42%20AM.0fffaf7c36931b47253b.jpeg" alt="" />
      <p>Science</p>
      </div>
      <div><img src="https://www.newmacaulayenglishschool.com/static/media/WhatsApp%20Image%202024-03-18%20at%2011.30.42%20AM.0fffaf7c36931b47253b.jpeg" alt="" />
      <p>Science</p>
      </div>
      </div>

      </section>
      <section>
      <div className="newsletter container">
        <div>
          <div className="overlay row">
            <div className="text-center col-lg-12">
              <h2 className="mb-4 mt-4 d">School Mission and Values</h2>
              <p className="readable-animation"><q>Knowledge is Supreme</q></p>
            </div>
          </div>
        </div>
      </div>
    </section>
     
    </>
  )
}

export default Home
