import { SETPRODUCT } from "../type/type";
import { SETADMINFORMATION } from "../type/type";
import {SETLOGIN} from "../type/type";
import {SELECTEDADM} from "../type/type";
import {QUERY} from "../type/type";
export const setProductAction = (payload) => {
  return {
    type: SETPRODUCT,
    payload: payload,
  };
};

export const setAdmAction = (payload) => {
  return {
    type: SETADMINFORMATION,
    payload: payload,
  };
};

export const setLogin = (payload) => {
  return {
    type: SETLOGIN,
    payload: payload,
  };
};

export const selectedAdm = (payload) => {
  return {
    type: SELECTEDADM,
    payload: payload,
  };
};

export const queryAdm = (payload) => {
  return {
    type: QUERY,
    payload: payload,
  };
};