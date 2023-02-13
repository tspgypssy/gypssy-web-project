import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarIcon } from 'icons/CalendarIcon';
import { CreateUser } from 'icons/CreateUser';
import { CreateUserEdit } from 'icons/CreateUserEdit';
import { CrossModal } from 'icons/CrossModal';
import { DownArrow } from 'icons/DownArrow';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Call } from 'icons/Call';
import { useSelector } from 'react-redux';
import { RootState } from 'client/shell/store';
import actionList from 'client/shell/actions';
import {
      ref,
      uploadBytesResumable,
      getDownloadURL 
  } from "firebase/storage";
  import {storage} from "config/firebase"



export const CreateProfile = () => {

  const router = useRouter();
  const phoneNumberSet =useSelector((state: RootState) => state.login.phoneNumber);
  const imageSrc = useSelector((state: RootState) => state.login.imageSrc);
  const [imageUploadURL,setImageUploadURL] = useState(null);
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [gender,setGender]= useState(null);
  const [age,setAge] = useState(new Date());
  const [ageDateChanged,setAgeDateChanged] = useState(false);

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June","July", "Aug", "Sep", "Oct", "Nov", "Dec"];
 
  const onAgeDateChange =(value, event)=>
  {
    setAgeDateChanged(true)
    setAge(value);
  }

  
  const convertAgeDate = () =>
  {
    let dateMDY = `${age.getDate()}th ${ monthNames[age.getMonth()]} ${age.getFullYear()}`;
    return dateMDY;
  }

  const moveToPrevPage =()=>
  {
    actionList.updatePageSel({pageSel:"enter-mobile"});
  }

  const [showCal,setShowCal] = useState(false); 
  const [percent,setPercent] = useState(null); 

  const setFalse =() =>
  {
    setShowCal(false)
  }
  const [dropdownState, setDropdownState] = useState<"open" | "closed">(
    "closed"
  );
  const toggle = useCallback(() => {
    setDropdownState((old) => (old === "closed" ? "open" : "closed"));
  }, []);

  const handleClose = () => {
      
    const query = router.query;
    delete query.modal;
    router.push({
      query: {
        ...query,
      },
    });
  }

  const createProfile = () =>
  {
      //if(!disableContinue())
      {
      //  actionList.createProfile({"avatar":imageUploadURL,"dob":age.toISOString(),"email":email,"gender":gender,"name":name,"phoneNo":phoneNumberSet})
        let dummy={
          "avatar": "https://firebasestorage.googleapis.com/v0/b/bold-club.appspot.com/o/users%2Favatars%2FtcN9hrAu0mRzyOPctHWGNqTbpCc2?alt=media&token=f1007824-25e9-4ae6-a308-83d2b9e60599",
          "dob": "1992-11-18T18:30:00.000+00:00",
          "email": "tanmaygarg92@gmail.com",
          "gender": "Male",
          "name": "Tanmay Garg",
          "phoneNo": "9381097977"
      }
      actionList.createProfile(dummy);
      //  handleClose();
      }
  }

  const disableContinue = () =>
  {
    if(name =="")
    {
      return true;
    } 

    if(!validateEmail())
    {
       return true;
    }

    if(gender == null)
    {
      return true;
    }

    return false;
  }

  const validateEmail = () => {
    if(email && email.length>0)
    {
      if (String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
      {
        return true;
        
      }
      else
      {
        return false;     
      }    
    }
    else
    {
      return false;
    }
};


const imageChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {

    let size =0;
    size += e.target.files[0].size;
  
    if(size <25*1024*1024)
    {
      actionList.updateSelectedImagePage({"imageSrc":URL.createObjectURL(e.target.files[0]),"image":e.target.files[0]});
    } 

    const storageRef = ref(storage,`/files/avatars/${e.target.files[0].name}`)
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
 
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const tempPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setPercent(tempPercent);
        },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                setImageUploadURL(url);
            });
        }
    ); 
  }
};

useEffect(() => {
   
  createProfile();
}, []);

  return (
   
    <div onClick={setFalse} className="  ">
        
        <div  className="w-full">
            <div className="w-full flex items-center py-6  border-b border-super-lighter-grey  px-5">
              <div className="h-7 w-7 mr-auto"></div>
              <p className="mx-auto font-bold">Create profile</p>
              <CrossModal onClick={handleClose} className="cursor-pointer ml-auto"></CrossModal>
            </div>

            <div className="h-[460px] overflow-y-auto px-5 py-10 ">
               <div  className=" flex items-center  w-full">
               <label>
                  <input  accept="image/png,image/jpg, image/jpeg"   onChange={imageChange} type="file" className="hidden" /> 
                  {imageSrc !=null ?
                    <img src={imageSrc} className="h-32 w-32 w-full rounded-lg mt-5  cursor-pointer"></img> 
                  : 
                  <div className="relative mx-auto">
                      <CreateUser></CreateUser>
                      <CreateUserEdit className="absolute bottom-0 right-0"></CreateUserEdit>
                  </div>                
                  }
                </label>
                
              </div>

              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}  placeholder="Your full name" className="border border-super-lighter-grey input  focus:outline-none w-full font-semibold placeholder:opacity-30" />            
                </div>                                                        
              </div>

              <div>
                  <div className="flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Age</p> 
                  </div>                     
                  <div  onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                     
                      {!ageDateChanged && <p className="font-semibold opacity-10 ml-3">Your age(mm/dd/yyyy)</p> }
                      {ageDateChanged && <p className="font-semibold ml-3">{convertAgeDate()}</p> }
                      <DownArrow className="ml-auto"></DownArrow>
                  </div>
                  {showCal && <div onClick={(e)=>{ e.stopPropagation();setShowCal(true)}} className="w-full z-20 mt-2"><Calendar  onChange={onAgeDateChange} value={age} /></div> }                                                                   
              </div>

              <div className="dropdown w-full" onClick={toggle}>
                  <div className="flex items-center mb-1 mt-4">
                      <p className="text-super-text-primary text-sm">Gender</p> 
                  </div>                     
                  <label className="w-full" tabIndex={0}>
                      <div   className="w-full cursor-pointer border border-super-lighter-grey rounded-lg flex items-center px-5 py-3">
                        
                      {gender ? <p className="font-semibold ml-3">{gender}</p> : <p className="font-semibold opacity-10 ml-3">Your gender</p>    }
                      <DownArrow className="ml-auto"></DownArrow> 
                  </div>
                 </label>
                 {dropdownState === "open" && (
                  <div className="h-[240px] overflow-x-auto mt-4">
                  <div onClick={()=>setGender("Male")}>
                      <p className="font-semibold mb-1  mt-5">Male</p>
                      <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
                  </div>

                  <div onClick={()=>setGender("Female")} >
                      <p className="font-semibold mb-1  mt-5">Female</p>
                      <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
                  </div>

                  <div  onClick={()=>setGender("Other")}>
                      <p className="font-semibold mb-1  mt-5">Other</p>
                      <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey mt-5"></div>  
                  </div>

                 </div>
                )}
            </div> 

              <div className="mt-10 flex items-top w-full">
                  <Call></Call>
                  <div className="ml-5">
                     <p className="text-sm font-semibold">Phone number</p>
                     <p  className="text-xs font-semibold">+91 {phoneNumberSet}</p>
                  </div>
                  <p onClick={moveToPrevPage} className="cursor-pointer text-xs font-semibold underline ml-auto">Edit</p>
              </div>

              <div className="w-full border-0.5 opacity-50 border-b border-super-light-grey my-5"></div>
              
              <div className="mt-5">
                <div className="form-control w-full ">
                  <label className="label !py-1 text-xs">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text"  value={email}  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your email id" className="border border-super-lighter-grey input  focus:outline-none w-full" />            
                </div>                                                        
              </div>


            </div>

       </div>

       <div className="flex items-center  border-t border-super-lighter-grey p-5 ">
          <p onClick={handleClose} className="cursor-pointer underline font-semibold">Cancel</p>
          <button onClick={createProfile} disabled={disableContinue()} className={"cursor-pointer text-white bg-black px-8 py-2.5 font-semibold rounded-[100px] ml-auto  "+(disableContinue() && " opacity-10 cursor-not-allowed  " ) } >Continue</button>
      </div>
    </div>
   
  );
};
