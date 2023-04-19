
import actionList from 'client/shell/actions';
import { RootState } from 'client/shell/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const TitleDescription = () => {
    
  const titleName =  useSelector((state: RootState) => state.createtrip.titleName);
  const titleDesc =  useSelector((state: RootState) => state.createtrip.titleDesc);

  const router = useRouter();
  const { modal } = router.query;
  const [name,setName] = useState("");
  const [desc,setDesc] = useState("");

  const moveToNextPage =()=>
  {
    actionList.updateTitleNameAndDesc({titleName:name,titleDesc:desc});
   actionList.updateCreateTripPageSelected({"pageTypeSelected":"title-cover-image"})
  }

  useEffect(() => {
      if(titleName)
      {
        setName(titleName);
      }

      if(titleDesc)
      {
        setDesc(titleDesc);
      }
  }, [titleName,titleDesc]);


  return (
   <div className="w-full h-screen bg-white overflow-y-auto  ">
     
      <div className="createTripTitleDesc px-36">
      <p className="text-4xl font-bold my-6">Trip title & description</p>
      <div className="w-1/2 mt-5">
                    <div className="form-control w-full ">
                      <label className="label !py-1 text-xs">
                        <span className="label-text">Title</span>
                      </label>
                      <input  value={name}  onChange={(e)=>setName(e.target.value)} type="text" placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                      <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">{name.length}/60</p>  
                  </div> 
                    </div>                                                        
          </div>

           <div className="w-1/2  mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea    value={desc}  onChange={(e)=>setDesc(e.target.value)} placeholder="Write special requests or a message for the host..." className="h-36 border border-super-lighter-grey input  focus:outline-none w-full" />   
                  <div className="w-full flex items-center mt-2">
                     <p className="text-xs opacity-60 float-right ml-auto">{desc.length}/200</p>  
                  </div>          
                </div>                                                        
             </div>

      </div>
        
         <div className="w-full px-10 border-t border-[#EBEBEB]  z-[60]    overflow-x-hidden overflow-y-auto  ">
          <div className=" w-full flex items-center">
           <p className="font-semibold underline">Cancel</p>
           <button onClick={moveToNextPage} className="ml-auto rounded-[100px] text-white bg-black px-8 py-3  mt-3">Continue</button>
          </div>
        </div>       



   </div>
  );
};
