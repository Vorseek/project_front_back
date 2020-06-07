import controllers from "./controllers.js";
import validateJoi from "./validateJoi.js";

export default [
  {
    method: 'POST',
    path: '/user/register',
    handler: controllers.register,
    options: {
      validate: {
        payload: validateJoi.register,
      }
    }
  },
  {
    method: "POST",
    path: '/user/login',
    handler: controllers.login,
    options: {
      validate: {
        payload: validateJoi.login,
      }
    }
  },
  {
    method: "GET",
    path: '/user/info',
    handler: controllers.info,
    // options: { auth: 'admin' }
  },
  {
    method: "PUT",
    path: "/user/info",
    handler: controllers.editInfo,
    options: {
      auth: 'user',
      validate: {
        query: validateJoi.info,
      }
    }
  },
  {
    method: "GET",
    path: "/user/delete",
    handler: controllers.userDeleted,
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
    handler: controllers.postCreate,
    options: {
      auth: 'user',
      validate: {
        payload: validateJoi.postCreate,
      }
    }
  }
]

