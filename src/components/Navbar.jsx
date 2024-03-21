import React from 'react'

const Navbar = () => {
    return (
        <div className=" h-[60px] bg-white my-4 rounded-lg flex items-center justify-center gap-2 text-2xl font-medium">
            
               <div className="w-10"> <img src="/contacts.png" alt="logo" /></div>
                <h1>PhoneMate</h1>
         </div>
    )
}

export default Navbar