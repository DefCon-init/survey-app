/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";
import { history } from "../../store";

import "antd/dist/antd.css";
import styled from "styled-components";

import { Form, Input, Button, Divider } from "antd";

import { Header } from "../../components/Header/Header";

const Container = styled.div`
  margin: 30px;
`;

const ResultForm = props => {
  const onFinish = async values => {
    history.push(`/results/${values.surveyid}`)
  };

  return (
    <>
      <Header></Header>
      <Divider style={{ margin: 16 }} orientation='left'>
        Fetch Result
      </Divider>
      <Container>
        <Form
          name='result_form'
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name='surveyid'
            rules={[
              {
                required: true,
                message: "Please input surveyid!"
              }
            ]}>
            <Input placeholder='Surveyid' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Get Results
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const Result = connect(mapStateToProps, mapDispatchToProps)(ResultForm);
