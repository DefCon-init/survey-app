/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
// import { history } from "../../store";

import "antd/dist/antd.css";
import styled from "styled-components";

import { Table, Space, Spin, Divider } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Header } from "../../components/Header/Header";

const Container = styled.div`
  margin: 20px;
`;

const ResultListingComponent = props => {
  let { surveyid } = useParams();

  useEffect(() => {
    props.getSurveyResult(surveyid);
  }, []);

  const onDelete = record => {
    props.deleteResult(record._id).then(res => props.getSurveyResult(surveyid));
  };

  const columns = [
    {
      title: "Surveyid",
      dataIndex: "survey",
      key: "survey"
    },
    {
      title: "Resultid",
      dataIndex: "_id",
      key: "_id"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size='middle'>
          <EditOutlined />
          <DeleteOutlined onClick={() => onDelete(record)} />
        </Space>
      )
    }
  ];

  return (
    <>
      <Header />
      <Divider style={{ margin: 16 }} orientation='left'>
        Results for {surveyid}
      </Divider>
      <Container>
        <Spin spinning={props.result.resultsLoading}>
          <Table columns={columns} dataSource={props.result.results} />
        </Spin>
      </Container>
    </>
  );
};

const mapStateToProps = state => ({
  result: state.result
});

const mapDispatchToProps = dispatch => ({
  getSurveyResult: dispatch.result.getSurveyResult,
  deleteResult: dispatch.result.deleteResult
});

export const ResultListing = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultListingComponent);
