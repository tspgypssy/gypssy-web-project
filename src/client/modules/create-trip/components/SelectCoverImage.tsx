
import actionList from 'client/shell/actions';
import { RootState } from 'client/shell/store';
import { PlusIcon } from 'icons/PlusIcon';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const SelectCoverImage = () => {
  
  const imageSrc = useSelector((state: RootState) => state.createtrip.coverImageSrc);
 
  const imageChange = (e) => {
   if (e.target.files && e.target.files.length > 0) {
 
     let size =0;
     size += e.target.files[0].size;
   
     if(size <25*1024*1024)
     {
       actionList.updateSelectedImage({"coverImageSrc":URL.createObjectURL(e.target.files[0]),"coverImage":e.target.files[0]});
     } 
   }
 };
 
 
  const moveToNextPage =()=>
  {
   actionList.updateCreateTripPageSelected({"pageTypeSelected":"enter-trip-details"})
  }

  const moveToPrevPage =()=>
  {
   actionList.updateCreateTripPageSelected({"pageTypeSelected":"title-desc"})
  }

  return (
   <div className="w-full h-screen bg-white overflow-y-auto  ">
       
       <div className="px-36 createTripTitleDesc">
         <p className="text-4xl font-bold my-6">Select your cover image</p>
            <p className="mb-1 text-lg font-bold">Cover photo</p>
            <label className="">
              <input  accept="image/png,image/jpg, image/jpeg"   onChange={imageChange} type="file" className="hidden" /> 
              {imageSrc !=null  ?
               <img src={imageSrc} className="max-h-80 xl:max-h-[22rem] 2xl:max-h-[24rem] 3xl:max-h-[24rem]  lg:w-80 xl:w-[22rem] 2xl:w-[24rem] 3xl:w-[24rem] w-full rounded-lg mt-5  cursor-pointer"></img> 
               :
               <div className="flex items-center">
                  <div className="cursor-pointer border rounded-lg border-dashed py-40 px-60 bg-super-bg-light-white">
                     <PlusIcon></PlusIcon>
                  </div>
               </div>}
               </label>
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
