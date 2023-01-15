import  { useRouter } from 'next/router';
import actionList from "client/shell/actions";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { RootState } from "client/shell/store";

export const MasterLoginPage = () => {

  const [pwddValue,setPwddValue] = useState("");
  const accessToken = useSelector((state: RootState) => state.login.accessToken);
  const router = useRouter();

  const login =() =>
  {
    actionList.adminLogin({masterPassword:pwddValue}); 
  }

  const handlePasswordChange = (e) => {
    setPwddValue(e.target.value);
   
  };

  useEffect(() => {
    // if connected signup
    if (accessToken) {
      
      if(localStorage.getItem('jwt') != null)
      {
        router.push("/people");
      }
     
    }
   
  }, [accessToken]);
  

  useEffect(() => {
    // if connected signup
    if (localStorage.getItem('jwt') != null) {
     
        router.push("/people");
          
    }
   
  }, []);

  
  return (
    <div className="w-full h-screen bg-super-light-pink flex items-center">
            <div className="form-control mx-auto max-w-xs">
              <label className="label">
                <span className="label-text text-lg font-bold">Enter master password</span> 
              </label>
              <input  type="password" value={pwddValue}  onChange={handlePasswordChange} autoFocus placeholder="Type here" className="mt-1 focus:outline-none input input-bordered w-full" />     
              <button onClick={login} className="mt-4 font-['Poppins'] text-super-color-primary bg-super-color-secondary-light rounded-lg py-3 px-9 ">Login</button>      
           </div>
    </div>
  );
};
