
import Lottie from "lottie-react";
import groovyWalkAnimation from "client/images/startup-business.json";


export const ComingSoon = () => {


    return (
    
    <div className="h-screen bg-super-white w-full "> 
            <div className="w-full items-center flex pt-24 justify-center"> <div className=" ">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
              </div>  
            </div>
          <div className="m-5 mx-2 text-center">
            <p className="text-xl mb-2 font-semibold ">
            Launching soon...
            </p>
            <p className="text-sm text-super-table-text">
              We are working towards providing you 
            
            </p>
            <p className="text-sm text-super-table-text">
            with a great mobile experience.
            
            </p>
            <p className="text-sm text-super-table-text">
              Until then, kindly access this website on a desktop.   
            </p>
          </div>
    </div>

    )}