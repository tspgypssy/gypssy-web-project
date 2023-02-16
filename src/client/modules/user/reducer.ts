import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  user:null,
  tokenRes:null,
  userDetails:{},
  trips:[]
};



const commonReducer = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    getUserDetails: (state, action) => {
      return {
        ...state,
        userDetails:action.payload?.userDetails
      }
    }, 
    loadedTrips: (state, action) => {
      return {
        ...state,
        trips:action.payload?.trips
      }
    }, 
    updateUserDetails: (state, action) => {
      return {
        ...state,
        user: action.payload?.result?.user,
        tokenRes:action.payload?.result?._tokenResponse
      }
    },
  
    getAppUserDetails: (state, action) => { },
    getUpcomingTravellerList: (state, action) => { },
    getCompletedTravellerList: (state, action) => { },
    
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
