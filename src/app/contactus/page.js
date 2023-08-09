"use client";
import React from 'react';
import NewsletterForm from '../newsletter/newsletterform';

function Contact(){
  // States for contact form fields
     const [firstname, setFirstname] = React.useState("");
     const [lastname, setLastname] = React.useState("");
     const [email, setEmail] = React.useState("");
     const [phonenumber, setPhonenumber] = React.useState("");
     const [message, setMessage] = React.useState("");

  //   Form validation state
     const [errors, setErrors] = React.useState({});

  //   Setting button text on form submission
    const [buttonText, setButtonText] = React.useState("Submit");

  // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [showFailureMessage, setShowFailureMessage] = React.useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (firstname.length <= 0) {
      tempErrors["firstname"] = true;
      isValid = false;
    }
    if (lastname.length <= 0) {
      tempErrors["lastname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phonenumber.length <= 0) {
      tempErrors["phonenumber"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };
  
  // Handling form submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    const formData = {} 
    Array.from(e.currentTarget.elements).forEach(field =>{
      if( !field.name) return ;
      formData[field.name] = field.value;
    });
    fetch('/api/sendgrid',{
      method:'post',
      body: JSON.stringify(formData)
    })
    
    console.log(formData);

  let isValidForm = handleValidation();

  if(isValidForm){
   setButtonText("Sending");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        firstname:firstname,
        lastname:lastname,
        email:email,
        phonenumber:phonenumber,
        message:message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
      
  const { errors } = await res.text();
      if (errors) {
        console.log(errors);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Submit");

        // Reset form fields
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhonenumber("");
        setMessage("");
        return;
      }
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Submit");
        // Reset form fields
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhonenumber("");
        setMessage("");
    } 
  
  console.log(firstname,lastname, email, phonenumber, message);
}


return (
  <>
    <div className="relative mt-10 flex items-top justify-center min-h-screen bg-white dark:bg-gray-900   sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded">
              <h1 className="text-4xl sm:text-5xl text-teal-400 dark:text-white font-extrabold tracking-tight">
              Get in touch with us
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-400 dark:text-gray-400 mt-2">
                 Fill in the form to start a conversation
              </p>
            
              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" rel="preload" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                <div className="ml-4 text-md text-gray-400 tracking-wide font-semibold w-40 whitespace-normal">
                <a href="https://goo.gl/maps/27dCiCNDC4CgmwFP9" target="_blank" rel="preload" as="style">
                #01,Ground Floor,Pinnac Apt.,Vakil Nagar,Erandwane,Pune – 411004.
                </a>
                </div>
              </div>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" rel="preload" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                <div className="ml-4 text-md tracking-wide text-gray-400 font-semibold w-40 whitespace-normal">
                <a href="https://goo.gl/maps/27dCiCNDC4CgmwFP9" target="_blank" rel="preload" as="style">
                Orange Electrical Solutions,Kangeyam Road,Nachipalayam,Tiruppur,
                Coimbatore - 641606
                </a>
                </div>  
              </div>
            
              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg as="image" rel="preload" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div className="ml-4 text-md text-gray-400 tracking-wide font-semibold w-40">
                +91 9098797979
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg  rel="preload" as="image"  fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div className="ml-4 text-md text-gray-400 tracking-wide font-semibold w-40">
                <a href="mailto:info@vtechrenewables.com">
                info@vtechrenewables.com
                </a>
                </div>
                </div>
              </div>

              <form method="post" onSubmit={handleOnSubmit} className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="hidden">First Name</label>
                  <input className="w-100 mt-2 py-3 px-3 rounded bg-white-100 dark:bg-gray-500 border-2 border-gray-400 dark:border-gray-500 text-gray-500 font-semibold focus:border-teal-500 focus:outline-none"
                  type="text" 
                  value={firstname}
                  onChange={(e) => {
                   setFirstname(e.target.value);
                  }}  
                  name="firstname" 
                  id="firstname" 
                  placeholder="First Name" 
                  />
                  {errors?.firstname && (
                    <p className="text-red-400">Please enter your firstname.</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastname" className="hidden">Last Name</label>
                  <input className="w-100 mt-2 py-3 px-3 rounded bg-white-100 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 text-gray-500 font-semibold focus:border-teal-500 focus:outline-none"
                  type="text"
                  value={lastname}
                  onChange={(e) => {
                   setLastname(e.target.value);
                  }}   
                  name="lastname" 
                  id="lastname" 
                  placeholder="Last Name"
                  />
                  {errors?.lastname && (
                    <p className="text-red-400">Please enter your lastname.</p>
                  )}
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">Email</label>
                    <input className="w-100 mt-2 py-3 px-3 rounded bg-white-100 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 text-gray-500 font-semibold focus:border-teal-500 focus:outline-none"
                    type="email" 
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}   
                    name="email" 
                    id="email" 
                    placeholder="Email"
                    />
                    {errors?.email && (
                    <p className="text-red-400">Please enter your email address.</p>
                    )}
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="phonenumber" className="hidden">Phone Number</label>
                    <input className="w-100 mt-2 py-3 px-3 rounded bg-white-200 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 text-gray-500 font-semibold focus:border-teal-500 focus:outline-none"
                    type="text" 
                    value={phonenumber}
                    onChange={(e) => {
                    setPhonenumber(e.target.value);
                    }} 
                    name="phonenumber" 
                    id="phonenumber" 
                    placeholder="Phone Number" 
                    />
                    {errors?.phonenumber && (
                    <p className="text-red-400">Please enter your phonenumber.</p>
                    )}
                </div>
                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">Message</label>
                  <textarea className="w-100 mt-2 py-3 px-3 rounded bg-white-100 dark:bg-gray-400 border-2 border-gray-400 dark:border-gray-500 text-gray-500 font-semibold focus:border-teal-500 focus:outline-none h-52"
                  type="text"
                  value={message}
                  onChange={(e) => {
                  setMessage(e.target.value);
                  }} 
                  name="message" 
                  id="message" 
                  placeholder="Message"
                  />
                  {errors?.message && (
                  <p className="text-red-400">Please enter your message.</p>
                  )}
                  </div>
                  <button type="submit" className="md:w-32 bg-teal-400 hover:bg-teal-dark text-gray-500 font-bold py-3 px-6 rounded mt-3 hover:bg-teal-500 transition ease-in-out duration-300">
                  {buttonText}
                  </button>
                  <div>
                  {showSuccessMessage && (
                   <p className="text-gray-800 font-semibold text-sm">
                    Thankyou! Your message has been sent.
                  </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-300 font-semibold text-sm">
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                  </div>
              </form>
            </div>
          </div>
        </div>
    </div>
    <NewsletterForm/>
  </>
 )
};

export default Contact;