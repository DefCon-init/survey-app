import React from "react";
import { history } from "../../store";
import { Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { Header } from "../../components/Header/Header";
import { Listing } from "../../components/Listing/Listing";
const surveys = [
  {
    id: 1,
    loading: false,
    title: "Survey 1",
    value: 20,
    description: "Survey 1 description"
  },
  {
    id: 2,
    loading: false,
    title: "Survey 1",
    value: 20,
    description: "Survey 1 description"
  },
  {
    id: 3,
    loading: false,
    title: "Survey 1",
    value: 20,
    description: "Survey 1 description"
  },
  {
    id: 4,
    loading: false,
    title: "Survey 1",
    value: 20,
    description: "Survey 1 description"
  },
  {
    id: 5,
    loading: false,
    title: "Survey 1",
    value: 20,
    description: "Survey 1 description"
  },
  {
    id: 6,
    loading: false,
    title: "Survey 1",
    value: 20,
    description: "Survey 1 description"
  }
];
export const Home = () => {
  const redirectToAddSurvey = path => {
    console.log("hellpo");
    return history.push("/addSurvey");
  };
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
        All Survey
      </Divider>
      <Listing surveys={surveys} />
    </>
  );
};
