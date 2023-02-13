import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
   accessToken:  "",
   phoneNumber:"",
   pageSel:"create-profile",
   image:null,
  imageSrc:null,
  accessTokenExpired:false
};



const commonReducer = createSlice({
  name: 'login',
  initialState: defaultState,
  reducers: {
     
    updateSelectedImagePage: (state, action) => {
      return {
        ...state,
        image: action.payload.image,
        imageSrc: action.payload.imageSrc
      }
    },

    updatePageSel: (state, action) => {
      return {
        ...state,
        pageSel: action.payload?.pageSel
      }
    },

    updateAccessTokenExpire: (state, action) => {
      return {
        ...state,
        accessTokenExpired: action.payload?.accessTokenExpired
      }
    },

    updatePhoneNumber: (state, action) => {
      return {
        ...state,
        phoneNumber: action.payload?.phoneNumber
      }
    },

    updateAccessToken: (state, action) => { },
    createProfile: (state, action) => { },
  },
  
});

export default commonReducer.reducer;

export const actions = commonReducer.actions;
