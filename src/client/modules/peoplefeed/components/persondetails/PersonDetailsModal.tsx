import { Modal } from "client/modules/modal/Modal";
import {PersonDetails} from "./PersonDetails";
import { useRouter } from 'next/router';
import {useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "client/shell/store";


export const PersonDetailsModal = () => {

  const router = useRouter();
  const { modal} = router.query;
  const emailadded = useSelector((state: RootState) => state.landingpage.emailadded);

  const handleClose = useCallback(() => {
    const query = { ...router.query };
    if (modal === "person-details") {
     delete query.modal;
     delete query.id;
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
       open={modal === "person-details"}
       onClose={handleClose}
       className= {"custom-modal-top  !max-w-full  !p-0 overflow-y-visible  h-[600px] " }
       mainModalClassName=" flex  modal-bottom lg:modal-middle"
     >
      
      <PersonDetails></PersonDetails>   
                 
        
      </Modal>
    </>
 );
}
