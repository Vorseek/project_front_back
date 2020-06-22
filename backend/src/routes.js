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
      },
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
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
      },
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
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
      },
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
  {

    method: "GET",
    path: "/user/delete",
    handler: controllers.userDeleted,
    options: {
      auth: 'user',
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
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
      // auth: 'user',
      validate: {
        payload: validateJoi.postCreate,
      },
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: "/post",
    handler: controllers.post,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: "/post/del",
    handler: controllers.postDel,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: "/user",
    handler: controllers.post,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
      validate: {
        payload: validateJoi.commentAdd,
      },
    },
    method: "POST",
    path: "/comment/add",
    handler: controllers.commentAdd,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: "/comment",
    handler: controllers.comment,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: "/comment/del",
    handler: controllers.commentDel,
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "POST",
    path: "/comment/edit",
    handler: controllers.commentEdit,
  },

]

