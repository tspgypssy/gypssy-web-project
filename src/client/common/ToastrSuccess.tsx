
import  {  RootState } from "client/shell/store";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import actionList from "client/shell/actions";
import { TickCircle } from "icons/TickCircle";
import { TickCircleWhite } from "icons/TickCircleWhite";

export const ToastrSuccess = () => {

   const toastrSuccessMessage:string = useSelector((state: RootState) => state.common.toastrSuccessMessage);
  // const toastrSuccessMessage:string = "Question added to form"
  
    useEffect(
        () => {
          let timer1 = setTimeout(() => {
            actionList.updateSuccessMessage(""); 
          }, 1000);
          return () => {
            clearTimeout(timer1);
          };
        }, [toastrSuccessMessage]);

    return (
 <div className=" w-full flex items-center z-10  bottom-20 lg:bottom-5  mx-auto fixed "> { toastrSuccessMessage &&   <div  className="px-2  mx-auto flex items-center justify-between max-w-md px-3 py-1 bg-super-toastr-green rounded-lg ">
                <div className=" flex items-center px-5 py-1">
                  <TickCircleWhite></TickCircleWhite>
                  <p className="inline-block ml-1 text-white text-center text-sm">{toastrSuccessMessage} </p>     
                       
                </div>
       </div> }</div>

    )}