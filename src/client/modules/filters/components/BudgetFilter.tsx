import { useState } from "react";

export const BudgetFilter = () => {
  
  const [budget,setBudget] = useState(40);

  const onChange = (event)=>{
    setBudget(event.target.value);
  }

  return (
  <>

  <p className="text-base font-bold">Budget</p>

  <input type="range" min="0" max="100" value={budget} onChange={onChange} className="mt-7 range" />
  
  <div className="w-full flex items-center text-sm font-semibold">
   <p>₹ 0</p>
   <p className="ml-auto">₹ 2,00,000</p>
  </div>
  <div className="flex items-center mt-6 text-sm">
         <div className="px-5 py-2 rounded-[100px] text-white bg-black">All prices</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">Under ₹ 50,000</div>
  </div>

   <div className="flex items-center mt-3 text-sm">
         <div className="px-5 py-2 rounded-[100px]  opacity-60 border border-super-light-grey bg-super-bg-light-white">₹ 50,000 - ₹ 75,000</div>
         <div className="px-5 py-2 rounded-[100px] ml-3 opacity-60 border border-super-light-grey bg-super-bg-light-white">₹ 75,000 - ₹ 1,00,000+</div>
   </div>

  </> 
  );
};
