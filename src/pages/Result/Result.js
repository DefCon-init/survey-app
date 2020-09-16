import React from "react";
import { history } from "../../store";
import { Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { Header } from "../../components/Header/Header";
import { Listing } from "../../components/Listing/Listing";

export const Result = () => {
  const redirectToAddSurvey  = (path) => {
    return history.push('/addSurvey')
  }
  return (
    <>
      <Header isLoggedIn={true} />
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
        Surveys with Result
      </Divider>
      <Listing isResult={true} />
    </>
  );
};
