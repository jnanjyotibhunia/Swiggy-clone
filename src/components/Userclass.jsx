import React from "react"

class Userclass extends React.Component{
  constructor(){
    super();
  this.state={
     userinfo:{
         name:"username",
         
      }  
     }
   }
    async componentDidMount(){
       const data=await fetch("https://api.github.com/users/jnanjyotibhunia");
       const json= await data.json();

       this.setState({
         userinfo:json
       });
    }

    render(){
        const {login}=this.state.userinfo;
    
        
        return(
            <div className="user-card">
                <h2>Name: {login}</h2>
                <h3>Location: Kolkata</h3>
                <h4>Contract: bhuniajnanjyoti@gmail.com</h4>
            </div>
        )
    }
}

export default Userclass;