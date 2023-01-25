


import { PlusIcon } from 'icons/PlusIcon';
import { RupeeIcon } from 'icons/RupeeIcon';
import React, { useCallback, useRef, useState } from 'react'


export const ExpenseSection = () => {

    
  return (
   <div className="w-full">
   <p className="my-6 font-semibold text-lg">Expense</p>

   <div className="grid grid-cols-2 w-1/2">
         <div className="bg-super-bg-light-white rounded-lg p-5" >
               <p className="opacity-60 text-sm font-medium">Total expenses</p>
               <p className=" text-xl font-bold">₹ 5,20,000 </p>
         </div>

         <div className="ml-3 text-center px-8 py-5 border-2 border-black rounded-lg">
                  <PlusIcon className="mx-auto"></PlusIcon>
                  <p>Add expences</p>
         </div>
   </div>

   <div className="grid grid-cols-2 w-full gap-14 mt-6">
      
      <div className="flex items-top border-b border-super-lighter-grey border-dashed pb-7">
            <RupeeIcon></RupeeIcon>
            <div className="ml-3">
                <div className="flex items-center">
                      <div>
                         <p className="text-xs font-medium opacity-60">08/06/1993</p>
                         <div>
                            <span className="font-bold">Expense name: </span>
                            <span  className="font-semibold text-sm opacity-80">Ralph Edwards flight tickets</span>
                         </div>
                      </div> 
                      <p className="ml-auto text-super-gyp-red">-₹ 24,123</p> 
                </div>
                <p className="text-sm font-medium opacity-60">Lorem ipsum dolor sit amet consectetur. Malesuada et malesuada nisi eu
risus urna. Rutrum turpis massa amet praesent sed.</p>
            </div>
      </div>

      <div className="flex items-top border-b border-super-lighter-grey border-dashed pb-7">
            <RupeeIcon></RupeeIcon>
            <div className="ml-3">
                <div className="flex items-center">
                      <div>
                         <p className="text-xs font-medium opacity-60">08/06/1993</p>
                         <div>
                            <span className="font-bold">Expense name: </span>
                            <span  className="font-semibold text-sm opacity-80">Ralph Edwards flight tickets</span>
                         </div>
                      </div> 
                      <p className="ml-auto text-super-gyp-red">-₹ 24,123</p> 
                </div>
                <p className="text-sm font-medium opacity-60">Lorem ipsum dolor sit amet consectetur. Malesuada et malesuada nisi eu
risus urna. Rutrum turpis massa amet praesent sed.</p>
            </div>
      </div>

      <div className="flex items-top border-b border-super-lighter-grey border-dashed pb-7">
            <RupeeIcon></RupeeIcon>
            <div className="ml-3">
                <div className="flex items-center">
                      <div>
                         <p className="text-xs font-medium opacity-60">08/06/1993</p>
                         <div>
                            <span className="font-bold">Expense name: </span>
                            <span  className="font-semibold text-sm opacity-80">Ralph Edwards flight tickets</span>
                         </div>
                      </div> 
                      <p className="ml-auto text-super-gyp-red">-₹ 24,123</p> 
                </div>
                <p className="text-sm font-medium opacity-60">Lorem ipsum dolor sit amet consectetur. Malesuada et malesuada nisi eu
risus urna. Rutrum turpis massa amet praesent sed.</p>
            </div>
      </div>

   </div>
   
  
   
   </div>
  );
};
