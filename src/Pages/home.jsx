import React, { useContext, useEffect } from "react"
import { Card } from "../components/card"
import { Search } from "../components/search"
import { SideBar } from "../components/sideBar"
import { ContextShopping } from "../context/context"
import { CartShop } from "../components/cartShop"
import { useParams } from "react-router-dom"

function Home(){
   const context = useContext(ContextShopping)
   const {category} = useParams()

   useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => context.setItems(data))
   },[])

   const renderView = ()=>{
     let renderItems = context.search?.length > 0 ?  context.filterItems : context.items
     
     if(category !== undefined && renderItems !== null){
        const newRender = renderItems.filter((item)=>{
         if(item.category.name.toLowerCase() == category.toLowerCase()){
             return item
         }
        })
         renderItems = newRender
      }
     
     if(renderItems?.length > 0){
       return  renderItems.map((item)=>(
           <Card key={item.id} data={item}   />
         ))
     }else{
     return <p>no se encontro {context.search}</p>
     }
      } 

    return(
       <div className="home w-full relative">
         <h2 className="text-3xl flex justify-center">SHOP </h2>
         <Search />
         <section className="m-2 grid grid-cols-4 ">
            {
               renderView()
            }
         </section>
            <SideBar  />
            <CartShop />
         
       </div> 
    )
    
}

export {Home}