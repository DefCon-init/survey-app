/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { connect } from "react-redux";

import "antd/dist/antd.css";
import "./Login.css";
import styled from "styled-components";

import { Form, Input, Button, Spin, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { history } from "../../store";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 0px 16px 0px 16px;
  background-color: #f7f9ff;
`;
const LoginContainer = styled.div`
  border-radius: 25px;
  border: 2px solid #40a9ff;
  padding: 20px;
  background-color: #f7f9ff;
  box-shadow: inset 0 0 6px -2px #000000;
  border-radius: 30px;
  background-color: white;
`;

const LoginForm = props => {
  if (!!localStorage.token) {
    history.push("/home");
  }

  const onFinish = async values => {
    props
      .login(values)
      .then(res => history.push("/home"))
      .catch(err => history.push("/"));
  };

  return (
    <>
      {!props.user.userLoading && props.user.userSuccess && (
        <Alert message='Signin successfull!' closable={true} type='success' />
      )}
      {!props.user.userLoading && props.user.userError && (
        <Alert message='Error while signin!' closable={true} type='error' />
      )}
      <Container>
        <LoginContainer>
          <Spin spinning={props.user.userLoading}>
            <Form
              name='normal_login'
              className='login-form'
              initialValues={{ remember: true }}
              onFinish={onFinish}>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: "Please input your email!"
                  },
                  {
                    type: "email",
                    message: "Please input valid email!"
                  }
                ]}>
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Email'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!"
                  }
                ]}>
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'>
                  Log in
                </Button>
                {"   "}OR
                <Button type='link' onClick={() => history.push("/register")}>
                  register now!
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </LoginContainer>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: dispatch.user.login,
  getUserSurvey: dispatch.survey.getUserSurvey
});

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
