'use strict';
import dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(path.resolve(), './.env')
})
import Hapi from '@hapi/hapi';
import routesArr from './routes.js';
import hapiAuthJwt2 from "hapi-auth-jwt2";
import Inert from "@hapi/inert";
import makeAdminAuth from './auth/adminAuth.js';
import makeUserAuth from './auth/userAuth.js';


const init = async () => {

  const server = Hapi.server({
    port: parseInt(process.env.PORT || '3010', 10),
    host: 'localhost',
    routes: {
      validate: {
        failAction: (req, h, err) => {
          throw err;
        }
      }
    }
  });

  await server.register([
    hapiAuthJwt2,
    Inert,
  ]);

  makeAdminAuth(server);
  makeUserAuth(server);

  server.route(routesArr);


  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

  console.log(err);
  process.exit(1);
});

init();


