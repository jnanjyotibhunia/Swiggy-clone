import { useEffect } from "react";
import { con_url } from "../utils/contants";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import Rescategory from "./Rescategory";


const Restaurentmenu =()=>{
   const menulist = useRestaurantmenu(); // custom hook
   // useEffect(()=>{
   //   fetchdata();
   // },[]);
   // const fetchdata=async()=>{
   //    const data=await("https://www.swiggy.com/mapi/misc_new/skeleton?lat=22.5743545&lng=88.3628734");
   //    const json=await data.json;
   //    console.log(json);
   // };
   
   return(
    <div className="flex flex-col items-center">
     <h1 className="text-5xl font-bold">{menulist.name}</h1>
     <div className="flex flex-col mt-17 border-0 border-gray-700 rounded-xl h-40 w-130 shadow-xl">
      <div className="flex justify-between">
       <h4 className="m-2 p-1 ml-5 font-medium">⭐{menulist.avgRating}(250+ ratings)</h4>
       <h4 className="m-2 p-1 mr-8 font-medium">{menulist.costForTwoMessage}</h4>
       </div>
       <h4 className="font-medium mb-2 mt-2  ml-6">🌆{menulist.city}</h4>
       <h4 className="font-medium mt-2 ml-5">🚴{menulist.slaString}</h4>
     </div>
      <Rescategory/>
     </div>
   )
}

export default Restaurentmenu;