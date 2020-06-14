import React from "react";
import PostItem from "../PostItem";

const PostsList = ({posts, cardConstructot }) => {
  return (
    <div className="post-items">
      {
        posts.map(post => (
          <PostItem key={post._id} {...post} cardConstructot={cardConstructot} />
        ))
      }
    </div>
  )
}
export default PostsList;