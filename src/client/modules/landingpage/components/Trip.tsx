import { Heart } from "icons/Heart";
import { Share } from "icons/Share";
import { StraightSmallLine } from "icons/StraightSmallLine";


export const Trip = () => {
    
  const imageUrl = '/images/dummy-trip.png';
  return (
    <div className="w-80">
        <div   className="h-80 w-80 rounded-xl bg-cover  ">
            <div className="relative">
                <img   src={imageUrl} className="object-cover h-80 w-80 w-full rounded-lg " ></img> 
                <div className="flex items-center absolute top-4 right-4">
                  <Share   className="cursor-pointer "></Share>
                  <Heart   className="ml-2 cursor-pointer "></Heart>
                </div>
                <div className="text-xs px-3 py-2 text-white rounded-tr-lg rounded-br-lg flex items-center absolute bottom-4 left-0 bg-black">
                    <p>8 Days trip  </p>
                    <StraightSmallLine className="mx-2"></StraightSmallLine>
                    <p>25 Dec’22 - 1 Jan’23</p>
                </div> 
              </div>  
        </div>
        <div className="mt-4 w-80">
           <div className="flex items-center text-xs w-full font-semibold">
                <p className="rounded px-3 py-2 bg-super-lighter-grey">
                  All women’s trip
                </p>
                <p className="ml-2 rounded px-3 py-2 bg-super-lighter-grey ">
                   18+
                </p>
                <p className="ml-auto text-super-text-grey px-[12px] py-[6px] border rounded-[100px] border-super-text-grey light-green-bg light-green-bg ">
                  2 slots left
                </p>
           </div>
        </div>
       
        <div>
           <p className="mt-3 my-1 uppercase text-sm text-opacity-60">New Year in Europe</p>
           <p className="mb-3 flex items-center text-xl font-bold">Azerbaijan</p>
           
           <div className="mb-3 flex items-center">
              <p className="font-bold">₹ 1,46,000</p>
              <p className="text-sm font-medium text-opacity-60 ml-2 line-through">₹1,60,000</p>
           </div>

           {/* <div className="flex items-center text-sm">
              <img src="images/dummy-user.png" className="rounded-full"></img>
              <div>
                 <p>HOSTED BY</p>
                 <div className="flex items-center">
                     <p>CoTravel</p>
                     <p>4.3</p>
                 </div>
              </div>
           </div> */}
        </div>

    </div>
  );
};
