
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import  {  RootState } from "client/shell/store";
import { useSelector } from 'react-redux';
import { DropDownOptions } from "./../DropDownOptions";


export const IdeasSection = () => {

  const router = useRouter();
  const list = [];
 
  const month = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];

  const [searchText, setSearchText] =  useState("");

  const createNewForm = () =>
  {
    router.push("/create-form");
  }

  const handleSearchChange = useCallback((e) => {
    setSearchText(e.target.value)
  }, []);


  const getDate = (date) =>
  {
    const dateVal = new Date(date);
    let mnth = month[dateVal.getMonth()];
    let day = dateVal.getDate();
    let year = dateVal.getFullYear();
    return day+" "+mnth+", "+year
  }


  function truncate(str, n) {
    if(str)
    return str.length > n ? str.substr(0, n - 1) + "..." : str;

    else
    return null;
  }

 


    

  return (
       <div className="bg-super-white mt-10">
         { <><div className="flex items-center mb-10">
             
              <div  className="cursor-pointer rounded-xl text-black py-3 px-5 font-bold text-xl">
               Ideas
              </div> 

               <div onClick={createNewForm} className="cursor-pointer rounded-xl bg-super-text-light-blue py-3 px-5 ml-auto text-white mr-10">
                create a new idea
              </div>   
          </div> 
          <div className="w-full">
          <div className="h-[70vh] overflow-y-auto">
                <table className="table w-full text-super-table-text">
                  <thead className="border-none">
                    <tr className="text-[#99A2B9] !normal-case !text-sm !font-normal">
                      {/* <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !lowercase !font-normal">status</th> */}
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Form Name</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Collection Name</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal"> Max Responses</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal"> Status</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Created</th>
                      <th  className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal"></th>
                    </tr>
                  </thead>
                  <tbody className="">
                   {list.length >0 &&  list.map((form,index) => (
                       <>{form.title.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1  &&
                       <tr className="!bg-super-white ">
                          {/* <td className="!bg-super-white text-center !border-b !border-super-border-table">
                           {(form.status=="Initiated" || form.status=="Draft" || form.status=="PublishInitiated" )&& <CheckboxUnselected className="cursor-not-allowed"></CheckboxUnselected>} 
                             {  <CheckboxSelected  onClick={()=>toggleActivate(form?.id,"deactivate")} className="cursor-pointer"></CheckboxSelected>  }
                          </td> */}
                         {(form.status != "Initiated" && form.status != "Draft" ) && <td className=" !bg-super-white font-semibold !border-b !border-super-border-table">{truncate(form.title,30)}</td> }
                         {(form.status == "Initiated" || form.status == "Draft" ) && <td   className="cursor-pointer  !bg-super-white font-semibold !border-b !border-super-border-table text-super-primary-blue ">{truncate(form.title,30)}</td> }
                          <td className="!bg-super-white !border-b !border-super-border-table">{truncate(form.collectionName,30)}</td>
                          <td  className="!bg-super-white !border-b !border-super-border-table">{form.maxResponse}</td>
                          <td  className="!bg-super-white !border-b !border-super-border-table">
                             <span className={"!lowercase  rounded-lg py-1 px-2 " + (form.status=="Initiated" && " bg-super-intiated ") + (form.status=="Draft" && " bg-super-lite-violet ") + (form.status=="Active" && " bg-super-published ") + (form.status=="OutOfCredit" && " bg-super-outofcredit ") + (form.status=="PublishInitiated" && " bg-super-outofcredit ") + (form.status=="PaymentInitiated" && " bg-super-lite-violet ") + (form.status=="PaymentVerified" && " bg-super-intiated ")} >
                                  {form.status == "PublishInitiated" && <>Intiate Publish</>}
                                  {form.status == "PaymentInitiated" && <>Payment Intiated</>}
                                  {form.status == "PaymentVerified" && <>Verified Payment</>}
                                  {(form.status != "PublishInitiated" && form.status != "PaymentInitiated" && form.status != "PaymentVerified" ) &&  <>{form.status}</>}
                                 
                             </span>
                          </td>
                          <td  className="!bg-super-white !border-b !border-super-border-table">{getDate(form.createdAt)}</td>
                          <td className="!bg-super-white !border-b !border-super-border-table">
                             <DropDownOptions form={form}></DropDownOptions>
                          </td>
                        </tr>  
                        }</>   
                      ))
                      
                      }

                  </tbody>
                </table>
             </div>  

          </div>
          </>  }   
          
       </div>
  );
};
