import React from "react";
import { connect } from "react-redux";
// import { history } from "../../store";

import * as Survey from "survey-react";
import "survey-react/survey.css";

const FormComponent = props => {
  const onComplete = async (survey, options) => {
    console.log(survey.data)
    console.log(JSON.stringify(survey.data))
    let data = new URLSearchParams();
    data.append("data", JSON.stringify(survey.data));
    data.append("surveyid", props.id);
    let response;
    if (!!props.isEdit) {
      const { resultid } = props;
      response = await props.editResult({ resultid, data });
      if (!!response && !!response.status) {
        let url = window.location.href.replace(window.location.pathname, '')
        url = `${url}/results/${props.id}`
        window.location = url;
      }
    } else {
      response = await props.createResult(data);
    }
  };
  const model = new Survey.Model(props.json);
  if (!!props.data) {
    model.data = props.data;
  }
  return <Survey.Survey key={props.id} model={model} onComplete={onComplete} />;
};

const mapStateToProps = state => ({
  result: state.result
});

const mapDispatchToProps = dispatch => ({
  editResult: dispatch.result.editResult,
  createResult: dispatch.result.createResult
});

export const Form = connect(mapStateToProps, mapDispatchToProps)(FormComponent);
