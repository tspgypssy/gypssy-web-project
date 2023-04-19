import actionList from "client/shell/actions";


export const PlanItenary = () => {
    

  const moveToNextPage =()=>
   {
    actionList.updateCreateTripPageSelected({"pageTypeSelected":"plan-itenary"})
   }
 
   const moveToPrevPage =()=>
   {
    actionList.updateCreateTripPageSelected({"pageTypeSelected":"enter-trip-details"})
   }

  return (
   <div className="w-full h-screen bg-white overflow-y-auto  ">
   
   <div className=" px-36  createTripTitleDesc overflow-y-auto">
       <p className="text-4xl font-bold my-6">Let’s plan itinerary</p>

      <div className="px-4 py-3 w-1/2 flex items-center bg-super-bg-light-white rounded-lg">
         <div>
            <p className="font-medium text-smß">Day 1</p>
            <p className="font-semibold mt-1">Arrival to Baku</p>
            <p className="font-semibold mt-1 text-sm">Meet & Greet</p>
         </div>
         <p className="ml-auto underline font-semibold">
            Edit
         </p>
      </div>
   
      <p className="text-lg font-semibold my-6 ">Day 2</p>

      <div className="w-1/2 ">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" placeholder="Your title" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
      </div>

      <div className="w-1/2 mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Primary focus of the day</span>
                  </label>
                  <input type="text" placeholder="Primary focus of the day" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
      </div>

      <div className="w-1/2  mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea  placeholder="Write special requests or a message for the host..." className="h-36 border border-super-lighter-grey input  focus:outline-none w-full" />   
                  <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">0/200</p>  
                  </div>          
                </div>                                                        
      </div>

      </div>

      <div className="w-full px-10 border-t border-[#EBEBEB]  z-[60]    overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
          <p onClick={moveToPrevPage} className="font-semibold underline cursor-pointer ">Back</p>
           <button onClick={moveToNextPage} className="cursor-pointer ml-auto rounded-[100px] text-white bg-black px-8 py-3  mt-3">Continue</button>
          </div>
        </div> 
   </div>
  );
};
