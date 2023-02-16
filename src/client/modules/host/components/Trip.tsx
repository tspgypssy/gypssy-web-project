import { Dropdown } from "client/modules/generic/Dropdown";
import { DropDownRightArrow } from "icons/DropDownRightArrow";
import { Heart } from "icons/Heart";
import { RightArrow } from "icons/RightArrow";
import { Share } from "icons/Share";
import { StraightSmallLine } from "icons/StraightSmallLine";
import { TripleDot } from "icons/TripleDot";
import { useCallback, useState } from "react";


export const Trip = ({trip}) => {
    
  const optionsList = useState(["qq","aaq"]);
  const month = ["Jan","Feb","March","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const [dropdownState, setDropdownState] = useState<"open" | "closed">(
   "closed"
 );
 const toggle = useCallback(() => {
   setDropdownState((old) => (old === "closed" ? "open" : "closed"));
 }, []);

 const getCal =(date)=>
  {
    return date.getDate() +" "+month[date.getMonth()]+"'"+date.getFullYear()
  }

 const getFromToDate =() =>
 {
   if(trip?.fromDate && trip?.toDate)
   {
     const fromDate = new Date(trip?.fromDate);
     const toDate = new Date(trip?.toDate);
      return getCal(fromDate)+" - "+getCal(toDate); 
   }
  
   return ""
 }

  return (
    <div className="w-80">
        <div   className="h-80 w-80 rounded-xl bg-cover  ">
            <div className="relative">
                <img   src={trip?.coverImage} className="object-cover h-80 w-80 w-full rounded-lg " ></img> 
                <div className="flex items-center absolute top-4 right-4">
                  <Share   className="cursor-pointer "></Share>
                  <div className="dropdown" onClick={toggle}>
                     <label tabIndex={0} className="bg-super-flyouts cursor-pointer  ">
                        { (
                       
                           <TripleDot></TripleDot>
                          
                        )}
                     </label>
                     {dropdownState === "open" && (
                        <ul
                        tabIndex={0}
                        className=" max-h-80 overflow-auto  mt-1 dropdown-content menu bg-white text-black text-xl font-semibold  rounded-lg w-52 py-2"
                        >
                        {optionsList.length>0 && optionsList.map(( option ) => (
                           <>{ <li  className="border-b border-opacity-10 border-black ">
                              <div
                              className="px-4 py-2 text-sm  w-full text-left flex items-center"
                              onClick={() => {}}
                              >
                                <p className="inline-block ml-2 text-super-text-secondary">View trip details</p> 
                                <DropDownRightArrow className="ml-auto"></DropDownRightArrow>
                              </div>
                           </li> }</>
                        ))}
                        </ul>
                     )}
                  </div>
                
                </div>
                <div className="text-xs px-3 py-2 text-white rounded-tr-lg rounded-br-lg flex items-center absolute bottom-4 left-0 bg-black">
                    <p>{trip?.numberOfDays} Days trip  </p>
                    <StraightSmallLine className="mx-2"></StraightSmallLine>
                    <p>{getFromToDate()}</p>
                </div> 
              </div>  
        </div>
        <div className="mt-4 w-80">
           <div className="flex items-center text-xs w-full font-semibold">
                <p className="rounded px-3 py-2 bg-super-lighter-grey">
                  {trip?.tripType}
                </p>
                <p className="ml-2 rounded px-3 py-2 bg-super-lighter-grey ">
                 {trip?.fromAge} - {trip?.toAge}
                </p>
                <p className="ml-auto text-super-text-green px-[12px] py-[6px] border rounded-[100px] border-super-text-green light-green-bg light-green-bg ">
                  {trip?.totalSlots- trip?.slotsFilled} slots left
                </p>
           </div>
        </div>
       
        <div>
           <p className="mt-3 my-1 uppercase text-sm text-opacity-60">{trip?.title}</p>
           <p className="mb-3 flex items-center text-xl font-bold">{trip?.destination}</p>
           
           <div className="mb-3 flex items-center">
              <p className="font-bold">₹ 1,46,000</p>
              <p className="text-sm font-medium text-opacity-60 ml-2 line-through">{trip?.noDiscountPrice}</p>
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
