import Restaurantcard,{withpromotedlabel} from "./Restaurentscard";
import reslist from "../utils/mockdata";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Body = ()=>{
    const [filteredrestaurant,setfilteredrestaurant]=useState(reslist);
    
    const[searchtext,setsearchtext]=useState("");
    
    useEffect(()=>{
      fetchData();
    },[]);
 
    const fetchData = async() =>{
       
        const data= await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5743545&lng=88.3628734&carousel=true&third_party_vendor=1"); 
        const json=await data.json();
        console.log(json);
        
        setfilteredrestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);        
    };
   
    const Rescardwithpromoted=withpromotedlabel(Restaurantcard);
    
    if(filteredrestaurant.length===0){
        
        return <h1>Loading....</h1>
        
    }
    
    return(
        <div className="body bg-gray-50">
            <div className="flex">
                <div className="m-5" >
                    <input type="text" className=" ml-5 border-solid border-black border-1 rounded-xl h-6.5 w-45 p-2" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                    }} ></input>
                    <button className="bg-green-300 px-3 py-1 m-2 rounded-sm hover:cursor-pointer" onClick={()=>{
                       
                      //console.log(searchtext);
                      const searchrestaurant=filteredrestaurant.filter((res)=>
                        
                        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                      );
                        setfilteredrestaurant(searchrestaurant);
                    }}
                    >Search</button>
                </div>
                <button className="bg-amber-400 px-4 py-1 m-6 rounded-md hover:cursor-pointer"
                onClick={()=>{
                    const topRatedRestaurants=filteredrestaurant.filter(
                         (res)=>res.info.avgRating>4.2
                    );
                    setfilteredrestaurant(topRatedRestaurants);
                }}
                >Top Restaurant</button>
            </div> 
            <div className="flex flex-wrap gap-20 p-5 justify-center mt-10">
                 {
                    filteredrestaurant.map(restaurant => 
                    <Link style={{ textDecoration: 'none', color: 'inherit' }} key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                        
                        {
                            restaurant.info.promoted ? (<Rescardwithpromoted resData={restaurant}/>):(<Restaurantcard resData={restaurant}/>)
                        }
                        
                    </Link>)
                 }
            </div>
        </div>
    )
}

export default Body;