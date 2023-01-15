import { LandingPageMinus } from "icons/LandingPageMinus";
import { LandingPagePlus } from "icons/LandingPagePlus";
import { useState } from "react";

export const Accordion = ({mainText,descText,showLinkText=false}) => {
  
const [secOpened,setSecOpened] = useState(false);
 
  const toggleDiv =()=>
  {
    setSecOpened(!secOpened);
  }

  let newText = descText.split('\\n').map ((item, i) => <p key={i}>{item}</p>);

 return (
   <div onClick={toggleDiv} className="!cursor-pointer text-super-light-brown">
     
     {!secOpened && 
      <div className="flex items-centeer p-4 lg:p-8 rounded-xl w-full !pl-0">
        <p className="text-base lg:text-2xl font-bold text-super-light-brown">{mainText}</p>
        <LandingPagePlus className="ml-auto"></LandingPagePlus>
     </div>  
     }

     {secOpened && 
      <div className="rounded-xl  p-4 lg:p-8 !pl-0">
        <div className="w-full flex items-top">
          
          <div>
            <div className=" font-bold text-base lg:text-2xl ">{mainText}</div>
           {!showLinkText && <div className="mt-2 lg:mt-4 text-sm lg:text-xl">{newText}</div> }
           {showLinkText && <div className="mt-2 lg:mt-4  text-sm lg:text-xl">We have an active community on Telegram, you can join the same <a className="text-super-primary-blue" href="https://t.me/+eAYspqeTQEViMjQ9" target="_blank">here.</a></div> }
          </div>
          <div className=" ml-auto"><LandingPageMinus className=" "></LandingPageMinus></div>
        </div>
     </div>  
     }  

  </div>
 );
}