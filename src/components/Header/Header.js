/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { connect } from "react-redux";
import { history } from "../../store";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";

const HeaderComponent = props => {
  if (!localStorage.token) {
    history.push("/");
  }
  let extra = [];
  const { title = "Survey App", subTitle = "", onBack } = props;
  const logout = () => {
    props.logout().then(res => history.push("/"));
    return true;
  };
  if (!!localStorage.token) {
    extra = [
      <Button key='3' onClick={() => history.push("/home")} type='default'>
        Home
      </Button>,
      <Button key='2' onClick={() => history.push("/fetchResults")} type='default'>
        Results
      </Button>,
      <Button key='1' type='primary' onClick={logout}>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logout: dispatch.user.logout
});

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
