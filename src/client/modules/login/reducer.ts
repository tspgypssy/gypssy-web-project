import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
   accessToken:  ""
};



const commonReducer = createSlice({
  name: 'login',
  initialState: defaultState,
  reducers: {
     
    loadedVerfiedUser: (state, action) => {
      return {
        ...state,
        accessToken: action.payload?.verfiyUserResponse?.accessToken
      }
    },

    adminLogin: (state, action) => { },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
