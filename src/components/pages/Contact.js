import React from "react";
const styles = {
  messageBox: {
    width: "370px",
    height: "200px",
    innerHeight: "200px",
  },
};
export default function Contact() {
  return (
    <form
      className="row g-3"
      action="https://formsubmit.co/733626cb6aa622dfaca1c6471c682270"
      method="POST"
    >
      <div className="form-body">
        <h2>Leave a message!</h2>
        <span> Full Name</span>
        <br />
        <input className="input" type="text" name="full-name" required />
        <br />
        <span> email</span>
        <br />
        <input className="input" type="text" name="email" required />
        <br />
        <span> message</span>
        <br />
        <input
          className="input"
          type="text"
          name="message"
          required
          style={styles.messageBox}
        />
        <br />
        <button onSubmit="">Submit</button>
      </div>
    </form>
  );
}
