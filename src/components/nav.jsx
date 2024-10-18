import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLocalGroceryStore } from "react-icons/md";
import { IoOptionsOutline } from "react-icons/io5";
import { ContextShopping } from "../context/context";
import { NavItems } from "./navItem";

function NavBar() {
  const context = useContext(ContextShopping)
  const [lock,setLock] = useState(true)

  return (
    <nav className="flex justify-between h-10 px-3 border-b-2 border-gray-300 nav-bar items-">
      <IoOptionsOutline onClick={()=>{setLock(!lock)}} className="w-10 h-10 lg:hidden"/>
      <ul className={`${lock  ? 'hidden' : undefined} lg:flex gap-4 items-center`} >
        <li className="hidden text-xl font-bold nav_logo lg:block">
            Shopi
        </li>
        <NavItems link="" name="All" />
        <NavItems link="clothes" name="Clothes" />
        <NavItems link="electronics" name="Electronics" />
        <NavItems link="furniture" name="Furniture" />
        <NavItems link="shoes" name="shoes" />
    
      </ul>
      <ul className={`${lock  ? 'hidden' : undefined} lg:flex gap-4 items-center`}>
        <li className={`${!context.submit ? 'hidden' : ''}`}>
          <NavLink
            to="/myAccount"
            className={({ isActive }) => {
              isActive ? "underline" : undefined;
            }}
          >
            {context.submit ? context.formData.name : 'guest'}

          </NavLink>
        </li>
        <li className="nav_my-order">
          <NavLink
            to="/myOrder"
            className={({ isActive }) => {
              isActive ? "underline" : undefined;
            }}
          >
            My Orders
          </NavLink>
        </li>
        <li className={`nav_sign-out  ${context.submit ? 'hidden' : undefined}`}>
          <NavLink
            to="/SignIn"
            className={({ isActive }) => {
              isActive ? "underline" : undefined;
            }}
          >
            Sign In
          </NavLink>
        </li>
        <li className="relative nav_cart">
            <MdLocalGroceryStore onClick={()=>{context.openCartShop()}} />
            <p className="absolute w-5 h-5 text-sm text-center text-white bg-green-300 rounded-full right-2 top-3">{context.count}</p>
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };
