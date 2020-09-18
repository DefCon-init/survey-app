/* eslint-disable no-unused-vars */
import jwtDecode from "jwt-decode";
import { postApi } from "../helper/apiHelper";

export default {
  state: {
    user: null,
    userLoading: false,
    userSuccess: false,
    userError: false
  },

  /**
   * Reducers
   */
  reducers: {
    setData(state, payload) {
      return {
        ...state,
        ...payload
      };
    },
    resetAuth(state) {
      return {
        ...state
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
    async login(data) {
      try {
        this.setData({ userError: false, userLoading: true, userSuccess: false });
        const response = await postApi("/auth/login", data);
        console.log(response)
        if (!!response.status) {
          localStorage.setItem('token', response.data.token)
          console.log(response.status, response.data.token)
          this.setData({ userError: false, userLoading: false, userSuccess: true, user: response.data });
          return response;
        } else {
          this.setData({ userError: true, userLoading: false, userSuccess: false });
        }
      } catch (err) {
        this.setData({ userError: true, userLoading: false, userSuccess: false });
      }
    },
    async logout() {
      await localStorage.removeItem("token");
      this.resetAuth()
    },
    async register(data) {
      try {
        const response = await postApi("/auth/register", data);
        return response;
      } catch (err) {}
    }
  })
};
