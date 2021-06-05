import React from "react";
import { db } from "../../firebase/config";
import "./Survey.css";

const Survey = () => {
  const saveAnswer = (event) => {
    event.preventDefault();

    const elementsArray = [...event.target.elements];

    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("SurveyResponses").add(formData);
  };

  return (
    <div className="container">
      <h1>What are some of your favorite tunes?</h1>
      <form onSubmit={saveAnswer}>
        <input type="text" id="answer" placeholder="Type here..."></input>
        <button>Submit to Firebase</button>
      </form>
    </div>
  );
};

export default Survey;
