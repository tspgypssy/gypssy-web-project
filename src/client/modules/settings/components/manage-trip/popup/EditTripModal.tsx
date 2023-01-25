
import { Modal } from "client/modules/modal/Modal";
import { useRouter } from "next/router";
import { AddBookingDetails } from "./AddBookingDetails";
import { AddExpenseDetails } from "./AddExpenseDetails";
import { AddTravellerDetails } from "./AddTravellerDetails";
import { ContinueEditTrip } from "./ContinueEditTrip";
import { EditPackageTrip } from "./EditPackageTrip";
import {  EditTrip } from "./EditTrip";


export const EditTripModal = () => {
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
      className="overflow-y-visible w-[500px] h-[588px]"
      mainModalClassName=" lg:flex hidden "
    >
        {/* <EditTrip></EditTrip>       */}
        {/* <ContinueEditTrip></ContinueEditTrip> */}
        {/* <EditPackageTrip></EditPackageTrip> */}
        {/* <AddBookingDetails></AddBookingDetails> */}
        {/* <AddTravellerDetails></AddTravellerDetails> */}
        <AddExpenseDetails></AddExpenseDetails>
      
    </Modal>
     <div className="lg:hidden block !p-0"><EditTrip></EditTrip></div>
    </>

  );
};
