import { useState } from "react";

export const AgeFilter = () => {
  
  const [age,setAge] = useState(40);

  const onChange = (event)=>{
    setAge(event.target.value);
  }
  return (
  <>

  <p className="text-base font-bold">Age</p>

  <input type="range" min="0" max="100" value={age} onChange={onChange} className="mt-7 range" />
  
  <div className="w-full flex items-center text-sm font-semibold">
   <p>0</p>
   <p className="ml-auto">30</p>
  </div>
  <div className="flex items-center mt-6">
         <div className="px-5 py-2 rounded-[100px] text-white bg-black">All</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">12 - 14</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">14 - 16</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">16 - 18</div>
   </div>

   <div className="flex items-center mt-3">
         <div className="px-5 py-2 rounded-[100px]  opacity-60 border border-super-light-grey bg-super-bg-light-white">18 - 20</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">20 - 22</div>
   </div>

  </> 
  );
};
