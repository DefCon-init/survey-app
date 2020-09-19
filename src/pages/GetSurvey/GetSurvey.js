/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Spin } from "antd";

import { Form } from "../../components/DynamicForm/Form";

export const GetSurveyForm = props => {
  let { id } = useParams();

  useEffect(() => {
    props.getSurvey(id);
  }, []);

  let json = {};
  if (!!props.survey.survey) {
    try {
      json = JSON.parse(props.survey.survey.json);
    } catch (error) {
      console.log("Error", error);
    }
  }
  return (
    <>
      <div style={{ margin: 16 }}>
        <Spin spinning={props.survey.surveyLoading}>
          <Form id={id} json={json} />
        </Spin>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  survey: state.survey
});

const mapDispatchToProps = dispatch => ({
  getSurvey: dispatch.survey.getSurvey
});

export const GetSurvey = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetSurveyForm);
