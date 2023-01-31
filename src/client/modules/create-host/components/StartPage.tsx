
import { useRouter } from 'next/router';

export const StartPage = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto px-36 flex items-center">
       <div className="grid grid-cols-2 w-full my-auto gap-48">
            <div className="my-auto">
               <p className="text-6xl font-bold ">Become a host in few easy steps</p>
               <p className="text-lg font-medium mt-4">Join us. We’ll help you every step of the way.</p>
            </div>
            <img src="/images/dummy-trip.png" className="h-96 w-96 rounded-lg"></img>
       </div>
       <div className="bottom-5 w-[90%]  z-[60]  fixed  overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Back</p>
           <button className="ml-auto rounded-[100px] text-white bg-black px-8 py-3">Continue</button>
          </div>
       </div>
     
   </div>
  );
};
