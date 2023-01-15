import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  emailadded:  false
};



const commonReducer = createSlice({
  name: 'landingpage',
  initialState: defaultState,
  reducers: {
     
    emailadded: (state, action) => {
      return {
        ...state,
        emailadded: true
      }
    },

    addemail: (state, action) => { },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
