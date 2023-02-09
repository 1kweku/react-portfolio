import React from "react";
const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "grey",
  },
  body: {
    backgroundColor: "blue",
  },
};
export default function About() {
  return (
    <div id="about-me">
      <h2 style={styles.header}>About me</h2>
      <p style={styles.body}>
        Hello! My name is Kweku Adarkwa. I graduated from Monmouth University
        with a bachelors in Psychology but have more recently graduated from
        Rutgers Full Stack Coding bootcamp. This course entailed learning
        frontend programming such as HTML,
      </p>
    </div>
  );
}
