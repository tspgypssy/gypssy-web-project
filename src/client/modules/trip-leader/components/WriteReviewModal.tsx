
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  WriteReview } from "./WriteReview";


export const WriteReviewModal = () => {
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
        <WriteReview></WriteReview>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><WriteReview></WriteReview></div>
    </>

  );
};
