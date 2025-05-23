import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contract from "./components/Contract";
import Restaurentmenu from "./components/Restaurantmenu";
import Cart from "./components/Cart";
import Error from "./components/Error";
import useOnlinestatus from "./utils/useOnlinestatus";
import appstore from "./utils/appstore";



const AppLayout = ()=>{
  const value=useOnlinestatus();
  if(!value){
   return(
    <div className="error-msg">
      <h1>No internet</h1>
      <h3>Try:</h3>
      <ul>
        <li>Truning off airplane mode</li>
        <li>Truning on mobile data or wifi</li>
        <li>Checking the signal in your area</li>
      </ul>
    </div>
   )
  }

    return(
        <Provider store={appstore}>
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
        </Provider>
    )
}
 
const AppRoute= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contract",
        element:<Contract/>
      },
      {
        path:"restaurant/:resid",
        element:<Restaurentmenu/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>
  }
])



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute}/>);

 

