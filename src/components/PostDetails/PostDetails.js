import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

function PostDetails() {
    const postDetails = useLoaderData();

    const {title,body,id} = postDetails;
    

    const navigate = useNavigate();
    const handelNavigate = () =>{
        navigate(`/user/${id}`)
    }

  return (
    <div>
        <h1>Title: {title}</h1>
        <p>body: {body}</p>

        <button onClick={handelNavigate}>Get the Author</button>
    </div>
  )
}

export default PostDetails;