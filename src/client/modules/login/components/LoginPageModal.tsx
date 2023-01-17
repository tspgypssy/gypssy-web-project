
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import { LoginPage } from "./LoginPage";


export const LoginPageModal = () => {
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
      className="overflow-y-visible w-[500px] h-[625px]"
      mainModalClassName=" lg:flex hidden "
    >
        <LoginPage></LoginPage>      
      
    </Modal>
     <div className="lg:hidden block !p-0"><LoginPage></LoginPage></div>
    </>

  );
};
