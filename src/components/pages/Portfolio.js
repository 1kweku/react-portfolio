import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <a
        className="ecommerce"
        href="https://github.com/1kweku/ecommerce-backend"
        img
        src="..../public/images/ecommerce.png"
        alt="ecommerce-backend"
      ></a>
      <a
        className="note-taker"
        href="https://blooming-tor-94074.herokuapp.com/"
        img
        src="..../public/images/note-taker.png"
        alt="note-taker"
      ></a>
      <a
        className="quiz"
        href="https://1kweku.github.io/Coding-FUNdamentals/"
        img
        src="..../public/images/quiz.png"
        alt="quiz"
      ></a>
      <a
        className="office-manager"
        href="https://github.com/1kweku/dreamteam"
        img
        src="..../public/images/dreamteam.png"
        alt="office-manager"
      ></a>{" "}
    </div>
  );
}
