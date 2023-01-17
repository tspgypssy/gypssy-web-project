
import { Modal } from "client/modules/modal/Modal";
import {  TripFocus } from "./TripFocus";
import { useRouter } from "next/router";


export const TripFocusModal = () => {
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
      className="overflow-y-visible w-[500px] h-[318px]"
      mainModalClassName=" lg:flex hidden "
    >
        <TripFocus></TripFocus>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><TripFocus></TripFocus></div>
    </>

  );
};
