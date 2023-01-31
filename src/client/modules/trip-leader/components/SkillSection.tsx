import { Footer } from 'client/modules/header/components/Footer';
import { Header } from 'client/modules/header/components/Header';
import { EditIcon } from 'icons/EditIcon';

import React, { useCallback, useRef } from 'react'
import { Trip } from './Trip';


export const SkillSection = () => {

  return (
   
    
       <div className="border-t border-dashed py-6 mt-6">
            <p className="text-lg font-semibold">Skills</p>  
            <div className="flex items-center mt-6">
               <p className="px-5 py-3 border-super-lighter-grey rounded-[100px] bg-super-bg-light-white">Swimmer</p>
               <p className="px-5 py-3 border-super-lighter-grey rounded-[100px] bg-super-bg-light-white ml-4">Yoga</p>
            </div>
       </div>
  );
};
