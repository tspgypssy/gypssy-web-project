
import { RootState } from "client/shell/store";
import { useEffect, useState } from "react";
import actionList from "client/shell/actions";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { DropDownOptions } from "client/modules/dashboard/components/DropDownOptions";
import { useRouter } from "next/router";

export const PeopleUserFeed = ({searchText}) => {


  const data =useSelector((state: RootState) => state.peoplefeed.data);
  const pageParam =useSelector((state: RootState) => state.peoplefeed.pageParam);
  const endReached =useSelector((state: RootState) => state.peoplefeed.endReached);
  
  const router = useRouter();
  const { tab} = router.query;
 
  const fetchMoreData = () => {
    actionList.getPeoplePageFeed({pageParam:pageParam,waitingList:"waiting"==tab?true:false,searchText:searchText});
  };

  const getAge = (val) => {
    if(val)
    return (new Date().getFullYear() - parseInt(val));
    else
    return "";
  }

  const openInNewTab = (val) => {
   if(val.indexOf("http") == -1 )
   {

    if(val.indexOf("www") == -1 )
    {
     window.open("https://www."+val, '_blank', 'noopener,noreferrer');
    } 
    else
    window.open("https://"+val, '_blank', 'noopener,noreferrer');
   
   } 
   else
   window.open(val, '_blank', 'noopener,noreferrer');

  };

  const openPersonDetails = (id) =>
  {
    router.push({
      query: {
        ...router.query,
        modal: "person-details",
        id:id
      },
    }, undefined, {
      scroll: false,
      shallow: true,
    }); 
  }
  
  // useEffect(() => {
  //   actionList.getPeoplePageFeed({pageParam:pageParam,waitingList:"waiting"==tab?true:false,reset:true}); 
  // }, []);

  useEffect(() => {
    actionList.purgePeopleLoadedData({});
    actionList.getPeoplePageFeed({pageParam:0,waitingList:"waiting"==tab?true:false,searchText:searchText}); 
  }, [tab,searchText]);

  return (
    <div className="h-[70vh] overflow-y-auto">
     <div className=" font-bold  text-xl mb-4 ml-6">No. of Users : {data?.length}</div>
     <InfiniteScroll
                      dataLength={data.length}
                      next={fetchMoreData}
                      hasMore={!endReached}
                      loader={<div className="w-full h-20 text-center mt-10">Loading...</div>}
                      height={500}
                      endMessage={
                        <p style={{ textAlign: "center" }}>
                          <div className="w-full mt-10 font-bold">Yay! You have seen it all</div>
                        </p>
                      }
                    >
    <table className="table w-full text-super-table-text">
                  <thead className="border-none">
                    <tr className="text-[#99A2B9] !normal-case !text-sm !font-normal">
                      {/* <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !lowercase !font-normal">status</th> */}
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Name</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Avatar</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Age</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Linkedin URL</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Linkedin Data</th>
                      <th className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal">Status</th>
                      <th  className="bg-[#EBEFFF] bg-opacity-20 text-sm !normal-case !font-normal"></th>
                    </tr>
                  </thead>
                  <tbody className="">
                 
                       
                            {data && data.length>0 && data.map((obj, index) => (
                             <tr className="!bg-super-white ">
                                  <td onClick={()=>{openPersonDetails(obj?.userProfile?.userId)}} className="!bg-super-white !border-b !border-super-border-table text-super-primary-blue cursor-pointer">{obj?.userProfile?.fullName}</td>
                                  <td><img src={obj?.userProfile?.profilePictureUrl} className="h-10 w-10 rounded-full "></img></td>
                                  <td className="!bg-super-white !border-b !border-super-border-table">{getAge(obj?.userProfile?.yearOfBirth)}</td>
                                  <td className="!bg-super-white !border-b !border-super-border-table"><p onClick={()=>openInNewTab(obj?.userProfile?.linkedinProfileLink)}   className="cursor-pointer text-super-primary-blue">{obj?.userProfile?.linkedinProfileLink}</p></td>
                                  <td className="!bg-super-white !border-b !border-super-border-table">
                                        <span className={"  rounded-lg py-1 px-2 " + (obj?.userInfo?.status=="InReview" && " bg-super-intiated ")  + (obj?.userInfo?.status=="Active" && " bg-super-published ") + (obj?.userInfo?.status=="Inactive" && " bg-super-intiated ")} >
                                           {obj?.userInfo?.isLinkedinProfileUpdated == false && <>Not processed</>}
                                           {obj?.userInfo?.isLinkedinProfileUpdated == true && <>Updated </>}
                                        </span>
                                  </td>
                                  <td className="!bg-super-white !border-b !border-super-border-table">
                                        <span className={"  rounded-lg py-1 px-2 " + (obj?.userInfo?.status=="InReview" && " bg-super-intiated ")  + (obj?.userInfo?.status=="Active" && " bg-super-published ")+ (obj?.userInfo?.status=="Inactive" && " bg-super-destructive ") } >
                                           {obj?.userInfo?.status == "InReview" && <>In Review</>}
                                           {obj?.userInfo?.status == "Active" && <>Active </>}
                                           {obj?.userInfo?.status == "Inactive" && <>Inactive </>}
                                        </span>
                                  </td>
                                  <td className="!bg-super-white !border-b !border-super-border-table">
                                    <DropDownOptions form={obj}></DropDownOptions>
                                  </td>
                             </tr>
                          ))}
                       
                      
                 
                  </tbody>
                 
    </table>
    </InfiniteScroll>
   
  
  </div>
  );
};
