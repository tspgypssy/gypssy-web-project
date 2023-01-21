import { DropDownNoCircle } from "icons/DropDownNoCircle";
import { GypssyLogo } from "icons/GypssyLogo";


export const Header = () => {
    

 
  return (
   <div className="w-full border-super-lighter-grey border-b h-[72px]  flex items-center px-16">
       <GypssyLogo></GypssyLogo>
       <div className="ml-auto font-semibold flex items-center">
            <p className="inline-block">Become a host</p>
            <p className="inline-block px-8">Become a trip leader</p>
            <div className="flex items-center border border-super-lighter-grey rounded-[100px] px-4 py-1">
                <img src="/images/dummy-user.png"></img>  
                <DropDownNoCircle className="ml-4"></DropDownNoCircle>
            </div>
       </div>
   </div>
  );
};
