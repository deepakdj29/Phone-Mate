
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen , children}) => {
  return createPortal (
   <>
  { isOpen && (
        <div className=" grid items-center backdrop-blur top-0 z-40 h-screen w-screen absolute " >
        <div className=" m-auto z-50 relative min-h-[200px] min-w-[280px] bg-white p-4 ">
    
        <div className="flex justify-end">
        <AiOutlineClose 
        onClick={onClose} 
        className="text-2xl" />
             </div>
             {children}
                </div>

              
    
        
        </div>
    
    )}
   
   </>,document.getElementById("modal-root")
  )
}

export default Modal