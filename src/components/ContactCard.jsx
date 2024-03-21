import { deleteDoc, doc } from "firebase/firestore"
import { HiOutlineUserCircle } from "react-icons/hi"
import { IoMdTrash } from "react-icons/io"
import { RiEditCircleLine } from "react-icons/ri"
import { db } from "../config/firebase"
import AddandUpdate from "./AddandUpdate"
import useDisclose from "../hooks/useDisclose"
import { toast } from "react-toastify"

const ContactCard = ({ contact }) => {
    const {isOpen, onClose, onOpen} =useDisclose(false)

    const deleteContact =  async (id) => {
        try {
            await deleteDoc(doc( db,"contacts",id ))
            toast.success("Contact deleted successfully")
        } catch (error) {
            console.log(error);
            toast.failure("Contact Can't be deleted")
        }

    }



  return (
    <>
    <div key={contact.id} className="bg-yellow flex justify-between items-center rounded-lg p-2 ">
    <div className="flex gap-1 items-center">
    <HiOutlineUserCircle className="text-dark-yellow text-4xl   " />
      <div className="">
       <h2 className="text-medium ">{contact.name}</h2>
       <p className="text-sm ">{contact.email}</p>
      </div>
    </div>

       <div className="flex text-3xl ">
         <RiEditCircleLine onClick={onOpen} className="cursor-pointer" />
         <IoMdTrash  onClick={ ()=>deleteContact(contact.id) } className="text-orange cursor-pointer"/>
       </div>

     </div>

    <AddandUpdate contact={contact}
    isUpdate isOpen={isOpen} onClose={onClose}/>

     </>
  )
}

export default ContactCard