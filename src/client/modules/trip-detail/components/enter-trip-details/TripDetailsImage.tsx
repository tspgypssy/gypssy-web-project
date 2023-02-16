

import { RootState } from 'client/shell/store';
import { Line } from 'icons/Line';
import { useRouter } from 'next/router';
import React, { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux';



export const TripDetailsImage = () => {

  const tripDetail =useSelector((state: RootState) => state.tripDetail.tripDetails);
  const imageList = useSelector((state: RootState) => state.tripDetail.imageList);
  const month = ["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const getCal =(date)=>
  {
    return date.getDate() +" "+month[date.getMonth()]+"'"+date.getFullYear()
  }
  const router = useRouter();

  const getFromToDate =() =>
  {
    if(tripDetail?.fromDate && tripDetail?.toDate)
    {
      const fromDate = new Date(tripDetail?.fromDate);
      const toDate = new Date(tripDetail?.toDate);
       return getCal(fromDate)+" - "+getCal(toDate); 
    }
   
    return ""
  }

  const openImagePreview =()=>
  {
    router.push({
      query: {
        ...router.query,
        modal: "image-preview",
       
      },
    }, undefined, {
      scroll: false,
      shallow: true,
    }); 
  }

  return (
   <>  
   {imageList.length>0 &&  <div className="grid grid-cols-2 gap-4 h-[400px]">
          <div className="mt-8 relative">
             <img className="w-full h-[400px] object-cover rounded-tl-lg rounded-bl-lg" src={imageList[0]} ></img>
             <div className="flex items-center absolute bottom-5  bg-black text-white py-3 px-6 rounded-tr-lg rounded-br-lg">
                 <p>{tripDetail?.numberOfDays} Days trip</p>
                 <Line className="ml-2"></Line>
                 <p>{getFromToDate()}</p>
             </div>
          </div>   
          <div onClick={openImagePreview} className="mt-8 grid grid-cols-2 gap-4 ">
            {imageList.length>=2 && <img className="cursor-pointer w-full h-[192px] object-cover  " src={imageList[1]}></img> }
            {imageList.length>=3 && <img className="cursor-pointer w-full h-[192px] object-cover rounded-tr-lg " src={imageList[2]}></img> }
            {imageList.length>=4 &&  <img className="cursor-pointer w-full h-[192px] object-cover " src={imageList[3]}></img>}
             <div className="relative">
              {imageList.length>=5 && <img className="cursor-pointer w-full h-[192px] object-cover rounded-br-lg " src={imageList[4]}></img> }
              {imageList.length>5 && <p className="cursor-pointer absolute right-5 bottom-5 py-2 px-3 bg-white rounded-lg">{imageList.length -5 }+ photos</p>}
            </div>
          </div>
    </div>
  }
    </>

   
  );
};
