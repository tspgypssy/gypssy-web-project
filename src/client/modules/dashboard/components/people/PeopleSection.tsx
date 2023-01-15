
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import  {  RootState } from "client/shell/store";
import { useSelector } from 'react-redux';
import { ExportJsonCsv } from 'react-export-json-csv';
import Link from "next/link";
import { Search } from "icons/Search";
import { PeopleUserFeed } from "client/modules/peoplefeed/components";
import { debounce } from "debounce";
import actionList from "client/shell/actions";

export const PeopleSection = () => {

  const router = useRouter();
  const { tab} = router.query;
  const [searchText, setSearchText] =  useState("");
  const data =useSelector((state: RootState) => state.dashboard.usersList);

  const headers = [
    {
      key: 'name',
      name: 'Name',
    },
    {
      key: 'linkedin',
      name: 'Linkedin',
    },
    {
      key: 'status',
      name: 'Status',
    }
  ]

  const [dataExp, setDataExp] =  useState([]);


  const search = useCallback(
    debounce((searchword: string) => {
      setSearchText(searchword)
    }, 200),
    []
  );
  
  const handleSearchChange = useCallback((e) => {
    search(e.target.value);        
  }, []);


  const downloadCsv = () =>{
  actionList.loadLinkedinUrls({});
  };


  return (
       <div className="bg-super-white mt-10">
         { <><div className="flex items-center mb-10">
             
              <div  className="cursor-pointer rounded-xl text-black py-3 px-5 font-bold text-xl">
               People
              </div>   
          </div> 
          <div className="flex items-center mb-5">
              <div className=" tabs tabs-boxed  w-[10.5rem] ml-5">
                  <Link href="/people"><a className={"tab "+ (!tab  && "  tab-active ")}>All</a></Link> 
                  <Link href="/people?tab=waiting"><a className = {"tab " + (tab =="waiting" && "  tab-active ")}>Waiting List</a></Link>         
              </div>

               <div className=" rounded-xl text-sm  flex items-center  ml-5  px-2  border border-super-dash-light border-opacity-50 ">
                        <Search className="w-5 h-5 inline-block mr-2.5"/>
                        <input onChange={handleSearchChange}  placeholder="Search a person..." className="cursor-text focus:outline-none placeholder:text-super-dash-light  bg-super-white w-full    2xl:py-3 py-2  mx-2"></input>
               </div>
               <button className="ml-auto mr-10 btn btn-info" onClick={downloadCsv}  >Export</button>
          </div>
          <div className="w-full">
                <PeopleUserFeed searchText={searchText}></PeopleUserFeed>  
          </div>
          </>  }   
          
       </div>
  );
};
