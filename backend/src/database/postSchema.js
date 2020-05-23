import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    text: {
      type: mongoose.Schema.Types.String,
       required: true
    },
    id: {
      type: mongoose.Schema.Types.String,
      required: true,
    },

  }
)


export default schema;