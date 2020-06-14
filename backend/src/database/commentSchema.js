import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    commentText: {
      type: mongoose.Schema.Types.String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.String,
      required: true,
    } ,
  }
)


export default schema;