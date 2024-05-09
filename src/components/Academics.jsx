import React, { useEffect, useRef } from 'react'
import "./Academics.css";
import img from "../assets/gathering.jpg"
import { useInView } from 'react-intersection-observer';
const AnimatedImage = ({ index }) => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px',
  });

  useEffect(() => {
    if (inView) {
      ref.current.classList.add('visible');
    }
  }, [inView]);

  return (
    <div className='aca-img' ref={inViewRef}>
      <div ref={ref} className="aca-img-inner">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

const Academics = () => {

  return (
    <div>
      <section className='academic-main'>
        <div class="container ">
			<div class="top-banner-body title_section_box_top_position right">
				<div class="text-section">
					<h1 class="font-italic-style nL3textcolor ">Academics</h1>
					<p class="mb-0 F4fdesccolor">At our esteemed institution in Bengaluru, we inspire your child to embrace a journey of <br /> lifelong learning, nurturing their curiosity and fostering excellence in every step of their educational journey.
</p>
			</div>
			</div>
		</div>
      </section>
      <section className='pre'>
      
      <h1>Pre-primary</h1>
      <div>
         <AnimatedImage index={1} />
        <div className='aca-p'>
        <p>Our Pre-Primary program focuses on providing a stimulating and nurturing environment where young learners can explore, play, and develop foundational skills. Through age-appropriate activities and interactive learning experiences, we aim to foster curiosity, creativity, and a love for learning.</p></div>
       </div></section>
      <section className='pri'>
      
      <h1 className='prih1'>Primary</h1>
      <div className='pri-sub'>
        <div className='aca-pri'>
        <p>In Primary School, students dive deeper! Building on their early learning, they explore core subjects like English, Math, Science, and Social Studies. THe engaging lessons and hands-on activities nurture critical thinking, curiosity and a love for discovery. </p></div>
      
        <AnimatedImage index={2} />
         </div>
      </section>
       <section className='pre'>
      
      <h1>Middle School</h1>
      <div>
         <AnimatedImage index={3} />
        <div className='aca-p'>
        <p>In Grades 6-8, students explore a wider world. Our curriculum expands to include History, Geography, Languages, alongside Math, Science, and English. This prepares them for future academic challenges and ignites a passion for diverse subjects(Hindi/Sanskrit).</p></div>
       </div></section>
       <section className='pri'>
      
      <h1>Secondary School</h1>
      <div className='pri-sub'>
        <div className='aca-pri'>
        <p>In class 9 and 10 we push students to master ICSE! Our program offers in-depth study of English, Math, Science, History, Geography & a Second Language. Rigorous academics prepare students to excel in ICSE exams and beyond.</p></div>
      
        <AnimatedImage index={4} />
         </div>
      </section>
    
      <section className='tea'>
         <h1>Our Teachers</h1>
     <div className='teachers'>
         <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src="https://www.newmacaulayenglishschool.com/static/media/Mamatha.b7d7014f73c1e8e506c7.png" alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
    <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src="https://www.newmacaulayenglishschool.com/static/media/Shakeerbasha.5b8c9ce821de2ddca9a5.png" alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
    <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src={img} alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
    <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src={img} alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
     <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src={img} alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
     <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src={img} alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
     <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src={img} alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div>
     <div className="aca-card">
      <div className="card-background"></div>
      <div className="card-image-container">
        <img src={img} alt="Card" />
        <div className="card-details">
          <h3>Ram</h3>
          <p>Maths teacher</p>
        </div>
      </div>
    </div></div>
    
      </section>
    </div>
  )
}

export default Academics
