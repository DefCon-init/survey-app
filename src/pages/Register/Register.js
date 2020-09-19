/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { history } from "../../store";

import {
  Form,
  Input,
  InputNumber,
  Tooltip,
  Button,
  Select,
  Alert,
  Spin
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import styled from "styled-components";

import {
  getCountries,
  getCountryCallingCode
} from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en.json";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

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
const RegisterContainer = styled.div`
  border: 2px solid #40a9ff;
  padding: 20px;
  background-color: #f7f9ff;
  box-shadow: inset 0 0 6px -2px #000000;
  border-radius: 30px;
  background-color: white;
  width: 100%;
`;

const RegisterForm = props => {
  const [form] = Form.useForm();

  const onFinish = async values => {
    console.log("Received values of form: ", values);
    let data = {
      username: values.username,
      email: values.email,
      password: values.password,
      callingcode: !!values.callingcode ? parseInt(values.callingcode, 10) : 91,
      phone: parseInt(values.phone, 10),
      gender: values.Gender,
      age: parseInt(values.Age, 10)
    };
    const response = await props.register(data);
    if (!!response && response.status) {
      history.push("/");
    }
  };

  const prefixSelector = (
    <Form.Item name='callingcode' noStyle>
      <Select defaultValue='91' style={{ flex: 1, minWidth: "150px" }}>
        {getCountries().map(country => (
          <Option key={country} value={getCountryCallingCode(country)}>
            {en[country]} +{getCountryCallingCode(country)}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );

  return (
    <>
      {!props.user.registerLoading && props.user.registerSuccess && (
        <Alert
          message='Registered successfull!'
          closable={true}
          type='success'
        />
      )}
      {!props.user.registerLoading && props.user.registerError && (
        <Alert
          message='Error while registering!'
          closable={true}
          type='error'
        />
      )}
      <Container>
        <RegisterContainer>
          <Spin spinning={props.user.registerLoading}>
            <Form
              {...formItemLayout}
              form={form}
              name='register'
              onFinish={onFinish}
              scrollToFirstError>
              <Form.Item
                name='email'
                label='E-mail'
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!"
                  }
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                name='password'
                label='Password'
                rules={[
                  {
                    required: true,
                    message: "Please input your password!"
                  },
                  {
                    len: 6,
                    message: "Password must be of length 6!"
                  }
                ]}
                hasFeedback>
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!"
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    }
                  })
                ]}>
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='username'
                label={
                  <span>
                    Username&nbsp;
                    <Tooltip title='What do you want others to call you?'>
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                    whitespace: true
                  }
                ]}>
                <Input />
              </Form.Item>

              <Form.Item
                name='phone'
                label='Phone Number'
                rules={[
                  { required: true, message: "Please input your phone number!" }
                ]}>
                <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                name='Gender'
                label='Gender'
                rules={[
                  { required: true, message: "Please select your gender!" }
                ]}>
                <Select>
                  <Option value='Male'>Male</Option>
                  <Option value='Female'>Female</Option>
                  <Option value='Other'>Other</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name='Age'
                label='Age'
                rules={[{ required: true, message: "Please input your age!" }]}>
                <InputNumber min={0} />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit'>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </RegisterContainer>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  register: dispatch.user.register
});

export const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);
