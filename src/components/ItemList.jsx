import Rescategory from "./Rescategory";
import { con_url } from "../utils/contants";
import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";


const ItemList =(props)=>{
   const{itemdata,items}=props;
   

   const dispatch = useDispatch();
   const handleclick=(item)=>{
      //dispatch an action
      dispatch(additem(item));
   }
 
  return(
    <div>
       {itemdata && itemdata.map((item)=>(
         <div key={item.id} className="m-2 mt-8  border-gray-300 border-b-1 flex justify-center gap-20">
          <div className="flex flex-col">
          <div className="text-lg font-medium"><span>{item.name}</span></div>
          <div className="font-medium text-red-500">₹{item.price}</div>
           <p className="mt-4 mb-4">{item.description}</p>
           </div>
           <div className="w-240 h-40">
            <div className="absolute mx-12 mt-33">
              <button className="m-auto bg-white p-2 shadow-lg rounded-lg hover:cursor-pointer"
              
              onClick={()=>handleclick(item)}
              >Add +</button>
            </div>
           <img className=" object-cover rounded-xl" src={con_url+item.imageId}></img>
           </div>
         </div>
       
      ))}

      {items && items.map((item)=>(
          <div key={item.id} className="m-2 mt-3  border-gray-300 border-b-1 flex justify-center gap-20">
          <div className="flex flex-col">
          <div className="text-lg font-medium"><span>{item.name}</span></div>
          <div className="font-medium text-red-500">₹{item.price}</div>
           <p className="mt-4 mb-4 line-clamp-2">{item.description}</p>
           </div>
           <div className="w-150 h-40 mr-2">
           <img className=" object-cover rounded-xl" src={con_url+item.imageId}></img>
           </div>
          </div>
      ))}
        
    </div>
  )
}


export default ItemList;