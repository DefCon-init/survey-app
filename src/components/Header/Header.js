/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { history } from "../../store";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

export const Header = props => {
  let extra = [];
  const { title = "Survey App", subTitle = "", isLoggedIn, onBack } = props;
  if (!!isLoggedIn) {
    extra = [
      <Button key='3' onClick={() => history.push("/home")} type='default'>
        Home
      </Button>,
      <Button key='2' onClick={() => history.push("/results")} type='default'>
        Results
      </Button>,
      <Button key='1' type='primary'>
        Logout
      </Button>
    ];
  }
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={onBack}
        title={title}
        subTitle={subTitle}
        extra={extra}
      />
    </>
  );
};
