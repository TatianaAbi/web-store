import React from "react";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { ContextShopping } from "../context/context";

function Search(){
  const context = useContext(ContextShopping)

    return(
      <div className="flex justify-center w-full search ">
        <div className="flex justify-around h-10 m-3 border-2 border-gray-300 rounded-full shadow-md w-60 ">
        <CiSearch  className="flex self-center " />
         <input className="w-10/12 rounded-full focus:outline-none text-md" type="search " onChange={(event)=>{context.setSearch(event.target.value)}} />
       </div>
      </div>
       
    )
}

export {Search}