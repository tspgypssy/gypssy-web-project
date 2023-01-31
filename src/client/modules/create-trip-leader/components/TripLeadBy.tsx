
import { BlackWhiteCross } from 'icons/BlackWhiteCross';
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';


export const TripLeadBy = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <>
   <div className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Trips led</p>

      <div className="w-1/2 bg-super-bg-light-white rounded-lg border border-super-lighter-grey p-4 flex items-center">
         <img className="w-16 h-16 rounded-lg " src="/images/dummy-trip.png"></img>
         <div className="ml-3">
            <p className="font-semibold">MakeMyTrip</p>
            <p className="font-semibold text-sm mt-1">www.instagram.com/makemytrip/</p>
         </div>
         <p className='underline font-semibold ml-auto'>Edit</p>
      </div>

      <div className="mt-5">
          <p className=" text-lg font-semibold">Add instagram post link</p>
          <input type="text" placeholder="Role" className="w-1/2 border border-super-lighter-grey input  focus:outline-none w-full mt-1" /> 
      </div>

      <div className="mt-5">
          <p className=" text-lg font-semibold">Number of trips led</p>
          <input type="text" placeholder="Role" className="w-1/2 border border-super-lighter-grey input  focus:outline-none w-full mt-1" /> 
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
