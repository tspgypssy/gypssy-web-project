import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
 pageTypeSelected:"create-trip",
 titleName:"",
 titleDesc:"",
 coverImage:null,
 coverImageSrc:null,
 groupType:"All",
 groupTrip:"Mixed"
};



const commonReducer = createSlice({
  name: 'createtrip',
  initialState: defaultState,
  reducers: {
    updateCreateTripPageSelected: (state, action) => {
      return {
        ...state,
        pageTypeSelected: action.payload.pageTypeSelected  
      }
    },
    updateGroupTypeSelected: (state, action) => {
      return {
        ...state,
        groupType: action.payload.groupType  
      }
    },
    updateGroupTripSelected: (state, action) => {
      return {
        ...state,
        groupTrip: action.payload.groupTrip  
      }
    },
    updateTitleNameAndDesc: (state, action) => {
      return {
        ...state,
        titleName: action.payload.titleName,
        titleDesc: action.payload.titleDesc  
      }
    },
    updateSelectedImage: (state, action) => {
      return {
        ...state,
        coverImageSrc: action.payload.coverImageSrc,
        coverImage: action.payload.coverImage  
      }
    },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
