import React, { useState } from "react";
import { connect } from "react-redux";
import { history } from "../../store";

import "antd/dist/antd.css";
import { Skeleton, Card, Button, Modal } from "antd";
import {
  ShareAltOutlined,
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const CardComponentRender = props => {
  const [visible, setVisible] = useState(false);
  let actions = [];
  const { showResult } = props;
  const { json, loading, value, _id } = props.survey;
  let survey
  try {
    survey = JSON.parse(json)
  } catch (error) {
    console.log('Error', error)
  }
  const handleOk = event => {
    setVisible(false);
  };

  const handleCancel = event => {
    setVisible(false);
  };

  const editClick = () => {
    props.getSurvey(_id);
    history.push(`editSurvey/${_id}`)
  }
  
  const deleteClick = async () => {
    const response = await props.deleteSurvey(_id);
    if (!!response.status) {
      props.getUserSurvey()
    }
  }

  if (!!showResult) {
    actions.push(<Button type='text'>Get all {value} results</Button>);
  } else {
    actions = [
      <ShareAltOutlined key='share' onClick={() => setVisible(true)} />,
      <EditOutlined
        key='edit'
        onClick={editClick}
      />,
      <DeleteOutlined key='delete' onClick={deleteClick} />
    ];
  }
  return (
    <div key={_id}>
      <Modal
        title='Share'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>
          Link of survey -{" "} <a href={`http://localhost:3000/getSurvey/${_id}`}>{`http://localhost:3000/getSurvey/${_id}`}</a>
        </p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div key={_id} style={{ margin: 16 }}>
        <Card style={{ width: 300 }} actions={actions}>
          <Skeleton loading={loading} active>
            <Meta title={_id} description={`Title - ${survey.title}`} />
          </Skeleton>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getUserSurvey: dispatch.survey.getUserSurvey,
  getSurvey: dispatch.survey.getSurvey,
  deleteSurvey: dispatch.survey.deleteSurvey
});

export const CardComponent = connect(mapStateToProps, mapDispatchToProps)(CardComponentRender);
