/* eslint-disable no-unused-vars */
import jwtDecode from "jwt-decode";
import { postApi, getApi, deleteApi, putApi } from "../helper/apiHelper";

export default {
  state: {
    surveys: null,
    surveysLoading: false,
    survey: null,
    surveyLoading: false,
    deleteSurveyLoading: false,
    editSurveyLoading: false,
    createSurveyLoading: false
  },

  /**
   * Reducers
   */
  reducers: {
    setGetUserSurveyLoading(state) {
      return {
        ...state,
        surveysLoading: true
      };
    },
    setGetUserSurvey(state, data) {
      return {
        ...state,
        surveysLoading: false,
        surveys: data
      };
    },
    setGetUserSurveyError(state) {
      return {
        ...state,
        surveysLoading: false,
        surveys: null
      };
    },
    setSurveyDetailLoading(state) {
      return {
        ...state,
        surveyLoading: true
      };
    },
    setSurveyDetail(state, data) {
      return {
        ...state,
        surveyLoading: false,
        survey: data
      };
    },
    setSurveyDetailError(state) {
      return {
        ...state,
        surveyLoading: false,
        survey: null
      };
    },
    setDeleteSurveyLoading(state) {
      return {
        ...state,
        deleteSurveyLoading: true
      };
    },
    unsetDeleteSurveyLoading(state) {
      return {
        ...state,
        deleteSurveyLoading: false
      };
    },
    setEditSurveyLoading(state) {
      return {
        ...state,
        editSurveyLoading: true
      };
    },
    unsetEditSurveyLoading(state) {
      return {
        ...state,
        editSurveyLoading: true
      };
    },
    setCreateSurveyLoading(state) {
      return {
        ...state,
        createSurveyLoading: true
      };
    },
    unsetCreateSurveyLoading(state) {
      return {
        ...state,
        createSurveyLoading: true
      };
    }
  },

  /**
   * Effects/Actions
   */
  effects: dispatch => ({
    /**
     * Updates async storage and auth store with given data (*only string values are stored)
     * @param {*} data
     */
    async getUserSurvey() {
      try {
        this.setGetUserSurveyLoading();
        const response = await getApi("/survey");
        if (!!response.status) {
          this.setGetUserSurvey(response.data);
          return response;
        } else {
          this.setGetUserSurveyError();
        }
      } catch (err) {
        this.setGetUserSurveyError();
      }
    },
    async getSurvey(id) {
      try {
        this.setSurveyDetailLoading();
        const response = await getApi(`/survey/${id}`);
        if (!!response.status) {
          this.setSurveyDetail(response.data);
          return response;
        } else {
          this.setSurveyDetailError();
        }
      } catch (err) {
        this.setSurveyDetailError();
      }
    },
    async deleteSurvey(id) {
      try {
        this.setDeleteSurveyLoading();
        const response = await deleteApi(`/survey/${id}`);
        if (!!response.status) {
          this.unsetDeleteSurveyLoading();
          return response;
        } else {
          this.unsetDeleteSurveyLoading();
        }
      } catch (err) {
        this.unsetDeleteSurveyLoading();
      }
    },
    async createSurvey(data) {
      try {
        this.setCreateSurveyLoading();
        const response = await postApi(`/survey/create`, data, {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (!!response.status) {
          this.unsetCreateSurveyLoading();
          return response;
        } else {
          this.unsetCreateSurveyLoading();
        }
      } catch (err) {
        this.unsetCreateSurveyLoading();
      }
    },
    async editSurvey({ id, data }) {
      try {
        this.setEditSurveyLoading();
        const response = await putApi(`/survey/${id}`, data, {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (!!response.status) {
          this.unsetEditSurveyLoading();
          return response;
        } else {
          this.unsetEditSurveyLoading();
        }
      } catch (err) {
        this.unsetEditSurveyLoading();
      }
    }
  })
};
