
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import { useState } from "react";
import { LoginPage } from "./LoginPage";
import { useSelector } from "react-redux";
import { RootState } from "client/shell/store";
  

export const LoginPageModal = () => {
  const router = useRouter();
  const pageSel =useSelector((state: RootState) => state.login.pageSel);
 
  const handleClose = () => {
    const query = router.query;
    delete query.modal;
    router.push({
      query: {
        ...query,
      },
    });
  };



  return (
    <>
    <Modal
      open
      onClose={handleClose}
      className={"overflow-y-visible " + (pageSel == "enter-mobile" && " w-[500px] h-[390px] ") + (pageSel == "enter-otp" && " w-[500px] h-[445px] ") + (pageSel == "create-profile" && " w-[500px] h-[645px] ")}
      mainModalClassName=" lg:flex hidden "
    >
        <LoginPage></LoginPage>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><LoginPage></LoginPage></div>
    </>

  );
};
