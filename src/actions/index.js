export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const SAVE_MEMO = "SAVE_MEMO";
export const SEND_MEMO = "SEND_MEMO";
export const CLEAR_MEMO = "CLEAR_MEMO";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operator) => {
  return { type: CHANGE_OPERATION, payload: operator };
};

export const saveMemo = () => {
  return { type: SAVE_MEMO };
};

export const sendMemo = () => {
  return { type: SEND_MEMO };
};

export const clearMemo = () => {
  return { type: CLEAR_MEMO };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
