
import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { CreateTrip } from 'icons/CreateTrip';
import { DocumentSetting } from 'icons/DocumentSetting';
import { GreyDot } from 'icons/GreyDot';
import { LogoutIcon } from 'icons/LogoutIcon';
import { ManageTrip } from 'icons/ManageTrip';
import { RightArrow } from 'icons/RightArrow';
import { SettingsCard } from 'icons/SettingsCard';
import { UserProfile } from 'icons/UserProfile';

import React, { useCallback, useRef } from 'react'


export const Settings = () => {

  return (
   
    <div className="bg-white  ">
          <Header></Header>

          <div className="p-16">
              <p className="text-3xl font-bold">Settings</p>
              <div className="flex items-center mt-1">
                  <p className="font-bold opacity-80">Hi, Wade Warren</p>
                  <GreyDot className="mx-3"></GreyDot>
                  <p className="font-semibold opacity-80 underline">Go to profile</p>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-4">
                  <div className="w-full p-9 rounded-lg border border-super-lighter-grey">
                        <div className="flex items-top w-full">
                            <UserProfile></UserProfile>
                            <RightArrow className="ml-auto"></RightArrow>
                        </div>
                        <div className="mt-7">
                            <p className="text-lg font-semibold">Edit profile</p>
                            <p className="text-sm font-medium opacity-60 mt-2">Edit your profile from here</p>
                        </div>
                  </div>

                  <div className="p-9 rounded-lg border border-super-lighter-grey w-full">
                        <div className="flex items-top">
                            <SettingsCard></SettingsCard>
                            <RightArrow className="ml-auto"></RightArrow>
                        </div>
                        <div className="mt-7">
                            <p className="text-lg font-semibold">Payments & payouts</p>
                            <p className="text-sm font-medium opacity-60 mt-2">Add business bank account</p>
                        </div>
                  </div>

                  <div className="p-9 rounded-lg border border-super-lighter-grey w-full">
                        <div className="flex items-top ">
                            <DocumentSetting></DocumentSetting>
                            <RightArrow className="ml-auto"></RightArrow>
                        </div>
                        <div className="mt-7">
                            <p className="text-lg font-semibold">Business Documents</p>
                            <p className="text-sm font-medium opacity-60 mt-2">Add documents relating to your business</p>
                        </div>
                  </div>

                  <div className="p-9 rounded-lg border border-super-lighter-grey w-full">
                        <div className="flex items-top ">
                            <ManageTrip></ManageTrip>
                            <RightArrow className="ml-auto"></RightArrow>
                        </div>
                        <div className="mt-7">
                            <p className="text-lg font-semibold">Manage trips</p>
                            <p className="text-sm font-medium opacity-60 mt-2">Mange your trip easily</p>
                        </div>
                  </div>

                  <div className="p-9 rounded-lg border border-super-lighter-grey w-full">
                        <div className="flex items-top ">
                            <CreateTrip></CreateTrip>
                            <RightArrow className="ml-auto"></RightArrow>
                        </div>
                        <div className="mt-7">
                            <p className="text-lg font-semibold">Create a trip</p>
                            <p className="text-sm font-medium opacity-60 mt-2">Create trip for your travellets</p>
                        </div>
                  </div>

              </div>

             <div className="w-full flex items-center">
              <div className="ml-auto mr-auto  mt-16 bgRed border border-[#ED1D24] py-5 flex items-center text-super-gyp-red rounded-lg w-64">
                    <LogoutIcon className="ml-auto"></LogoutIcon>
                    <p className="mr-auto ml-5 font-semibold">Log out</p>
                </div>
             </div>
             

          </div>
          <Footer></Footer>
    </div>
   
  );
};
