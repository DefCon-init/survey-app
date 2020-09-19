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

import { InlineForm } from "../InlineForm/InlineForm";

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
    history.push(`editSurvey/${_id}`)
  }
  
  const deleteClick = async () => {
    const response = await props.deleteSurvey(_id);
    if (!!response.status) {
      props.getUserSurvey()
    }
  }

  const getResultClick = async (id) => {
    history.push(`/results/${id}`)
  }

  const sendSms = async (values) => {
    let data = {
      surveylink: `http://localhost:3000/getSurvey/${_id}`,
      phonecsv: values.phonecsv
    }
    const response = await props.sendSms(data)
    if (response.status) {
      handleCancel()
    }
  }

  const sendEmail = async (values) => {
    let mail = document.createElement("a");
    mail.href = `mailto:${values.emailcsv}`;
    mail.click();
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
        <div style={{marginTop: 15, marginBottom: 15, marginRight: 15}}><InlineForm name="phonecsv" placeholder="Please enter phone number" buttonText="Send Sms" onFinish={sendSms} /></div>
        <div style={{marginTop: 15, marginBottom: 15, marginRight: 15}}><InlineForm name="emailcsv" placeholder="Please enter your email" buttonText="Send Email" onFinish={sendEmail} /></div>
      </Modal>
      <div key={_id} style={{ margin: 16 }}>
        <Card style={{ width: 300 }} actions={actions}>
          <Skeleton loading={loading} active>
            <Meta title={_id} description={<><h4>Title - {survey.title}</h4><Button style={{width: '100%'}} onClick={() => getResultClick(_id)} >Get all results</Button></>} />
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
  deleteSurvey: dispatch.survey.deleteSurvey,
  sendSms: dispatch.survey.sendSms
});

export const CardComponent = connect(mapStateToProps, mapDispatchToProps)(CardComponentRender);
