/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import "antd/dist/antd.css";

import { Form, Input, Button } from "antd";

export const InlineForm = props => {
  const onFinish = async values => {
    props.onFinish(values)
  };

  return (
    <>
      <Form
        name='inline_form'
        layout='inline'
        initialValues={{ remember: true }}
        onFinish={onFinish}>
        <Form.Item
          name={props.name}
          rules={[
            {
              required: true,
              message: "Field is required!"
            }
          ]}>
          <Input placeholder={props.placeholder} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {props.buttonText}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
