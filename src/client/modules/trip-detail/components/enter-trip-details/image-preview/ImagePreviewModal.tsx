
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import {  ImagePreview } from "./ImagePreview";


export const ImagePreviewModal = () => {
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
      className="overflow-y-visible w-[700px] h-[440px]"
      mainModalClassName=" lg:flex hidden "
    >
        <ImagePreview></ImagePreview>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><ImagePreview></ImagePreview></div>
    </>

  );
};
