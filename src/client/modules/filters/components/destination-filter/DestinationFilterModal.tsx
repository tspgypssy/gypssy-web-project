
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  DestinationFilters } from "./DestinationFilters";


export const DestinationFilterModal = () => {
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
      className="overflow-y-visible w-[500px] h-[648px]"
      mainModalClassName=" lg:flex hidden "
    >
        <DestinationFilters></DestinationFilters>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><DestinationFilters></DestinationFilters></div>
    </>

  );
};
