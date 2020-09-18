/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { history } from "../../store";

import "./Editor.css";
import * as SurveyKo from "survey-knockout";
import * as SurveyJSCreator from "survey-creator";
import "survey-creator/survey-creator.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import "pretty-checkbox/dist/pretty-checkbox.css";

import * as widgets from "surveyjs-widgets";

SurveyJSCreator.StylesManager.applyTheme("default");

widgets.prettycheckbox(SurveyKo);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo, $);
widgets.jqueryuidatepicker(SurveyKo, $);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.sortablejs(SurveyKo);
widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo, $);
widgets.bootstrapslider(SurveyKo);

export const EditorForm = props => {
  let surveyCreator;
  const saveMySurvey = async () => {
    let data = new URLSearchParams();
    data.append("json", surveyCreator.text);
    let response;
    if (!!props.isEdit) {
      const { id } = props;
      response = await props.editSurvey({ id, data });
      if (!!response && !!response.status) {
        props.getSurvey(id);
        props.getUserSurvey();
        history.push("/home");
      }
    } else {
      response = await props.createSurvey(data);
      if (!!response && !!response.status) {
        props.getUserSurvey();
        history.push("/home");
      }
    }
  };
  useEffect(() => {
    const { json } = props;
    let options = { showEmbededSurveyTab: false };
    surveyCreator = new SurveyJSCreator.SurveyCreator(null, options);
    surveyCreator.saveSurveyFunc = saveMySurvey;
    surveyCreator.render("surveyCreatorContainer");
    surveyCreator.text = JSON.stringify(json);
  }, [props.json]);
  return (
    <>
      <div id='surveyCreatorContainer' />
    </>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getSurvey: dispatch.survey.getSurvey,
  getUserSurvey: dispatch.survey.getUserSurvey,
  editSurvey: dispatch.survey.editSurvey,
  createSurvey: dispatch.survey.createSurvey
});

export const Editor = connect(mapStateToProps, mapDispatchToProps)(EditorForm);
