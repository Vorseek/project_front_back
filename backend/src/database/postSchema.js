import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    postText: {
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
    }
  }
)


export default schema;