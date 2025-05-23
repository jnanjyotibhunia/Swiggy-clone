import Body from "./Body";
import {con_url} from "../utils/contants";
const Restaurantcard =(props)=>{
    const{resData} =props;

    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    }=resData?.info;
    
    const{
        deliveryTime
    }=resData?.info?.sla;
    return(
        <div className="w-[280px] rounded-[12px] bg-white overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg cursor-pointer">
            <img className="w-full h-45 object-cover " alt="res-logo" src={con_url+cloudinaryImageId}></img>
            <div className="px-2 py-4 break-words">
            <h4 className="text-xl font-bold mb-2">{name}</h4>
            <h4 className="text-md mb-2">{cuisines.join(",")}</h4>
            <h4 className="text-red-600 text-md font-semibold mb-2">{avgRating}</h4>
            <h4 className="mt-2">{costForTwo}</h4>
            <h4 className="mt-2">{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export const withpromotedlabel = (Restaurantcard)=>{
    return(props) =>{
        return(
            <div>
                <label className="absolute  bg-black text-white px-2 py-1 text-sm rounded z-10 
                   transition-transform duration-300 ease-in-out group-hover:-translate-y-2">Promoted</label>
                <Restaurantcard {...props}/>
            </div>
        )
    }
}
export default Restaurantcard;