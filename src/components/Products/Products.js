import React  from "react";
import Header from "../Header/Header";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Products =()=>{
    const data = useLoaderData();

    console.log(data)
    return(
        <div>   
            {
                data.map(user => <User key={user.id} user = {user}></User>) 
            }
            <p>Hi from products</p>
        </div>
    )
}

export default Products;