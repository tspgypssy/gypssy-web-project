import { LocationIcon } from "icons/LocationIcon";
import { LocationIconCircle } from "icons/LocationIconCircle";

export const DestinationsFilter = () => {
  
  return (
  <>

      <p className="text-base font-bold">Destination</p>

      <div>
          <div className="flex items-center mb-1 mt-4">
              <p className="text-super-text-primary text-sm">Search</p> 
          </div>                     
          <div   className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
              <LocationIcon></LocationIcon>
              <p className="font-semibold opacity-10 ml-3">Enter location here</p>      
          </div>
        
      </div> 
      
      <div className="h-[240px] overflow-x-auto">
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

        <div className="flex items-center mt-6">
              <div className="px-5 py-2 rounded-[100px] text-white bg-black">Any</div>
              <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Domestic</div>
              <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">International</div>
          </div>

  </> 
  );
};
