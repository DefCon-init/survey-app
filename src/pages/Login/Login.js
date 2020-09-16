import React from "react";
import "antd/dist/antd.css";
import "./Login.css";
import styled from 'styled-components';

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { history } from "../../store";

const Container = styled.div`
min-height: 100vh;
display: flex;
flex: 1 1 0%;
justify-content: center;
align-items: center;
font-size: 20px;
margin: 16px;
background-color: #F7F9FF;
`
const LoginContainer = styled.div`
border-radius: 25px;
border: 2px solid #40a9ff;
padding: 20px;
background-color: #F7F9FF;
box-shadow: inset 0 0 6px -2px #000000;
border-radius: 30px;
background-color: white;
`

export const Login = () => {
  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Container>
        <LoginContainer>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}>
            <Form.Item
              name='username'
              rules={[
                {
                  required: true,
                  message: "Please input your Username!"
                }
              ]}>
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
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
              <Button type='link' className='login-form-forgot'>
                Forgot password
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                onClick={() => history.push("/home")}
                className='login-form-button'>
                Log in
              </Button>
              Or{" "}
              <Button type='link' onClick={() => history.push("/register")}>
                register now!
              </Button>
            </Form.Item>
          </Form>
        </LoginContainer>
      </Container>
    </>
  );
};
