
import { useRouter } from 'next/router';
import { Share } from "icons/Share";
import { CreateUser } from 'icons/CreateUser';
import { CreateUserEdit } from 'icons/CreateUserEdit';
import { InstagramBig } from 'icons/InstagramBig';
import { YoutubeBig } from 'icons/YoutubeBig';

export const LinkSocialMedia = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <>
   <div className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Link social media</p>

      <div>
          <div className="flex items-center">
              <InstagramBig></InstagramBig>
              <p className="ml-5 text-lg font-semibold">Instagram*</p>
          </div>
          <input type="text" placeholder="Role" className="w-1/2 border border-super-lighter-grey input  focus:outline-none w-full mt-5" /> 
      </div>

      <div className="mt-5">
          <div className="flex items-center">
              <YoutubeBig></YoutubeBig>
              <p className="ml-5 text-lg font-semibold">Youtube</p>
          </div>
          <input type="text" placeholder="Role" className="w-1/2 border border-super-lighter-grey input  focus:outline-none w-full mt-5" /> 
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
