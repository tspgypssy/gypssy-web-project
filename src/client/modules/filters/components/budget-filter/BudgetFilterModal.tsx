
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  BudgetFilters } from "./BudgetFilters";


export const BudgetFilterModal = () => {
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
        <BudgetFilters></BudgetFilters>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><BudgetFilters></BudgetFilters></div>
    </>

  );
};
