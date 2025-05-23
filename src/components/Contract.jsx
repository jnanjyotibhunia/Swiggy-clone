const Contract = ()=>{
    return(
        <div>
            <h1 className="font-bold text-2xl m-2 p-2">Contract page</h1>

            <form>
                <input type="text" placeholder="name" className="border-2 border-amber-300 m-2 p-2"></input>
                <input type="text" placeholder="message" className="border-2 border-amber-300 m-2 p-2"></input>
                <button className="bg-amber-300 rounded-lg m-2 p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contract;