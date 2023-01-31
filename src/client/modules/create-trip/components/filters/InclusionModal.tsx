
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";

import {  Inclusion } from "./Inclusion";


export const InclusionModal = () => {
  const router = useRouter();

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
      className="overflow-y-visible w-[500px] h-[438px]"
      mainModalClassName=" lg:flex hidden "
    >
       
        <Inclusion></Inclusion>
      
    </Modal>
     <div className="lg:hidden block !p-0"><Inclusion></Inclusion></div>
    </>

  );
};
