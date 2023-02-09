import React from "react";
const styles = {
  header: {
    textAlign: "center",
    backgroundColor: "grey",
  },
  body: {
    backgroundColor: "baby blue",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default function About() {
  return (
    <div id="about-me">
      <h2 style={styles.header}>About me</h2>
      <p style={styles.body}>
        Hello! My name is Kweku Adarkwa. A graduate from Monmouth University
        with Psychology udnergrad program, but have more recently a graduate
        from Rutgers Full Stack Coding bootcamp. This course was based on
        Javascript and learning frontend programming such as HTML, CSS, and
        React. On the backend, MySQL, MongoDB and Express. The culmination of
        eveyrthing learned has officially made me a fullstack developer, and I
        am looking forward to opportunities that I can contribute and expand on
        my skills!
      </p>
    </div>
  );
}
