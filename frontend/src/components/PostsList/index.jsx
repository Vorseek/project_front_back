import React from "react";
import PostItem from "../PostItem";

const PostsList = ({posts, cardConstructor }) => {
  return (
    <div className="post-items">
      {
        posts.map(post => (
          <PostItem key={post._id} {...post} cardConstructot={cardConstructor} />
        ))
      }
    </div>
  )
}
export default PostsList;