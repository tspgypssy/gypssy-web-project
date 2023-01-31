
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { DownloadIcon } from 'icons/DownloadIcon';
import { Middot } from 'icons/Middot';
import { MiddotWhite } from 'icons/MiddotWhite';
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';

import React, { useCallback, useRef, useState } from 'react'
import { PaymentStatus } from './PaymentStatus';


export const VoucherDetails = () => {

  const router = useRouter();

    
  return (
   
   <div className="border-b border-super-light-grey py-6">
             <p className="text-lg font-semibold mb-6">Add vouchers</p>

            <div className="border rounded-lg border-super-lighter-grey w-1/2">
                <div className="flex items-center w-full p-5">
                     <p className="font-semibold ">Kristin’s trip details</p>
                     <p className="font-semibold ml-auto underline">Edit</p>
                </div>
                <div className="p-5 rounded-b-lg bg-super-bg-light-white w-full ">
                     <div className="">
                        <div className="w-full flex items-center">
                                 <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                                 <div className=" p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                                    <div className="border-r border-super-lighter-grey w-full">
                                          <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                          <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                                    </div>
                                    <DownloadIcon className="ml-4"></DownloadIcon>
                                 </div>
                           </div>

                           <div className="w-full flex items-center mt-2">
                                 <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                                 <div className=" p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                                    <div className="border-r border-super-lighter-grey w-full">
                                          <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                          <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                                    </div>
                                    <DownloadIcon className="ml-4"></DownloadIcon>
                                 </div>
                           </div>
                     </div>
                </div>
            </div>
             <div className="w-1/2 border border-super-light-grey rounded-lg flex items text-center py-4 mt-6">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add vouchers</p>
              </div>
          </div>

  );
};
