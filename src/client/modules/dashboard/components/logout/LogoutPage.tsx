import { BlackCross } from "icons/BlackCross";
import { BusinessStratergy } from "icons/BusinessStratergy";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useSelector } from 'react-redux';
import { RootState } from 'client/shell/store';
import TextareaAutosize from 'react-textarea-autosize';
import actionList from "client/shell/actions";

export const LogoutPage = () => {
  
  const router = useRouter();
  const { modal,type} = router.query;
  const NEXT_PUBLIC_WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_BASE_URL;

  const handleSubmit=()=>
  {
    localStorage.clear();
    actionList.resetAllState({}); 
    //TODO temp fix 
   // router.push("/");
     window.location.href = NEXT_PUBLIC_WEB_BASE_URL;
   }

const handleDiscard =() =>
{
 
  router.back()
  
}

  const handleClose = useCallback(() => {
    const query = { ...router.query };
    if (modal === "logout") {
     delete query.modal;
     delete query.type;
    }
    router.push(
      {
        query: {
          ...query,
        },
      },
      undefined,
      {
        scroll: false,
        shallow: true,
      }
    );
  }, [router.query]);

 return (
   <>
      <div className="flex items-center bg-super-light-pink rounded-t-xl">
          <div className="h-7 w-7 mr-auto"></div>
          <BusinessStratergy></BusinessStratergy>
          <BlackCross onClick={handleClose} className="cursor-pointer inline-block align-top mb-auto mt-5 mr-5"></BlackCross>
      </div>
      <div className="m-6">
        <p className="text-xl  text-super-color-secondary">Logging out of Co founder Dashboard?</p>
        <p className="text-super-table-text mt-1">Once logged out you will not be able to access your dashboard. You can always log back in at any time.</p> 
      
      </div>
      <div className="flex items-center">
            <button onClick={handleDiscard} className=" text-super-color-secondary rounded-3xl px-4 py-1 ml-auto border border-super-secondary-text ">Cancel</button>
            <button onClick={handleSubmit} className= "rounded-3xl px-4 py-1 text-white bg-super-destructive mx-3 " >Log me out</button>
      </div>
    </>
 );
}