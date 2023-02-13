
import  {  RootState } from "client/shell/store";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import actionList from "client/shell/actions";


export const ToastrFailure = () => {

   const toastrFailureMessage:string = useSelector((state: RootState) => state.common.toastrFailureMessage);
  // const toastrSuccessMessage:string = "Question added to form"
  
    useEffect(
        () => {
          let timer1 = setTimeout(() => {
            actionList.updateFailureMessage(""); 
          }, 2000);
          return () => {
            clearTimeout(timer1);
          };
        }, [toastrFailureMessage]);

    return (
 <div className=" w-full flex items-center z-10  bottom-20 lg:bottom-5  mx-auto fixed "> { toastrFailureMessage &&   <div  className="px-2  mx-auto flex items-center justify-between max-w-md px-3 py-1 bg-super-destructive rounded-lg ">
                <div className=" flex items-center px-5 py-1">
                  {/* <BlueTrash></BlueTrash> */}
                  <p className="inline-block ml-1 text-white text-center text-sm">{toastrFailureMessage} </p>     
                       
                </div>
       </div> }</div>

    )}