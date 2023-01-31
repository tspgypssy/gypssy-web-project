
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  AddVouchers } from "./AddVouchers";


export const AddVouchersModal = () => {
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
      className="overflow-y-visible w-[500px] h-[640px]"
      mainModalClassName=" lg:flex hidden "
    >
        <AddVouchers></AddVouchers>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><AddVouchers></AddVouchers></div>
    </>

  );
};
