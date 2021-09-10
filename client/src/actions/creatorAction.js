import actionTypes from "./actionTypes";


export const signUpRequest = (data) => ({
  type: actionTypes.signUpRequest,
  payload: { data },
});

export const signUpSuccess = (data) => ({
  type: actionTypes.signUpSuccess,
  payload: { data },
})

export const signUpError = (error) => ({
  type: actionTypes.signUpError,
  payload: { error },
});
