import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  tripDetails:{},
  imageList:[],
  tripReviews:[]
};



const commonReducer = createSlice({
  name: 'tripDetail',
  initialState: defaultState,
  reducers: {
     
    loadedTripDetails: (state, action) => {
      
      state.tripDetails = action.payload.tripDetails;
       let img = [];
       if(action.payload.tripDetails?.itinerary && action.payload.tripDetails?.itinerary?.length>0)
       {
          for(var i=0;i<action.payload.tripDetails.itinerary.length;i++)
          {
            img.push(action.payload.tripDetails.itinerary[i].image);
          }
          state.imageList = img;
      }
      
    },
    loadedTripReviews: (state, action) => {
      state.tripReviews = action.payload.tripReviews;
    },
    getTripDetails: (state, action) => { },
    getTripReviews: (state, action) => { },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
