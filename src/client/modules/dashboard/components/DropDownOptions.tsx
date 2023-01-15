import actionList from 'client/shell/actions';
import { DropdownCircle } from 'icons/DropdownCircle';
import  { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "client/shell/store";


export const DropDownOptions = ({form}) => {

  const router = useRouter();
  const pageParam =useSelector((state: RootState) => state.peoplefeed.pageParam);
  const reload =useSelector((state: RootState) => state.dashboard.reload);
  const { tab } = router.query;

  const NEXT_PUBLIC_WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_BASE_URL;
  const [dropdownState, setDropdownState] = useState<"open" | "closed">(
    "closed"
  );
  const toggle = useCallback(() => {
    setDropdownState((old) => (old === "closed" ? "open" : "closed"));
  }, []);


  const copyLinkUrl = () =>
  {
    navigator.clipboard.writeText(NEXT_PUBLIC_WEB_BASE_URL +"/form/"+form?.slug);
    actionList.updateSuccessMessage("URL Copied!")
  }

  const editForm = () =>
  {
    
   
    router.push("/create-form");
  }

  const downloadFile = () =>
  {
   
  }


  const publish = () =>
  {
   
  }

  const approve =() =>
  {
    actionList.updateStatus({id:form.userInfo.id,status:"Active",pageParam:pageParam,waitingList:"waiting"==tab?true:false,reset:true})
    //actionList.getPeoplePageFeed({pageParam:pageParam,waitingList:"waiting"==tab?true:false,reset:true}); 

    // router.push({
    //   query: {
    //     ...router.query,
    //     modal: "delete",
    //     id:form?.id
    //   },
    // }, undefined, {
    //   scroll: false,
    //   shallow: true,
    // }); 
  }
  const reject =() =>
  {
    actionList.updateStatus({id:form.userInfo.id,status:"Inactive"})
    //actionList.getPeoplePageFeed({pageParam:pageParam,waitingList:"waiting"==tab?true:false,reset:true}); 

    // router.push({
    //   query: {
    //     ...router.query,
    //     modal: "delete",
    //     id:form?.id
    //   },
    // }, undefined, {
    //   scroll: false,
    //   shallow: true,
    // }); 
  }
  useEffect(() => {
    // if connected signup
    if (reload) {
      actionList.getPeoplePageFeed({pageParam:pageParam,waitingList:"waiting"==tab?true:false,reset:true}); 
      actionList.reloadResult({reload:false})
    }
  }, [reload]);
  return (
    <div className="dropdown dropdown-left dropdown-bottom w-full" onClick={toggle}>
    <label tabIndex={0} className=" cursor-pointer  ">
      { (
       <DropdownCircle className="cursor-pointer"></DropdownCircle>
    
      )}
    </label>
    {dropdownState === "open" && (
      <ul
        tabIndex={0}
        className=" max-h-80 overflow-auto  mt-1 dropdown-content menu bg-super-light-grey text-white  rounded-lg w-56 py-2"
      >
      {form.status=="Active" && <li key="copylink" className="border-b border-super-white border-opacity-10">
            <button
              className="px-4 py-2 text-sm  w-full text-left"
              onClick={copyLinkUrl}
            >
             <div className="flex items-center w-full">
                <p>Copy form link</p>
              
             </div> 
            </button>
          </li>

      }  

      {form.status=="Active" &&  <li key="downloadfile" className="">
            
            <button
              className="px-4 py-2 text-sm  w-full text-left"
              onClick={downloadFile}
            >
             <div className="flex items-center w-full">
                <p>Download</p>
                
             </div> 
            </button>
          </li> }

          {(form.status=="Initiated" || form.status=="Draft"   ) &&  

        
          <li key="editform" className="">

            <button
              className="px-4 py-2 text-sm  w-full text-left"
              onClick={editForm}
            >
             <div className="flex items-center w-full">
                <p>Edit form</p>
                
             </div> 
            </button>
          </li>  
         }
      
      {(form.status=="Active" || form.status=="PaymentInitiated" || form.status=="PaymentVerified" ) &&  
          <li key="publish" className="">

            <button
              className="px-4 py-2 text-sm  w-full text-left"
              onClick={publish}
            >
            <div className="flex items-center w-full">
                <p>Publish</p>
              
            </div> 
            </button>
          </li>  
          }

         
{(form.userInfo.status=="InReview" && form.userInfo.isLinkedinProfileUpdated==true) &&           
          <li key="harddelete" className="">

            <button
              className="px-4 py-2 text-sm  w-full text-left"
              onClick={approve}
            >
            <div className="flex items-center w-full">
                <p className="text-super-destructive">Approve</p>
               
            </div> 
            </button>
          </li>
}
{(form.userInfo.status=="InReview" && form.userInfo.isLinkedinProfileUpdated==true) &&  
           <li key="harddelete" className="">

            <button
              className="px-4 py-2 text-sm  w-full text-left"
              onClick={reject}
            >
            <div className="flex items-center w-full">
                <p className="text-super-destructive">Reject</p>
               
            </div> 
            </button>
          </li>  
}         
          
      </ul>
    )}
</div>
  );
};
