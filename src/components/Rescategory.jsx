import Res1 from "../utils/Res-menu-data";
import { useState } from "react";
import ItemList from "./ItemList";

const Rescategory=()=>{
    const menulist=Res1[0];
    const[showitem,setshowitem]=useState(false);
    const handleclick=()=>{
      setshowitem(!showitem);
    }
 return(
    <div>
    
     <div className="w-180 mx-auto my-15 p-3 bg-white shadow-xs rounded-2xl hover:cursor-pointer" >
       <div className="flex justify-between" onClick={handleclick} >
       <span className="font-semibold">Recommended(2)</span>
       <span>⬇️</span>
       </div>
       {showitem && <ItemList itemdata={menulist.info}/>}
     </div> 
    </div>
 )
}

export default Rescategory;