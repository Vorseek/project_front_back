import React from "react";
import PostItem from "../PostItem";

const PostsList = ({posts}) => {
  return (
    <div className="post-items">
      {
        posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))
      }
    </div>
  )
}
export default PostsList;