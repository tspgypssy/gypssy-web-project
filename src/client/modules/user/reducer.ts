import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  user:null,
  tokenRes:null
};



const commonReducer = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
     
    updateUserDetails: (state, action) => {
      return {
        ...state,
        user: action.payload?.result?.user,
        tokenRes:action.payload?.result?._tokenResponse
      }
    },
  

    
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
