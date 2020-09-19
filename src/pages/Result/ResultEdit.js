/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { history } from "../../store";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

import { Form } from "../../components/DynamicForm/Form";

export const ResultEditForm = props => {
  let { id } = useParams();

  if (!localStorage.token) {
    history.push("/");
  }

  useEffect(() => {
    props.getResult(id);
  }, []);

  let json = {};
  if (!!props.result && !!props.result.result) {
    try {
      json = JSON.parse(props.result.result.survey.json);
    } catch (error) {
      console.log("Error", error);
    }
  }

  let data = {};
  if (!!props.result && !!props.result.result) {
    try {
      data = JSON.parse(props.result.result.data);
    } catch (error) {
      console.log("Error", error);
    }
  }
  
  return (
    <>
      <div style={{ margin: 16 }}>
        <Spin spinning={props.result.resultLoading}>
          <Form
            id={!!props.result && !!props.result.result ? props.result.result.survey._id : "" }
            resultid={id}
            json={json}
            data={data}
            isEdit={true}
          />
        </Spin>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  result: state.result
});

const mapDispatchToProps = dispatch => ({
  getResult: dispatch.result.getResult
});

export const ResultEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultEditForm);
