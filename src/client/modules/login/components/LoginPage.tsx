import React, { useCallback, useRef } from 'react'
import { LoginPage1 } from './LoginPage1';
import { LoginPage2 } from './LoginPage2';
import { LoginPage3 } from './LoginPage3';

export const LoginPage = () => {

  const tab1 = useRef();
  const tab2 = useRef();
  const tab3 = useRef();
 

  const handletab1 = () =>{
    tab1.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handletab2 = () =>{
    tab2.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handletab3 = () =>{
    tab3.current.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
   
    <div className="  font-['Nunito Sans'] ">
       
            <div className="w-screen  flex flex-nowrap overflow-x-auto ">
                  <div ref={tab1} onClick={handletab1} className="card2 w-full loginPage1">
                     <LoginPage1></LoginPage1>
                  </div>
                  <div  ref={tab2} onClick={handletab2} className="card2 w-full  loginPage2">
                     <LoginPage2></LoginPage2>
                  </div>
                  <div ref={tab3} onClick={handletab3} className="card2 w-full  loginPage3">
                      <LoginPage3></LoginPage3>
                  </div>     
            </div>
       
    </div>
   
  );
};
