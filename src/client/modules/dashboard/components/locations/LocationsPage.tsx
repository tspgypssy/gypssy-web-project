import { LeftSection } from "../LeftSection";
import {  LocationsSection } from "./LocationsSection";

export const LocationsPage = () => {


  return (
    <div className="bg-super-white w-full">
    <div className="2xl:max-w-screen-xl 2xl:mx-auto bg-super-white h-screen flex items-center">
        <div className="w-64 inline-block h-screen border-r border-opacity-[16%]   border-super-left-section flex items-center"><LeftSection ></LeftSection></div> 
        <div  className="w-full h-screen  inline-block" ><LocationsSection></LocationsSection></div>
    </div>
  </div>
  );
};
