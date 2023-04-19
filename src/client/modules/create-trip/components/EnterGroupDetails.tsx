import actionList from 'client/shell/actions';
import { RootState } from 'client/shell/store';
import { useSelector } from 'react-redux';

export const EnterGroupDetails = () => {
 
   const groupType = useSelector((state: RootState) => state.createtrip.groupType);
   const groupTrip = useSelector((state: RootState) => state.createtrip.groupTrip);
 
   const moveToNextPage =()=>
   {
    actionList.updateCreateTripPageSelected({"pageTypeSelected":"plan-itenary"})
   }
 
   const moveToPrevPage =()=>
   {
    actionList.updateCreateTripPageSelected({"pageTypeSelected":"enter-trip-details"})
   }

   const updateGroupType=(val)=>
   {
      actionList.updateGroupTypeSelected({groupType:val})  
   }

   const updateGroupTrip=(val)=>
   {
      actionList.updateGroupTripSelected({groupTrip:val})  
   }

  return (
   <div className="w-full h-screen bg-white overflow-y-auto  ">
     <div  className=" px-36  createTripTitleDesc">
     <p className="text-4xl font-bold my-6">Tell us about your group</p>

         <div>
            <p className="text-lg font-semibold">What is your group type</p>
            <div className="flex items-center my-6">
               <p onClick={()=>updateGroupType("All")} className={"cursor-pointer rounded-[100px] px-5 py-3  ml-3 " + (groupType=="All"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>All</p>
               <p onClick={()=>updateGroupType("Men’s trip")} className={"cursor-pointer  rounded-[100px] px-5 py-3   ml-3" + (groupType=="Men’s trip"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Men’s trip</p>
               <p onClick={()=>updateGroupType("Women’s trip")} className={"cursor-pointer rounded-[100px] px-5 py-3 ml-3 " + (groupType=="Women’s trip"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Women’s trip</p>
               <p onClick={()=>updateGroupType("Mom with kids")} className={"cursor-pointer rounded-[100px] px-5 py-3  ml-3 "+ (groupType=="Mom with kids"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Mom with kids</p>
               <p onClick={()=>updateGroupType("LGBTQ")} className={"cursor-pointer rounded-[100px] px-5 py-3   ml-3" + (groupType=="LGBTQ"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>LGBTQ</p>
            </div>
         </div>

         <div className="my-12">
         <p className="text-lg font-semibold">What is your group size?</p>
         <div className="grid grid-cols-2 gap-6 w-3/4 my-7">
            
                  <div className="form-control w-full ">
                        <label className="label !py-1 text-xs">
                        <span className="label-text">Minimum</span>
                        </label>
                        <input type="text" placeholder="Min. size" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                  </div>  

                  <div className="form-control w-full ">
                        <label className="label !py-1 text-xs">
                        <span className="label-text">Maximum</span>
                        </label>
                        <input type="text" placeholder="Max. size" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                  </div>  
         </div>
         </div>

         <div className="my-12">
         <p className="text-lg font-semibold">What is your group trip focus areas?</p>
            <div className="flex items-center my-6">
            <div className="flex items-center my-6">
               <p onClick={()=>updateGroupTrip("Mixed")} className={"cursor-pointer rounded-[100px] px-5 py-3  ml-3 " + (groupTrip=="Mixed"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Mixed</p>
               <p onClick={()=>updateGroupTrip("Photography")} className={"cursor-pointer  rounded-[100px] px-5 py-3   ml-3" + (groupTrip=="Photography"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Photography</p>
               <p onClick={()=>updateGroupTrip("Yoga")} className={"cursor-pointer rounded-[100px] px-5 py-3 ml-3 " + (groupTrip=="Yoga"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Yoga</p>
               <p onClick={()=>updateGroupTrip("Trading")} className={"cursor-pointer rounded-[100px] px-5 py-3  ml-3 "+ (groupTrip=="Trading"?" text-white bg-black ":" bg-super-bg-light-white border border-super-lighter-grey ")}>Trading</p>
              
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
