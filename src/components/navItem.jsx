import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextShopping } from "../context/context";

function NavItems({name,link}) {
    return(
        <li className="navItems">
            <NavLink
               to={`/${link}`}
               className={({ isActive }) => {
               isActive ? "underline" : undefined;
               }}
            >
        {name}
        </NavLink>  
        </li>

    )
}

export {NavItems}