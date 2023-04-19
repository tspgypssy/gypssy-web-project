
import actionList from 'client/shell/actions';
import { useRouter } from 'next/router';

export const StartPage = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  const moveToNextPage =()=>
  {
   actionList.updateCreateTripPageSelected({"pageTypeSelected":"title-desc"})
  }

  return (
   <div className="w-full h-screen bg-white overflow-y-auto ">
       
       <div className="grid grid-cols-2 w-full my-auto gap-48  px-36 createTripHeight">
            <div className="my-auto">
               <p className="text-6xl font-bold ">Create a trip in few easy steps</p>
               <p className="text-lg font-medium mt-4">Create trip. We’ll help you every step of the way.</p>
            </div>
            <img src="/images/dummy-trip.png" className="h-96 w-96 rounded-lg my-auto"></img>
       </div>

       <div className="w-full px-10 border-t border-[#EBEBEB]  z-[60]    overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Back</p>
           <button onClick={moveToNextPage} className="ml-auto rounded-[100px] text-white bg-black px-8 py-3  mt-3">Continue</button>
          </div>
       </div>
     
   </div>
  );
};
