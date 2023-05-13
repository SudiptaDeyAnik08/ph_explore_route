import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SinglePost from '../SinglePost/SinglePost';

function Post() {

    const post = useLoaderData();
    console.log(post)

  return (
    <div>
      {
        post.map(singlePost => <SinglePost key={singlePost.id} singlePost={singlePost}></SinglePost>)
      }
    </div>
  )
}

export default Post