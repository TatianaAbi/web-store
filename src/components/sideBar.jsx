import React, { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { ContextShopping } from "../context/context";


function SideBar() {
    const context = useContext(ContextShopping)
    
    return(
        <aside className={`absolute top-0 right-0 w-[20rem] h-auto border-4 border-gray-100 bg-white ${!context.sidebar ? 'hidden' : null}`}>
             <section className="flex justify-between ">
                <h3>sidebar</h3>
                <TiDeleteOutline className="text-2xl cursor-pointer" onClick={()=>context.closeSideBar()}/>
             </section>
             <section>
                <img className="bg-gray-500 h-[15rem] w-full" src={context.sidebarData?.images[0]} alt={context.sidebarData?.title} />
                <div className="h-auto">
                    <div className="flex justify-between items-center">
                       <h2 className="">{context.sidebarData?.title}</h2>
                       <p className="font-bold text-2xl">$ {context.sidebarData?.price}</p>   
                    </div>
                    <p className="text-sm text-gray-600">{context.sidebarData?.description}</p>
                </div>
                    <button className="w-full h-8 bg-green-900 text-white" onClick={()=>{context.addCart(context.sidebarData)}}>comprar</button>
             </section>
        </aside>
    )
}

export {SideBar}