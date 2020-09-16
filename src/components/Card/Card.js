import React, { useState } from "react";
import { history } from "../../store";
import "antd/dist/antd.css";
import { Skeleton, Card, Button, Modal } from "antd";
import {
  ShareAltOutlined,
  EditOutlined,
  DeleteOutlined
} from "@ant-design/icons";

const { Meta } = Card;

export const CardComponent = props => {
  const [visible, setVisible] = useState(false);
  let actions = [];
  const { showResult } = props;
  const { title, description, loading, value, id } = props.survey;
  const handleOk = event => {
    setVisible(false);
  };

  const handleCancel = event => {
    setVisible(false);
  };
  if (!!showResult) {
    actions.push(<Button type='text'>Get all {value} results</Button>);
  } else {
    actions = [
      <ShareAltOutlined
        key='share'
        onClick={() => setVisible(true)}
      />,
      <EditOutlined
        key='edit'
        onClick={() => history.push(`/editSurvey/${id}`)}
      />,
      <DeleteOutlined key='delete' />
    ];
  }
  console.log('visible', visible)
  return (
    <>
      <Modal
        title='Share'
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Link of survey - <a href={`http://localhost:3000/getSurvey/${id}`}>{`http://localhost:3000/getSurvey/${id}`}</a></p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <div key={id} style={{ margin: 16 }}>
        <Card style={{ width: 300 }} actions={actions}>
          <Skeleton loading={loading} active>
            <Meta title={title} description={description} />
          </Skeleton>
        </Card>
      </div>
    </>
  );
};
