import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
   usersList:[],
   reload:false
};



const commonReducer = createSlice({
  name: 'dashboard',
  initialState: defaultState,
  reducers: {
     
    loadResultusers: (state, action) => {

      return {
        ...state,
        usersList: action.payload.verfiyUserResponse
      }
    },
    reloadResult: (state, action) => {
      return {
        ...state,
        reload: action.payload.reload
      
      }
    },

    loadUsers: (state, action) => { },
    updateStatus: (state, action) => { }, 
    loadLinkedinUrls: (state, action) => { },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
