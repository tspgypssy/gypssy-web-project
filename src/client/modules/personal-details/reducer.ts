import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  years:  [1991,1992,1993]
};



const commonReducer = createSlice({
  name: 'personaldetails',
  initialState: defaultState,
  reducers: {
     
   

  
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
