
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  AgeFilters } from "./AgeFilters";


export const AgeFilterModal = () => {
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
      className="overflow-y-visible w-[500px] h-[388px]"
      mainModalClassName=" lg:flex hidden "
    >
        <AgeFilters></AgeFilters>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><AgeFilters></AgeFilters></div>
    </>

  );
};
