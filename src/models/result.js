/* eslint-disable no-unused-vars */
import jwtDecode from "jwt-decode";
import { postApi, getApi, deleteApi, putApi } from "../helper/apiHelper";

export default {
  state: {
    results: null,
    resultsLoading: false,
    result: null,
    resultLoading: false,
    deleteResultLoading: false,
    editResultLoading: false,
    createResultLoading: false
  },

  /**
   * Reducers
   */
  reducers: {
    setGetSurveyResultLoading(state) {
      return {
        ...state,
        resultsLoading: true
      };
    },
    setGetSurveyResult(state, data) {
      return {
        ...state,
        resultsLoading: false,
        results: data
      };
    },
    setGetSurveyResultError(state) {
      return {
        ...state,
        resultsLoading: false,
        results: null
      };
    },
    setResultDetailLoading(state) {
      return {
        ...state,
        resultLoading: true
      };
    },
    setResultDetail(state, data) {
      return {
        ...state,
        resultLoading: false,
        result: data
      };
    },
    setResultDetailError(state) {
      return {
        ...state,
        resultLoading: false,
        result: null
      };
    },
    setDeleteResultLoading(state) {
      return {
        ...state,
        deleteResultLoading: true
      };
    },
    unsetDeleteResultLoading(state) {
      return {
        ...state,
        deleteResultLoading: false
      };
    },
    setEditResultLoading(state) {
      return {
        ...state,
        editResultLoading: true
      };
    },
    unsetEditResultLoading(state) {
      return {
        ...state,
        editResultLoading: true
      };
    },
    setCreateResultLoading(state) {
      return {
        ...state,
        createResultLoading: true
      };
    },
    unsetCreateResultLoading(state) {
      return {
        ...state,
        createResultLoading: true
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
    async getSurveyResult(surveyid) {
      try {
        this.setGetSurveyResultLoading();
        const response = await getApi(`/result/survey/${surveyid}`);
        if (!!response.status) {
          this.setGetSurveyResult(response.data);
          return response;
        } else {
          this.setGetUserSurveyError();
        }
      } catch (err) {
        this.setGetSurveyResultError();
      }
    },
    async getResult(id) {
      try {
        this.setResultDetailLoading();
        const response = await getApi(`/result/${id}`);
        if (!!response.status) {
          this.setResultDetail(response.data);
          return response;
        } else {
          this.setResultDetailError();
        }
      } catch (err) {
        this.setResultDetailError();
      }
    },
    async deleteResult(id) {
      try {
        this.setDeleteResultLoading();
        const response = await deleteApi(`/result/${id}`);
        if (!!response.status) {
          this.unsetDeleteResultLoading();
          return response;
        } else {
          this.unsetDeleteResultLoading();
        }
      } catch (err) {
        this.unsetDeleteResultLoading();
      }
    },
    async editResult({ resultid, data }) {
      try {
        this.setEditResultLoading();
        const response = await putApi(`/result/${resultid}`, data, {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": 'Bearer ' + localStorage.getItem('token') 
          }
        });
        if (!!response.status) {
          this.unsetEditResultLoading();
          return response;
        } else {
          this.unsetEditResultLoading();
        }
      } catch (err) {
        this.unsetEditResultLoading();
      }
    },
    async createResult(data) {
      try {
        this.setCreateResultLoading();
        const response = await postApi(`/result/create`, data, {
          headers: { 
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": 'Bearer ' + localStorage.getItem('token')
          }
        });
        if (!!response.status) {
          this.unsetCreateResultLoading();
          return response;
        } else {
          this.unsetCreateResultLoading();
        }
      } catch (err) {
        this.unsetCreateResultLoading();
      }
    },
  })
};
