import { LocationIcon } from "icons/LocationIcon";
import { LocationIconCircle } from "icons/LocationIconCircle";
import { useState } from "react";

export const DestinationsFilter = () => {
  
   const [desType,setDesType] = useState("Any"); 

  return (
  <>

      <p className="text-base font-bold">Destination</p>

      <div className="flex items-center mt-6">
              <div onClick={()=>setDesType("Any")} className={"cursor-pointer px-5 py-2 rounded-[100px]  "+(desType=="Any" ? "  text-white bg-black " : " opacity-60 border border-super-light-grey bg-super-bg-light-white   ") }>Any</div>
              <div onClick={()=>setDesType("Domestic")} className={"cursor-pointer px-5 py-2 rounded-[100px] ml-3  "+(desType=="Domestic" ? "  text-white bg-black " : " opacity-60 border border-super-light-grey bg-super-bg-light-white   ") }>Domestic</div>
              <div onClick={()=>setDesType("International")} className={"cursor-pointer px-5 py-2 rounded-[100px] ml-3  "+(desType=="International" ? "  text-white bg-black " : " opacity-60 border border-super-light-grey bg-super-bg-light-white   ") }>International</div>
      </div>

      <div>
          <div className="flex items-center mb-1 mt-6">
              <p className="text-super-text-primary text-sm">Search</p> 
          </div>                     
          <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
              <LocationIcon></LocationIcon>
              <input type="text" placeholder="Enter location here" className="h-10 border-none input  focus:outline-none w-full " /> 
             
          </div>
        
      </div> 
      
      

      <div className="h-[240px] overflow-x-auto mt-4">
            <div>
                <div className="flex items-center mt-5">
                    <LocationIconCircle className="mr-5"></LocationIconCircle>
                    <div>
                        <p className="font-semibold mb-1">Azerbaijan</p>
                        <p className="text-sm font-medium">Country</p>
                    </div>
                </div> 
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
            </div>

            <div>
                <div className="flex items-center mt-5">
                    <LocationIconCircle className="mr-5"></LocationIconCircle>
                    <div>
                        <p className="font-semibold mb-1">Azerbaijan</p>
                        <p className="text-sm font-medium">Country</p>
                    </div>
                </div> 
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
            </div>

            <div>
                <div className="flex items-center mt-5">
                    <LocationIconCircle className="mr-5"></LocationIconCircle>
                    <div>
                        <p className="font-semibold mb-1">Azerbaijan</p>
                        <p className="text-sm font-medium">Country</p>
                    </div>
                </div> 
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
            </div>

             <div>
                <div className="flex items-center mt-5">
                    <LocationIconCircle className="mr-5"></LocationIconCircle>
                    <div>
                        <p className="font-semibold mb-1">Azerbaijan</p>
                        <p className="text-sm font-medium">Country</p>
                    </div>
                </div> 
                <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
            </div>     
      </div>

       

  </> 
  );
};
