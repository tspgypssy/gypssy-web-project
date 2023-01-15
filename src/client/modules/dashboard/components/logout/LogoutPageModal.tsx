import  {  RootState } from "client/shell/store";
import { useSelector } from 'react-redux';
import { Modal } from "client/modules/modal/Modal";
import {LogoutPage} from "./LogoutPage";
import { useRouter } from 'next/router';

import {useCallback } from "react";


export const LogoutPageModal = () => {

  const router = useRouter();
  const { modal} = router.query;
 
  const handleClose = useCallback(() => {
    const query = { ...router.query };
    if (modal === "logout") {
     delete query.modal;
     delete query.type;
    }
    router.push(
      {
        query: {
          ...query,
        },
      },
      undefined,
      {
        scroll: false,
        shallow: true,
      }
    );
  }, [router.query]);

 return (
   <>
     <Modal
       open={modal === "logout"}
       onClose={handleClose}
       className= {"custom-modal-top  !max-w-full !w-[500px] !p-0 overflow-y-visible   h-[480px] "}
       mainModalClassName=" flex  modal-bottom lg:modal-middle"
     >
      
      <LogoutPage></LogoutPage>   
                 
        
      </Modal>
    </>
 );
}
