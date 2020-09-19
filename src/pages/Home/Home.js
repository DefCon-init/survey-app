/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { history } from "../../store";

import { Button, Divider, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { Header } from "../../components/Header/Header";
import { Listing } from "../../components/Listing/Listing";

const HomeComponent = props => {
  const redirectToAddSurvey = () => {
    return history.push("/addSurvey");
  };

  useEffect(() => {
    if (!localStorage.token) {
      history.push('/')
    }
    props.getUserSurvey()
  }, []);

  return (
    <>
      <Header />
      <Button
        type='primary'
        shape='round'
        icon={<PlusOutlined onClick={redirectToAddSurvey} />}
        onClick={redirectToAddSurvey}
        style={{ margin: 16 }}
        size={"large"}>
        New Survey
      </Button>
      <Divider style={{ margin: 16 }} orientation='left'>
        All Survey
      </Divider>
      <Spin spinning={props.survey.surveysLoading}>
        <Listing surveys={props.survey.surveys} />
      </Spin>
    </>
  );
};

const mapStateToProps = state => ({
  survey: state.survey
});

const mapDispatchToProps = dispatch => ({
  getUserSurvey: dispatch.survey.getUserSurvey
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
