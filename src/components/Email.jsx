import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Form = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({})

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
  })
  }
      
  
  const validate = () => {
    const errors = {};
    if(!formData.name) {
      errors.name = 'Username is required'
    }
    if(!formData.email) {
      errors.email = 'Email is required'
    }
    if(!formData.message) {
      errors.message = 'Message is required'
    }

    return errors
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate()
    setFormErrors(errors)
    
    if (Object.keys(errors).length === 0) {
    // emailjs.sendForm('service_emfyjdp', 'template_ivoc4sb', form.current, 's4KP03XQTOq3baB2x')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
    setIsSubmitted(true)
    setShowForm(false)
  }
  
  };



  return (
    <div>
    {showForm &&
    <form className='form' ref={form} onSubmit={handleSubmit}>
    <div className='name-form'>
      <label>Name</label>
      <input className='name-input' type="text" name="name" value={formData.name} onChange={handleChange} />
    </div>
    <p className='submit-errors'>{formErrors && formErrors.name}</p>
    <div className='email-form'>
      <label>Email</label>
      <input className='email-input' type="email" name="email" value={formData.email} onChange={handleChange}/>
    </div>
    <p className='submit-errors'>{formErrors && formErrors.email}</p>
    <div className='message-form'>
      <label>Message</label>
      <textarea className='message-input' name="message" value={formData.message} onChange={handleChange}/>
    </div>
    <p className='submit-errors'>{formErrors && formErrors.message}</p>
      <input className='submit-input' type="submit" value="Submit" />
    </form>}
    {isSubmitted && !showForm && <p className='submit-message'>Your message has been sent! Thanks for taking the time to contact us.</p>}
    </div>
  );
};

export default Form