import { useContext } from "react"
import { ContextShopping } from "../context/context"

function OrderCard(props) {
    const {title,imageUrl,price,id} = props
    const context = useContext(ContextShopping)
   return(
       <div className="w-[85%] flex shadow-md bg-gray-300/30 h-16 my-2">
           <div className="w-20 "> 
              <img className=" w-full h-full bg-cover bg-gray-200" src={imageUrl} alt={title} />
           </div> 

           <div className="flex w-full justify-between items-center px-3 ">
               <p className="text-sm w-4/6">{title}</p>
               <div className="flex gap-2 items-center">
                  <p className="font-bold text-">$ {price}</p>
                  <span onClick={()=> {context.removeItemCart(id)}} >x</span> 
               </div>
            
           </div>
       </div>
    )
}
export {OrderCard}