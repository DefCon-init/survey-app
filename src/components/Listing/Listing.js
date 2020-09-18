import React from "react";

import { Skeleton } from "antd";
import styled from "styled-components";

import { CardComponent } from "../Card/Card";

const Container = styled.div`
display: flex;
flex: 1 1 0%;
flex-flow: row wrap;
`;

const NoSurveyContainer = styled.div`
display: flex;
flex: 1 1 0%;
justify-content: center;
font-size: 20px;
margin: 16px;
`;

export const Listing = props => {
  const { loading, surveys, isResult } = props;

  return (
    <>
      {!loading && (
        <Container>
          {!!surveys && surveys.length > 0 && surveys.map(survey => <CardComponent survey={survey} showResult={!!isResult} />)}
        </Container>
      )}
      {!loading && ((!!surveys && surveys.length === 0) || !surveys) && (
        <NoSurveyContainer>
          <p>
            No <span>{!!isResult ? 'results' : 'surveys'}</span> found. Please click on <strong>New Survey</strong> button
            to add a survey
          </p>
        </NoSurveyContainer>
      )}
      <div style={{ margin: 16 }}>
        <Skeleton loading={loading} active></Skeleton>
      </div>
    </>
  );
};