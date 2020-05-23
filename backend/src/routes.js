import controlers from "./controlers.js";
import Joi from "@hapi/joi";
export default [
  {
    method: 'POST',
    path: '/user/register',
    handler: controlers.register,
    options: {
      validate: {
        payload: Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().min(8).required(),
          name: Joi.string().min(2).required(),
          surname: Joi.string().min(2).required(),
          birthDate: Joi.string().required()
        })
      }
    }
  },
  {
    method: "POST",
    path: '/user/login',
    handler: controlers.login,
    options: {
      validate: {
        payload: Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().min(8).required(),
        })
      }
    }
  },
  {
    method: "GET",
    path: '/user/info',
    handler: controlers.info,
    options: { auth: 'admin' }
  },
  {
    method: "PUT",
    path: "/user/info",
    handler: controlers.editInfo,
    options: {
      auth: 'user',
      validate: {
        query: Joi.object({
          id: Joi.string().required,
          name: Joi.string().min(2),
          surname: Joi.string().min(2),
          password: Joi.string().min(8),
          birthDate: Joi.string(),
        })
      }
    }
  },
  {
    method: "GET",
    path: "/user/delete",
    handler: controlers.userDeleted,
    options: { auth: 'user' },
  },
  {
    method: "GET",
    path: "/{file*}",
    handler: {
      directory: {
        path: './public',
        redirectToSlash: true,
        index: true,
      }
    },
  },
  {
    method: "POST",
    path: "/post/create",
    handler: controlers.postCreate,
    options: { auth: 'user' }
  }
]

