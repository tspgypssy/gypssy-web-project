
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";

import {  SearchLeader } from "./SearchLeader";


export const SearchLeaderModal = () => {
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
      className="overflow-y-visible w-[600px] h-[658px]"
      mainModalClassName=" lg:flex hidden "
    >
       
        <SearchLeader></SearchLeader>
      
    </Modal>
     <div className="lg:hidden block !p-0"><SearchLeader></SearchLeader></div>
    </>

  );
};
