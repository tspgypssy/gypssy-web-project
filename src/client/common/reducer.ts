import { createSlice } from "@reduxjs/toolkit";


const defaultState = {
  redirectToLoginPage:false,
  chainSelected:null,
  connected:false,
  
};

const commonReducer = createSlice({
  name: 'common',
  initialState: defaultState,
  reducers: {
    updateSuccessMessage:(state, action) => {
      return {
        ...state,
        toastrSuccessMessage: action.payload
      }
    },
    updateFailureMessage:(state, action) => {
      return {
        ...state,
        toastrFailureMessage: action.payload
      }
    },
    redirectToLoginPage:(state, action) => {
      state.redirectToLoginPage = true;
    },
    updateChainSelected: (state, action) => {
      if(action.payload)
         state.chainSelected = action.payload.chainSelected; 
    }, 
    updateConnected: (state, action) => {
      if(action.payload)
         state.connected = action.payload.connected;    
    }, 
    resetAllState: (state, action) => { },
  },
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
