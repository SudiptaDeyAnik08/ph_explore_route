import React from 'react'
import { useLoaderData } from 'react-router-dom';

function UserDetail() {
    const userDetails = useLoaderData();
    console.log(userDetails);

    const {name,phone,username,website,email,address    } = userDetails;

  return (
    <div>
        <h1>Name:{name} </h1>
        <h2>User Name:{username}</h2>
        <h3>Phone:{phone}</h3>
        <p>Website: {website}</p>
        <p>Email:{email}</p>
        <p>Address:{address.city}</p>
    </div>
  )
}

export default UserDetail;