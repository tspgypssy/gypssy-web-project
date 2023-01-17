
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  CalendarFilter } from "./CalendarFilter";


export const CalendarFilterModal = () => {
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
      className="overflow-y-visible w-[500px] h-[571px]"
      mainModalClassName=" lg:flex hidden "
    >
        <CalendarFilter></CalendarFilter>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><CalendarFilter></CalendarFilter></div>
    </>

  );
};
