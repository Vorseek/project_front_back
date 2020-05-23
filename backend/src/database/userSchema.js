import mongoose from 'mongoose';


const schema = new mongoose.Schema(
  {
    email: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    name: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    surname: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    birthDate: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    token: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    id: {
      type: mongoose.Schema.Types.String,
      required: true,
    }
  },
);

export default schema;