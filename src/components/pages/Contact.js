import React from "react";

export default function Contact() {
  return (
    <form action="" onSubmit="">
      <div className="form-body">
        <h2>Leave a message!</h2>
        <span> Full Name</span>
        <br />
        <input className="input" type="text" name="full-name" />
        <br />
        <span> email</span>
        <br />
        <input className="input" type="text" name="email" />
        <br />
        <span> message</span>
        <br />
        <input className="input" type="text" name="message" width={100} />
        <br />
        <button onSubmit="">Submit</button>
      </div>
    </form>
  );
}
