import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
 
   loading: false,
   data:[],
   endReached:false,
   pageParam:0,
   userDetails:{}
};



const commonReducer = createSlice({
  name: 'peoplefeed',
  initialState: defaultState,
  reducers: {
    purgePeopleLoadedData:(state, action) => {
      return {
        ...state,
        loading: false,
        data:[],
        endReached:false,
        pageParam:0,
        //  goToPeoplePage:true
      }
    },
    
    updatePeopleReloadStatus: (state, action) => {
      return {
        ...state,
        reloadPage: action.payload.reloadPage
      }
    },

    updatePersonDetails: (state, action) => {
      return {
        ...state,
        userDetails: action.payload.userDetails
      }
    },
    loadingPeopleFeedConnection: (state, action) => {
      return {
        ...state,
        loading: action.payload.loading
      }
    },
    
    loadedPeopleFeedResponse: (state, action) => {
     
      return {
        ...state,
        loading:false,
        data :[...state.data, ...action.payload.feed],
        pageParam:state.pageParam+20    
      }
     
    
     
    },
    
   
    endPeopleReached: (state, action) => {
      return {
        ...state,
        endReached: action.payload.endReached
      
      }
    },
    updatePeoplePageParam: (state, action) => {
      return {
        ...state,
        pageParam: action.payload.pageParam
      
      }
    },
    userPeopleError: (state, action) => {
      return {
        ...state,
        loadingPeopleConnection: false,
        error: true,
        errorMsg: "Something went wrong"
      }
    },
    resetPeopleFeedState:(state, action) => {
      return { ...defaultState }
    },
   
    // saga functions - DO NOT ADD CODE
    getPeoplePageFeed: (state, action) => { },
    updatePeoplePageFeed: (state, action) => { },
    getUserDetails: (state, action) => { },
  },
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
