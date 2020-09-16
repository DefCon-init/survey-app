import React from "react";
import "antd/dist/antd.css";
import { Skeleton, Card, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const { Meta } = Card;

export const CardComponent = props => {
  let actions = [];
  const { showResult } = props;
  const { title, description, loading, value, id } = props.survey;
  if (!!showResult) {
    actions.push(<Button type="text">Get all {value} results</Button>);
  } else {
    actions = [<p>Result count {value}</p>, <EditOutlined key='edit' />];
  }
  return (
    <div key={id} style={{ margin: 16 }}>
      <Card style={{ width: 300 }} actions={actions}>
        <Skeleton loading={loading} active>
          <Meta title={title} description={description} />
        </Skeleton>
      </Card>
    </div>
  );
};
