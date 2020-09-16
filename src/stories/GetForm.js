import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";

export const GetForm = (props) => {
  const onComplete = (survey, options) => {
    console.log("Survey results: " + JSON.stringify(survey.data));
  };
  console.log(props)
  const model = new Survey.Model(props.json);
  return (<Survey.Survey key={props.json.id} model={model} onComplete={onComplete} />);
};
