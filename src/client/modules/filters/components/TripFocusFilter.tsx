import { LocationIcon } from "icons/LocationIcon";

export const TripFocusFilter = () => {
  
  return (
  <>

<p className="text-base font-bold">Trip focus</p>


  <div className="flex items-center mt-6">
         <div className="px-5 py-2 rounded-[100px] text-white bg-black">Mixed</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Photography</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Yoga</div>
   </div>

   <div className="flex items-center mt-3">
         <div className="px-5 py-2 rounded-[100px]  opacity-60 border border-super-light-grey bg-super-bg-light-white">Trading</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Cinematography</div>
   </div>

  </> 
  );
};
