
import { Modal } from "client/modules/modal/Modal";
import { GroupType } from "./GroupType";
import { useRouter } from "next/router";


export const GroupTypeModal = () => {
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
        <GroupType></GroupType>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><GroupType></GroupType></div>
    </>

  );
};
