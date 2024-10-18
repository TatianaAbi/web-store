import React, { useContext } from "react"
import { ContextShopping } from "../context/context"
import { FaUserCircle } from "react-icons/fa";

function MyAccount(){
   const context = useContext(ContextShopping)
   const resetForm = ()=>{
    context.setFormData({})
    context.setSubmit(false)
   }
    return(
       <div className="flex flex-col items-center w-full h-screen">
           <section className="flex items-center justify-center my-10 h-1/4">
           <FaUserCircle className="w-full h-full text-gray-300"/>
           </section>
           <section className="">
               <p className="text-xl">name:</p>
               <p className="text-xl font-bold" >{context.submit ? context.formData.name : 'guest'}</p>
               <button className="w-20 text-white bg-gray-700 h-7 hover:bg-slate-400" onClick={resetForm}>salir</button>
           </section>

       </div> 
    )
    
}

export { MyAccount }