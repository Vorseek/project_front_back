import controllers from "./controllers.js";
import validateJoi from "./validateJoi.js";

export default [
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
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
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
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
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: '/user/info',
    handler: controllers.info,
    // options: { auth: 'admin' }
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
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
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "GET",
    path: "/user/delete",
    handler: controllers.userDeleted,
    options: { auth: 'user' },
  },
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
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
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    method: "POST",
    path: "/post/create",
    handler: controllers.postCreate,
    options: {
      auth: 'user',
      validate: {
        payload: validateJoi.postCreate,
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
    path: "/user",
    handler: controllers.post,
  }

]

