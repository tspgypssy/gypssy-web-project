
import React, { useCallback,useState } from 'react'
import { DropDownPost } from "icons/DropDownPost";
import { useSelector } from 'react-redux';
import { RootState } from 'client/shell/store';

export const DropDown = ({val,setVal,inputList,placeholder}) => {



  const [dropdownState, setDropdownState] = useState<"open" | "closed">(
    "closed"
  );

  const toggle = useCallback(() => {
    setDropdownState((old) => (old === "closed" ? "open" : "closed"));
  }, []);



  return (
   
    
       
         <div className="mt-1 dropdown w-full" onClick={toggle}>
          <label tabIndex={0} className="bg-super-flyouts cursor-pointer  ">
            { (
             <><span className="w-full border border-super-input-border flex items-center gap-2 text-super-text-primary px-3 py-3 rounded-sm md:text-base text-xs ">
               {val == ""  && <div className="flex items-center text-super-text-light-blk w-full"> <p> {placeholder} </p> <DropDownPost className="ml-auto inline-block"/> </div> }
               {val != "" &&  <div className="flex items-center w-full">  <p className="ml-2"> {val} </p>  <DropDownPost className="ml-auto inline-block"/> </div> }
            </span>
          
            </> 
            )}
          </label>
          {dropdownState === "open" && (
            <ul
              tabIndex={0}
              className=" max-h-80 overflow-auto  mt-1 dropdown-content menu bg-super-flyouts  rounded-lg w-52 py-2"
            >
              {inputList.length>0 && inputList.map(( inputVal ) => (
               <>{ <li key={inputVal} className="border-b border-opacity-10 border-black">
                  <button
                    className="px-4 py-2 text-sm  w-full text-left"
                    onClick={() => setVal(inputVal)}
                  >
                   <p className="inline-block ml-2 text-super-white">{inputVal}</p> 
                  </button>
                </li> }</>
              ))}
            </ul>
          )}
        </div>
      
   
  );
};
