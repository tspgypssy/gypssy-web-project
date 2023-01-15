
import Image from "next/image";
import  {  RootState } from "client/shell/store";
import { useSelector } from 'react-redux';

import { useRouter } from "next/router";
import Link from "next/link";
import { Logout } from "icons/Logout";

export const LeftSection = () => {

  const router = useRouter();
 
  const logout = () =>
  {
    router.push({
      query: {
        ...router.query,
        modal: "logout",
       
      },
    }, undefined, {
      scroll: false,
      shallow: true,
    }); 
  }

  return (
    <div className=" h-screen mx-auto">
        <div className="flex items-center mt-12 mb-10">
            <Image  className="inline-block" src="/images/dropform-dashboard.png" height={40} width={40}></Image>  
            <p className="ml-1 inline-block text-xl font-bold  text-super-color-secondary">CO FOUNDER</p>       
        </div>
        <Link href="/people"><div className= {"cursor-pointer flex items-center mt-4  bg-opacity-30 py-3 px-4 rounded-xl w-[180px] " + (router.pathname.indexOf("/people") != -1 ? " bg-super-back-sec text-super-primary-blue ": " text-super-light-text-grey")}>
            <p className="ml-1   text-sm font-semibold" >People </p>
        </div></Link>
        <Link href="/ideas"><div className= {"cursor-pointer flex items-center mt-4  bg-opacity-30 py-3 px-4 rounded-xl w-[180px] " + (router.pathname=="/ideas" ? "bg-super-back-sec text-super-primary-blue ": " text-super-light-text-grey")}>
            <p className="ml-1   text-sm font-semibold">Ideas</p>
        </div></Link>
        <Link href="/locations"><div className={"cursor-pointer flex items-center mt-4 bg-opacity-30 py-3 px-4 rounded-xl w-[180px] " + (router.pathname=="/locations" ? "bg-super-back-sec text-super-primary-blue ": " text-super-light-text-grey")}>
            <p className="ml-1   text-sm font-semibold">Locations</p>
        </div></Link>
        <Link href="/reports"><div className={"cursor-pointer flex items-center mt-4 bg-opacity-30 py-3 px-4 rounded-xl w-[180px] " + (router.pathname=="/reports" ? "bg-super-back-sec text-super-primary-blue ": " text-super-light-text-grey")}>
            <p className="ml-1   text-sm font-semibold">Reports</p>
        </div></Link>

        <div onClick={logout} className="mt-16 flex items-center  px-5 py-2 rounded-3xl cursor-pointer hover:bg-super-back-sec hover:bg-opacity-30 ">
             {/* <Logout></Logout> */}
             <p className="text-sm text-super-back-text-light-black ">Logout</p> 
        </div> 
    </div>
  );
};
