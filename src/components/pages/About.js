import React from "react";
const styles = {
  header: {
    textAlign: "center",
  },
};
export default function About() {
  return (
    <div id="about-me">
      <h1 style={styles.header}>About Page</h1>
      <p>
        Hello! My name is Kweku Adarkwa. I graduated from Monmouth University
        with a bachelors in Psychology but have more recently graduated from
        Rutgers Full Stack Coding bootcamp. Below is my fledgling portfolio
        showcasing what I learned during the course. If you have any inquiries
        or comments, feel free to reach out with through the contact section of
        this page.
      </p>
    </div>
  );
}
