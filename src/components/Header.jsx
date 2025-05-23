import { logo_url } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ()=>{
    
   const[btnname,setbtnname]=useState("Login");

   const cart=useSelector((store)=> store.cart.items);


    return(
        <div className="flex justify-between bg-blue-100 text-blue-900 drop-shadow-lg mb-5">
            <div className="logo-container">
             <Link to="/"><img className="w-30" src={logo_url}></img></Link>  
            </div>
            <div className="nav-items">
                <ul className="flex m-4 gap-15 font-medium text-xl">
                   <li className="p-2">
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                    </li>
                   <li className="p-2">
                    <Link to="/About" style={{ textDecoration: 'none' }}>About us</Link>
                    </li>
                   <li className="p-2">
                    <Link to="/Contract" style={{ textDecoration: 'none' }}>Contract us</Link>
                    </li>
                   <li className="p-2">
                    <Link to="/Cart"><span className="text-2xl">🛒</span>{cart.length}items</Link>
                    </li>
                   <button className="bg-red-400 border-1 rounded-sm py-2 px-3 text-white hover:cursor-pointer" onClick={()=>{
                      btnname==="Login"? setbtnname("Logout"):setbtnname("Login");
                   }}>{btnname}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;