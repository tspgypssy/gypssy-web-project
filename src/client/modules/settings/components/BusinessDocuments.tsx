
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { BackArrowPage } from 'icons/BackArrowPage';
import { DownArrow } from 'icons/DownArrow';
import { DownloadIcon } from 'icons/DownloadIcon';
import { PlusIcon } from 'icons/PlusIcon';
import { Tick } from 'icons/Tick';
import { UnChecked } from 'icons/UnChecked';

import React, { useCallback, useRef, useState } from 'react'


export const BusinessDocuments = () => {

    
  return (
   
    <div  className="bg-white  ">
          <Header></Header>
          <div className="p-16">
            <div className="text-sm breadcrumbs font-semibold opacity-70">
                <ul>
                    <li><a>Settings</a></li> 
                    <li><a>Edit profile</a></li> 
                    <li><a>Business documents</a></li> 
                </ul>
            </div>

            <div className="flex items-center mt-4">
                <BackArrowPage></BackArrowPage>
                <p className="ml-5 text-3xl font-bold">Business documents</p>
                <div className="ml-auto px-3 py-2 rounded-[100px] border border-opacity-80 flex items-center">
                    <Tick></Tick> 
                    <p className="ml-2 text-sm font-semibold" >Save</p>
                </div>
            </div>

           <div className="w-full mt-16">
              <p className="text-lg font-semibold">Business registration</p>
              
              <div className="w-full grid grid-cols-2 gap-14 mt-6">
                  <div className="w-full flex items-center">
                        <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                        <div className="bg-super-bg-light-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                             <div className="border-r border-super-lighter-grey w-full">
                                  <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                  <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                             </div>
                             <DownloadIcon className="ml-4"></DownloadIcon>
                        </div>
                  </div>

                  <div className="w-full flex items-center">
                        <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                        <div className="bg-super-bg-light-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                             <div className="border-r border-super-lighter-grey w-full">
                                  <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                  <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                             </div>
                             <DownloadIcon className="ml-4"></DownloadIcon>
                        </div>
                  </div>
              </div>

              <div className="w-1/2 border border-super-light-grey rounded-lg flex items text-center py-4 mt-6">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add files</p>
              </div>
           </div>
            
           <div className="w-full border-b border-super-lighter-grey my-6"></div> 

           <div className="w-full">
              <p className="text-lg font-semibold">GST registration</p>

              <div className="w-full grid grid-cols-2 gap-14 mt-6">
                  <div className="w-full flex items-center">
                        <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                        <div className="bg-super-bg-light-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                             <div className="border-r border-super-lighter-grey w-full">
                                  <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                  <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                             </div>
                             <DownloadIcon className="ml-4"></DownloadIcon>
                        </div>
                  </div>

                  <div className="w-full flex items-center">
                        <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                        <div className="bg-super-bg-light-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                             <div className="border-r border-super-lighter-grey w-full">
                                  <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                  <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                             </div>
                             <DownloadIcon className="ml-4"></DownloadIcon>
                        </div>
                  </div>
              </div>

              <div className="w-1/2 border border-super-light-grey rounded-lg flex items text-center py-4 mt-6">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add files</p>
              </div>
           </div>

           <div className="w-full border-b border-super-lighter-grey my-6"></div> 

           <div className="w-1/2">
              <p className="text-lg font-semibold">Other documents</p>

              <div className="mt-5 rounded-lg border border-super-lighter-grey">
                   <p className="p-6 font-semibold">Address proof</p>
                   <div className="w-full border-t border-super-lighter-grey bg-super-bg-light-white p-5">
                      <div className="w-full flex items-center">
                            <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                            <div className="bg-super-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                                <div className="border-r border-super-lighter-grey w-full">
                                      <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                      <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                                </div>
                                <DownloadIcon className="ml-4"></DownloadIcon>
                            </div>
                      </div>

                      <div className="w-full flex items-center mt-2">
                            <p className="px-2 py-[22px] rounded-tl-lg rounded-bl-lg bg-black text-white text-sm font-bold">PDF</p>  
                            <div className="bg-super-white p-3 border-y border-r border-super-lighter-grey w-full flex items-center rounded-tr-lg rounded-br-lg">
                                <div className="border-r border-super-lighter-grey w-full">
                                      <p className="text-sm font-semibold">Businessdoc1.pdf</p>
                                      <p className="mt-[2px] text-xs font-medium opacity-60">uploaded on 02/12/22</p>
                                </div>
                                <DownloadIcon className="ml-4"></DownloadIcon>
                            </div>
                      </div>
                   </div>
              </div>

              <div className=" border border-super-light-grey rounded-lg flex items text-center py-4 mt-6">
                     <PlusIcon className="ml-auto"></PlusIcon>   
                     <p className="mr-auto text-sm font-semibold ml-4 text-center my-auto">Add files</p>
              </div>
           </div>

          </div>
          <Footer></Footer>
    </div>
   
  );
};
