import actionTypes from '../actions/actionTypes';

const initialState = {
  isFetching: false,
  error: null,
  user:null
};

export default function (state = initialState, action){
  switch(action.type){
    case actionTypes.createUserRequest:{
      return {
        ...state,
        isFetching:true,
        error:null
      };
    }
    case actionTypes.createUserSuccess:{
      const {payload:{data}}=action;
      return {
        ...state,
        isFetching:false,
        user: data
      }
    }
    case actionTypes.createUserError:{
      const {payload:{error}}=action;
      return{
        ...state,
        isFetching:false,
        error
      }
    }
    default:
      return state;
  }
}