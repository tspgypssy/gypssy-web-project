import { LocationIcon } from "icons/LocationIcon";

export const GroupTypeFilter = () => {
  
  return (
  <>

<p className="text-base font-bold">Group type</p>


  <div className="flex items-center mt-6">
         <div className="px-5 py-2 rounded-[100px] text-white bg-black">Any</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Men’s trip</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Women’s trip</div>
   </div>

   <div className="flex items-center mt-3">
         <div className="px-5 py-2 rounded-[100px]  opacity-60 border border-super-light-grey bg-super-bg-light-white">LGBTQ</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Mom with kids</div>
   </div>

  </> 
  );
};
