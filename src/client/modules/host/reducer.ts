import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  hostDetails:{},
   trips:{},
   hostReviews:[]
};



const commonReducer = createSlice({
  name: 'hostDetails',
  initialState: defaultState,
  reducers: {
     
    loadedHostDetails: (state, action) => {
      return {
        ...state,
        hostDetails: action.payload?.hostDetails
      }
    },

    loadedUpcomingHostTrips: (state, action) => {
      return {
        ...state,
        trips: action.payload?.hostTrips
      }
    },
    loadedHostReviews: (state, action) => {
      return {
        ...state,
        hostReviews: action.payload?.hostReviews
      }
    },
    
    getHostDetails: (state, action) => { },
    getUpcomingTrips: (state, action) => { },
    getCompletedTrips: (state, action) => { },
    getHostReviews: (state, action) => { },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
