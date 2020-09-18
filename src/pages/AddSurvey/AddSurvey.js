import React from "react";

import { Header } from "../../components/Header/Header";
import { Editor } from "../../components/DynamicForm/Editor";

export const AddSurvey = () => {
  return (
    <>
      <Header title='Add Survey' onBack={() => window.history.back()} />
      <div style={{margin: 16}}>
        <Editor />
      </div>
    </>
  );
};
