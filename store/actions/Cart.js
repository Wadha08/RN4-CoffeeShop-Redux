import * as actionTypes from "./types";

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: item
  };
};

export const checkout = () => {
  return {
    type: actionTypes.CHECK_OUT
  };
};
