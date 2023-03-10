
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import { AllFilters } from "./AllFilters";


export const AllFiltersModal = () => {
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
      className="overflow-y-visible w-[500px] h-[615px]"
      mainModalClassName=" lg:flex hidden "
    >
        <AllFilters></AllFilters>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><AllFilters></AllFilters></div>
    </>

  );
};
