import Navbar from "./components/Navbar"
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { db } from './config/firebase'
import ContactCard from "./components/ContactCard";

import AddandUpdate from "./components/AddandUpdate";
import useDisclose from "./hooks/useDisclose";
import NotFound from "./components/NotFound";

const App = () => {

  const[contacts,setContacts]=useState([])
  const {isOpen, onClose, onOpen} =useDisclose(false)




  useEffect(() =>{
    const getContacts = async () => {
      try{

        const contactsRef = collection (db,"contacts");
        onSnapshot(contactsRef,(snapshot) =>{
          const contactList =  snapshot.docs.map((doc) => {
            return{
              id: doc.id,
              ...doc.data()
          }
          });
          setContacts(contactList);
          return contactList;
        })

      }
      catch(error){
        console.log(error);
      }
    }

    getContacts();

  },[]);


  const filterContacts =(e)=>{
    const values = e.target.value;
    const contactsRef = collection (db,"contacts");
    onSnapshot(contactsRef,(snapshot) =>{
      const contactList =  snapshot.docs.map((doc) => {
        return{
          id: doc.id,
          ...doc.data()
      }
      });

      const filterContacts = contactList.filter(contact => contact.name.toLowerCase().includes(values.toLowerCase()))



      setContacts(filterContacts);



      return filterContacts;
    })
  }

  return (
   <>
    <div className="max-w-[370px] mx-auto px-4 ">
      <Navbar />
     <div className="body flex  gap-2 ">
     <div className="relative flex items-center flex-grow">
        <FiSearch className="absolute ml-1 text-3xl text-white " />
        <input onChange={filterContacts}
        type="text" className="flex-grow border text-white rounded-md bg-transparent border-white h-10
        pl-10"   />
      </div>
      <AiFillPlusCircle 
      onClick={onOpen}
      className="text-4xl text-white cursor-pointer"/>
     
     </div>
     <div className="mt-4 flex-col gap-3 flex">
      { contacts.length <= 0 ? <NotFound /> :   contacts.map((contact) => (
      <ContactCard key={contact.id} contact={contact} />
          )) }
    </div>

    </div>

    <footer className="fixed bottom-0 w-full text-sm  text-center text-zinc-500 py-2">
        Created by <span className="text-zinc-400">Deepak Bhatt</span> 
      </footer>


   <AddandUpdate onClose={onClose}
   isOpen={isOpen} />

   <ToastContainer
    position="bottom-center"
    />

   </>
  )
}

export default App