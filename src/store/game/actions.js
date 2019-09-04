export const ACTION_CHANGE_LEVEL = "ACTION_CHANGE_LEVEL";
export const ACTION_SET_COMPONENTS = "ACTION_SET_COMPONENTS";

export const setLevel = level => ({
  type: ACTION_CHANGE_LEVEL,
  payload: level
});

export const setComponents = components => ({
  type: ACTION_SET_COMPONENTS,
  payload: components
});
