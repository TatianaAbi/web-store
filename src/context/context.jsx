import { createContext, useState,useEffect } from "react";
import React from "react";

export const ContextShopping = createContext()

export const ContextShoppingApp =({children})=>{
    const [count,setCount]= useState(0)
    const [sidebar,setSidebar] = useState(false)
    const [cartShop,setCartShop] = useState(false)
    
    const [submit,setSubmit] = useState(false)

    const [sidebarData,setSidebarData]= useState(null)
    const [cartProductsData,setCartProductsData] = useState([])

    const [search,setSearch]= useState("")
    const [filterItems,setFilterItem] = useState(null)

    const [items,setItems]= useState(null)
    const [totalPrice,setTotalPrice] = useState(0)

    const [formData,setFormData] = useState({})

    const removeItemCart = (id)=>{
       const newProducts = [...cartProductsData]
       const indexProduct = newProducts.findIndex(product => product.id === id)
       if(newProducts[indexProduct].quantity > 1){
        newProducts[indexProduct].quantity--
       }else{
        newProducts.splice(indexProduct,1)
        setCartProductsData(newProducts)
       }
       setCount(count - 1)
    }

    const closeSideBar = () => setSidebar(false)
    const openSideBar = () => {
        setSidebar(true)
        setCartShop(false)
    }
    const closeCartShop = () => setCartShop(false)   
    const openCartShop = ()=>{
        setCartShop(true) 
        setSidebar(false)
    }

    const addCart =(productDetail)=>{
        let  newCarts = []
              
        const indexProduct =  cartProductsData.findIndex((product)=> 
            product.id === productDetail.id
        )
        if(indexProduct >= 0){
            newCarts = [...cartProductsData]
            newCarts[indexProduct].quantity++
            newCarts[indexProduct].price += productDetail.price
        }else{
            newCarts = [...cartProductsData, {...productDetail,quantity:1} ]
        }
        const getTotalPrice = newCarts.reduce((total,item)=> total + item.price,0) 
        setTotalPrice(getTotalPrice)
        setCount(count + 1)  
        setCartProductsData(newCarts)
    }
    const filterItemsTitle = (items,search)=> {
       return items?.filter(item=> item.title.toLowerCase().includes(search.toLowerCase()))
    }
     useEffect(()=>{
        setFilterItem(filterItemsTitle(items,search))
     },[items,search])

     const updateFormData = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };

    return(
        <ContextShopping.Provider value={{
            removeItemCart,
            filterItems,
            items,
            setItems,
            setSearch,
            search,
            cartShop,
            openCartShop,
            closeCartShop,
            addCart,
            sidebar,
            openSideBar,
            closeSideBar,
            count,
            setCount,
            sidebarData,
            setSidebarData,
            cartProductsData,
            totalPrice,
            formData,
            setFormData,
            updateFormData,
            submit,
            setSubmit
        }}>
            {children}
        </ContextShopping.Provider>
    )
}