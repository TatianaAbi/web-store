import React, { useContext } from "react"
import { ContextShopping } from "../context/context"
import { useNavigate } from "react-router-dom";

function SignIn(){
   const context  = useContext(ContextShopping)
   const navegar = useNavigate()

   const handleChange = (e) => {
      const { name, value } = e.target;
      context.updateFormData(name, value);
      console.log(name,value)
    };
   
   const changeInput = (e)=>{
      e.preventDefault()
      navegar('/')
      context.setSubmit(true)
   }
    return(
       <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-40px)]" >
          <form onSubmit={changeInput} className="flex flex-col shadow-md h-[60%] gap-9">
            <div>
               <p className="text-input">name:</p>
               <input className="bg-gray-200" name="name" value={context.formData.name} onChange={handleChange}  type="text" required />
            </div>
            <div>
               <p className="text-input">email:</p>
               <input className="bg-gray-200" name="email" value={context.formData.email} onChange={handleChange} type="email" required />
            </div>
            <div>
               <p className="text-input">password:</p>
               <input className="bg-gray-200" name="password" value={context.formData.password} onChange={handleChange} type="password" required />
            </div>
            <input className="w-full h-10 bg-amber-200" type="submit"  />
          </form>
       </div> 
    )
    
}

export {SignIn}