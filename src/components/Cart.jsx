import { useSelector,useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../utils/cartslice";

const Cart=()=>{
    const cartitem = useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleclearcart=()=>{
       dispatch(clearcart());
    }

  return(
    <div className="shadow-md  rounded-2xl w-[720px] ml-[200px] mt-10 overflow-hidden">
      <div className="flex justify-between  bg-pink-100">
      <div className="flex">
      <img className="w-13" src="./cart.svg"/>
      <h1 className="text-2xl font-bold pt-2.5"><span className="text-gray-700">Your cart</span></h1>
      <span className="bg-red-400 text-white text-xs font-bold px-2 py-1 h-6 mt-3.5 ml-2 rounded-full">
          {cartitem.length}
      </span>
      </div>
      <div className="m-2.5  h-8 w-26 border-1 border-red-400 rounded-md bg-white">
        <button className="text-sm pt-1.5 text-red-500 font-medium pl-1 hover:cursor-pointer " onClick={()=>handleclearcart()}>🗑️Clear Cart</button>
      </div>
      </div>
      <div className="bg-white">
        {cartitem.length===0 && (<h1 className="m-3 font-medium">Cart is empty. Add Items to the cart!!</h1>)}
      <ItemList items={cartitem}/>
      </div>
    </div>
  )
}

export default Cart;