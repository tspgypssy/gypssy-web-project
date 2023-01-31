
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';

export const SelectCoverImage = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Select your cover image</p>

         <p className="mb-1 text-lg font-bold">Cover photo</p>
         <div className="flex items-center">
            <div className="cursor-pointer border rounded-lg border-dashed p-80 bg-super-bg-light-white">
               <PlusIcon></PlusIcon>
            </div>
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
