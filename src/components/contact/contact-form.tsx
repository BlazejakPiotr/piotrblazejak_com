import React from "react";
import Button from "../button/button";

const ContactForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>Name</label>
      <input type="text" />
      <label>E-mail address</label>
      <input type="email" />
      <label>Message</label>
      <textarea rows={6} />
      <Button text="Send" />
    </form>
  );
};

export default ContactForm;
