import React from "react";
import { CardComponent } from "../Card/Card";
import { Skeleton } from "antd";

export const Listing = props => {
  const { loading, surveys, isResult } = props;
  return (
    <>
      {!loading && (
        <div
          style={{
            display: "flex",
            flex: 1,
            flexWrap: "wrap",
            flexDirection: "row"
          }}>
          {!!surveys &&
            surveys.length > 0 &&
            surveys.map(survey => (
              <CardComponent survey={survey} showResult={!!isResult} />
            ))}
        </div>
      )}
      {!loading && ((!!surveys && surveys.length === 0) || !surveys) && (
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            fontSize: 20,
            margin: 16
          }}>
          <p>
            No survey found. Please click on <strong>New Survey</strong> button
            to add a survey
          </p>
        </div>
      )}
      <div style={{ margin: 16 }}>
        <Skeleton loading={loading} active></Skeleton>
      </div>
    </>
  );
};
