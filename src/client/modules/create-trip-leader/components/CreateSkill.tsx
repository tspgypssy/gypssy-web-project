
import { BlackWhiteCross } from 'icons/BlackWhiteCross';
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';


export const CreateSkill = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <>
   <div className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Skills</p>

       <div className="mt-5">
          <p className="text-lg font-semibold">Add custom skillls</p>
          <div className="flex items-center mt-5">
             <input type="text" placeholder="Role" className="w-1/2 border border-super-lighter-grey input  focus:outline-none w-full" /> 
             <PlusIcon className="ml-3"></PlusIcon>
          </div>
      </div>

      <div className="mt-5 flex items-center gap-5">
          <div className="bg-black text-white rounded-[100px] px-5 py-3 flex items-center">
              <p>Adventure</p>
              <BlackWhiteCross className="ml-4"></BlackWhiteCross>
          </div>

          <div className="rounded-[100px] bg-super-bg-light-white border border-super-lighter-grey px-5 py-[9px]">
                Yoga
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
