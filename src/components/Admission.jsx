import React, { useState } from 'react'
import './Admission.css'
const Admission = () => {
    const [formData, setFormData] = useState({
    class: '',
    studentName: '',
    parentName: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };
  return (
    <div>
      <section className='hero'>
      <h1>Admissions Open!!!</h1>
      </section>
      <section className='process-main'>
      <div className='process'><h1>Application Process</h1>
      <div className='process-sub'>
      <div className='stages'>
      <p>At New Macaulay English School, we follow a two-stage assessment system to gauge every candidate’s true potential and also help the candidate to devise a proper learning plan to meet their objectives.

<br /><br />Stage 1: Submit an application form online
<br />Stage 2: Interview with the Academic Director (30 minutes)
<br /><br />
In case the student is shortlisted, an Offer Letter will be sent out. Students along with the parents/ guardians must accept the offer & pay the enrollment fee.

</p>
      </div>
      <div className='cycle'>
      <p>New Macaulay English School Admission Cycle: <br />   <br />     Admissions start in October and end in July of the following year. <br />The Academic year starts in August and ends in May, 
        with external examinations scheduled in May & June for students appearing for the high stakes examinations- IGCSE, AS & A Levels.</p>
      </div>
      </div>
      </div>
      </section>
      <section className='enquiry'>
      
    <form className='form' onSubmit={handleSubmit}>
      <div><h3 style={{ fontSize: '23px', fontWeight: 600, textAlign: 'center', fontFamily: 'arial' }}>
        Admission Inquiry 2024-25
      </h3>
      <p style={{ fontSize: '14px', textAlign: 'center' }}>A Journey To A Better Future Begins With Us</p>
      <div>
        <select
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        >
          <option value="">Select Grade*  </option>
          <option value="Pre KG">Pre KG</option>
          <option value="LKG">LKG</option>
          <option value="UKG">UKG</option>
          <option value="Grade 1">Grade 1</option>
          <option value="Grade 2">Grade 2</option>
          <option value="Grade 3">Grade 3</option>
          <option value="Grade 4">Grade 4</option>
          <option value="Grade 5">Grade 5</option>
          <option value="Grade 6">Grade 6</option>
          <option value="Grade 7">Grade 7</option>
          <option value="Grade 8">Grade 8</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 10">Grade 10</option>
        </select>
      </div>
      <div>
        <input
          id="studentName"
          name="studentName"
          type="text"
          placeholder='Student name*'
          value={formData.studentName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        
        <input
          id="parentName"
          name="parentName"
          type="text"
          placeholder='Parent name* '
          value={formData.parentName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          placeholder='Mobile Number*'
          maxLength={10}
          minLength={10}
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button></div>
    </form></section>
    </div>
  )
}

export default Admission
