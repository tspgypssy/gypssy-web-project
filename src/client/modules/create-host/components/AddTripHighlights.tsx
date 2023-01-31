
import { useRouter } from 'next/router';
import { Share } from "icons/Share";

export const AddTripHighlights = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <>
   <div className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Add trip highlights</p>

       <div className="w-1/2 grid grid-cols-2 gap-5">
         <div className="relative">
            <img src="images/dummy-trip.png" className="h-96 rounded-lg "></img>
            <Share   className="cursor-pointer absolute top-4 right-8"></Share>
          </div>

          <div className="relative">
            <img src="images/dummy-trip.png" className="h-96 rounded-lg "></img>
            <Share   className="cursor-pointer absolute top-4 right-8"></Share>
          </div>

          <div className="relative">
            <img src="images/dummy-trip.png" className="h-96 rounded-lg "></img>
            <Share   className="cursor-pointer absolute top-4 right-8"></Share>
          </div>
       </div>

         <div className="bottom-5 w-[90%]  z-[60]  fixed  overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Cancel</p>
           <button className="ml-auto rounded-[100px] text-white bg-black px-8 py-3">Continue</button>
          </div>
         </div>       



   </div>

   </>
  );
};
