import React, { useContext } from "react";
import { ContextShopping } from "../context/context";

function Card(data) {
  const context = useContext(ContextShopping)
  const clickCard = (productDetail)=>{ 
    context.openSideBar()
    context.setSidebarData(productDetail)
  }

  const addToCart =(data)=>{
    context.addCart(data)
    context.openCartShop()
  }

  return (
    <div className="relative cursor-pointer rounded-lg  w-56 h-70 shadow-md mb-6" onClick={()=>clickCard(data.data)}>
      <section className="h-3/4">
        <img className=" bg-cover bg-gray-500 h-full w-full" src={data.data.images[0]} alt={data.data.title} />
        <span className="absolute bg-white/60 rounded-full h-6 w-6 text-lg flex items-center justify-center top-3 left-48" onClick={()=>{addToCart(data.data)}}>+</span>
        <div className="absolute top-[9.5rem] bg-white/60 rounded-lg px-3 text-sm ">{data.data.category.name}</div>
      </section>
      <section className="flex justify-between px-3">
        <p>{data.data.title}</p>
        <p className="text-lx font-bold ">${data.data.price}</p>
      </section>
    </div>
  );
}

export { Card };
