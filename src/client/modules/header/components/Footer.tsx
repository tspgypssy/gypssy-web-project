import {  AppleStore } from "icons/AppleStore";
import { DropDownNoCircle } from "icons/DropDownNoCircle";
import { GooglePlayStore } from "icons/GooglePlayStore";
import { GypssyLogo } from "icons/GypssyLogo";
import { GypssyLogoWhite } from "icons/GypssyLogoWhite";
import { Middot } from "icons/Middot";


export const Footer = () => {
    

 
  return (
   <div className="w-full bg-black h-72   px-44 ">
       <div className="pt-16">
         <GypssyLogoWhite></GypssyLogoWhite> 
         <div className="mt-8 flex items-center">
            <AppleStore className="mr-4"></AppleStore>
            <GooglePlayStore></GooglePlayStore>
         </div>

         <div className="mt-16 flex items-center">
              <div className="flex items-center text-sm text-opacity-60 text-white">
                  <p>© 2022 Gypssy</p>
                  <Middot className="mx-4"></Middot>
                  <p>Privacy policy</p>
                  <Middot className="mx-4"></Middot>
                  <p>Terms & conditions</p>
              </div>
              <div className="ml-auto text-sm font-semibold underline text-white">
                    <div className="flex items-center">
                        <p>Instagram</p>
                        <p className="mx-4">Twitter</p>
                        <p>Linkedin</p>
                    </div>
              </div>
         </div>
       </div>
      
   </div>
  );
};
