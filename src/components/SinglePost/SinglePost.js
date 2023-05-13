import React from 'react'

import './SinglePost.css'
import { Link, useNavigate } from 'react-router-dom';

function SinglePost({singlePost}) {
    const {title,body , id} = singlePost;


    const navigate = useNavigate();

    const handelNavigate = ()=>{
        navigate(`/post/${id}`)
    }

  return (
    <div className='SinglePost'>
        <h2>{title}</h2>
        <p>{body}</p>    

        <Link to={`/post/${id}`}>
            <button>Show More</button>
        </Link>

        <button onClick={handelNavigate}>Show more 2</button>

    </div>
  )
}

export default SinglePost