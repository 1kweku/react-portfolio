import React from "react";
import "../../styles/resume.css";

export default function resume() {
  return (
    <div id="resume">
      <h1>Resume</h1>
      <h2>Back End</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
      </ul>
      <h2>Back End</h2>
      <ul>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>Mongo.db</li>
        <li>Express</li>
      </ul>
      <p>
        {" "}
        For full resume click{""}
        <a href="https://docs.google.com/document/d/1e_teVkTeUaBg6exfmGMur9mrZKcMnhgc3vRmJVmvsiY/edit">
          {" "}
          here
        </a>{" "}
      </p>
    </div>
  );
}
