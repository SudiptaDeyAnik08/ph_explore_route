import React from "react";

import '../User/User.css'
import { Link } from "react-router-dom";

const User=({user})=>{
    return(
        <div className="user">
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p><small>User Name: <Link to={`/user/${user.id}`}>{user.username}</Link></small></p>
        </div>
    )
}

export default User;