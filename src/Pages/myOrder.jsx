import React, { useContext } from "react"
import { ContextShopping } from "../context/context"
import { OrderCard } from "../components/orderCard"

function MyOrder(){
   const context = useContext(ContextShopping)
   console.log(context.cartProductsData)
    return(
       <div className="flex items-center justify-center w-full h-screen">
          <section className="flex items-center bg-center h-[65%]">
            <article className="h-full ">
            <section className="flex justify-between px-3">
               <h3 className="font-bold">My Order</h3>
            </section>
            <section className="flex flex-col items-center justify-center">
                {context.cartProductsData.length == 0 ?
                   
                   <p>not products yet</p>
                   :
                   context.cartProductsData.map(item=>(
                   <OrderCard 
                      key={item.id} 
                      id={item.id}
                      imageUrl={item.images[0]} 
                      title={item.title} 
                      price={item.price}
                    />
                   ))
                }
            </section>
            </article>
            <article className="flex flex-col items-center justify-center h-full gap-5 space-y-5 ">
               <p>total price:</p>
               <p className="text-2xl font-bold">$ {context.totalPrice}</p>
               <button className="w-40 h-10 bg-green-700 rounded-md">buy</button>
            </article>
          </section>
       </div> 
    )
    
}

export { MyOrder }