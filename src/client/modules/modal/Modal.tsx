import cs from "classnames";
import { useCallback, useEffect } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  className?: string
};

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  mainModalClassName=" ",
  className,
}) => {
  // temp fix
  const style={
    "align-items":"start !important"
  }

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, []);

  
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div 
      className={cs("modal backdrop-blur-[6px]  w-full rounded-lg ",mainModalClassName, {
        " modal-open ": open
      })}
      onClick={onClose}
    >
      <div  className={cs("modal-box w-6/12 max-w-5xl  z-50 lg:mt-[3%]  rounded-xl bg-super-white relative p-6 blur-none ", className)} onClick={e => e.stopPropagation()}>
        <label htmlFor="">
          {children}
        </label>
      </div>
    </div>
  );
};
