/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Editor } from "../../components/DynamicForm/Editor";
import { Spin } from "antd";

const EditSurveyForm = props => {
  let { id } = useParams();

  useEffect(() => {
    if (!props.survey.survey) {
      props.getSurvey(id);
    }
  }, []);

  let json;
  if (!!props.survey.survey) {
    try {
      json = JSON.parse(props.survey.survey.json);
    } catch (error) {
      console.log("Error", error);
    }
  }
  return (
    <>
      <Header title='Edit Survey' onBack={() => window.history.back()} />
      <div style={{ margin: 16 }}>
        <Spin spinning={props.survey.surveyLoading}>
          <Editor json={json} id={id} isEdit={true} />
        </Spin>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  survey: state.survey
});

const mapDispatchToProps = dispatch => ({
  getUserSurvey: dispatch.survey.getUserSurvey,
  getSurvey: dispatch.survey.getSurvey,
  deleteSurvey: dispatch.survey.deleteSurvey
});

export const EditSurvey = connect(mapStateToProps, mapDispatchToProps)(EditSurveyForm);
