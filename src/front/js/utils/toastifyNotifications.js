import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const showNotification = (type, msg) => {
    if (type == "success") {
        return toast.success(msg)
    } else if (type == "error") {
        return toast.error(msg)
    } else if (type == "info") {
        return toast.info(msg)
    }
}

export const showLoadingNotification = (toastId, type, msg) => {
    toast.update(toastId, {
        autoClose:true,
        render:msg,
        type:type,
        isLoading:false,
   });
};