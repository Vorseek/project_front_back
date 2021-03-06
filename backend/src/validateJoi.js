import Joi from "@hapi/joi";

const schema = {
  register: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
    name: Joi.string().min(2).required(),
    surname: Joi.string().min(2).required(),
    birthDate: Joi.string().required()
   }),
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
  }),
  info: Joi.object({
    id: Joi.string().required(),
    name: Joi.string().min(2),
    surname: Joi.string().min(2),
    password: Joi.string().min(3),
    birthDate: Joi.string(),
  }),
  postCreate: Joi.object({
    postTitle: Joi.string().required(),
    postText: Joi.string().required(),
    userId: Joi.string().required(),
  }),
  commentAdd: Joi.object({
    commentText: Joi.string().required(),
    userId: Joi.string().required(),
    postId: Joi.string().required(),
  }),
}

export default schema