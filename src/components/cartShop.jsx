import { useContext } from "react"
import { ContextShopping } from "../context/context"
import { OrderCard } from "./orderCard"

function CartShop(){
    const context = useContext(ContextShopping)
    return(
        <div className={`absolute top-0 right-0 w-80 h-auto bg-white shadow-2xl ${!context.cartShop ? 'hidden':null  } `}>
            <section className="flex justify-between px-3">
                <h3 className="font-bold">My Order</h3>
                <span className="cursor-pointer" onClick={()=>{context.closeCartShop()}}>X</span>
            </section>
            <section className="flex flex-col justify-center items-center">
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
        </div>
    )
}

export {CartShop}