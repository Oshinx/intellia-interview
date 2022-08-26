import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";


function AlertNotification({ customStyles, isOpen, children }) {
  return <>{isOpen ? <div className={`${customStyles} flex flex items-center `}>
    <p className="flex-initial w-11/12 ">{children}</p>
    <p className="flex-initial w-1/12 flex  justify-end">
    <AiFillCloseCircle size='1.4em' opacity={0.5} />
    </p>
    </div> : ""}</>;
}



export default AlertNotification;
