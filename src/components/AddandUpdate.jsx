
import { Formik, Form, Field } from 'formik'
import Modal from './Modal'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'

const AddandUpdate = ({ isOpen, onClose , isUpdate, contact}) => {
    
    const addContact = async (contact) => {
        try{

            const contactRef= collection( db, "contacts" );
            await addDoc(contactRef,contact);
            toast.success("Contact Added successfully")
            onClose();
            
        }
        catch(error){
            console.log(error);
        }
    }

    const UpdateContact = async (contact,id) => {
        try{

            const contactRef = doc( db, "contacts",id );
            await updateDoc(contactRef,contact);
            toast.success("Contact Updated successfully")
            onClose();
            
        }
        catch(error){
            console.log(error);
        }
    }

    
    
    

  return (
    <div> <Modal isOpen={isOpen} onClose={onClose} >
    <Formik
    initialValues={ isUpdate ?
        {
            name: contact.name,
            email:contact.email,
        } :

        {
            name:"",
            email:""
        }

    }
    
    onSubmit={(values)=>{
        isUpdate?
        UpdateContact(values,contact.id):
        addContact(values);
    }}

    >
        <Form className="flex flex-col gap-4">
         <div className="flex flex-col gap-1">
         <label htmlFor="name">Name:</label>
            <Field name="name" type="text" required className="border h-10 rounded-md pl-2" />
         </div>
         <div className="flex flex-col gap-1">
         <label htmlFor="email">Email:</label>
            <Field name="email" type="email" required className="border rounded-md h-10 pl-2" />
         </div>
         <button className='bg-orange px-3 rounded-md  py-1.5 border self-center '>
            {isUpdate? "Update": "Add"} Contact</button>
            
        </Form>
    </Formik>
    </Modal>
    </div>
  )
}

export default AddandUpdate