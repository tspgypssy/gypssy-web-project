

import React, { useCallback, useRef } from 'react'


export const InnerViewTripDetails = () => {

  return (
   
    <div className=" ">
         <p className="text-xl font-semibold">Trip details</p>
         <div className="flex items-top mt-6 w-full">
              <img className="h-24 w-24  rounded-lg" src="/images/dummy-trip.png"></img>
              <div className="ml-8 w-full">
                 <p className="text-medium opacity-60 text-xs uppercase">New Year in Europe</p>
                 <p className="text-xl font-bold mt-1">Azerbaijan</p>
                 <div className="flex items-center mt-3">
                    <p className="font-bol ">₹ 1,83,000</p>
                    <p className="underline text-sm font-medium opacity-60 ml-1">₹ 1,99,999</p>
                 </div>
                 <div className="flex items-center mt-3">
                    <div>
                       <p className="uppercase text-xs font-semibold  opacity-60">Trip type</p>
                       <p  className="mt-2 text-sm font-medium px-4 py-2 bg-super-lighter-grey rounded">All women’s trip</p>
                    </div>

                    <div className="ml-6">
                       <p className="uppercase text-xs font-semibold  opacity-60">Age</p>
                       <p  className="mt-2 text-sm font-medium px-4 py-2 bg-super-lighter-grey rounded">18+</p>
                    </div>
                 </div>

                 <div className="w-full flex items-center border-t border-super-lighter-grey mt-3 pt-3">
                      <div className="mr-auto">
                            <p className="text-xl font-semibold">25 Dec’22</p>
                            <p className="text-xs font-semibold ">Sunday</p>
                      </div>

                      <div>
                      <p className="text-xs font-semibold opacity-60 bg-super-bg-light-white border border-super-lighter-grey rounded-[100px] px-3 py-2">8 Days trip</p>
                      </div>

                      <div className="ml-auto">
                            <p className="text-xl font-semibold">1 Jan’23</p>
                            <p className="text-xs font-semibold ">Sunday</p>
                      </div>
                 </div>
              </div>
         </div>
    </div>
   
  );
};
