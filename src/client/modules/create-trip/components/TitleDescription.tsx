
import { useRouter } from 'next/router';

export const TitleDescription = () => {
    
  const router = useRouter();
  const { modal } = router.query;
 
  return (
   <div className="w-full h-screen bg-white overflow-y-auto px-36 ">
       <p className="text-4xl font-bold my-6">Trip title & description</p>

         <div className="w-1/2 mt-5">
                    <div className="form-control w-full ">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Title</span>
                      </label>
                      <input type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
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

         <div className="bottom-5 w-[90%]  z-[60]  fixed  overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Cancel</p>
           <button className="ml-auto rounded-[100px] text-white bg-black px-8 py-3">Continue</button>
          </div>
       </div>       



   </div>
  );
};
