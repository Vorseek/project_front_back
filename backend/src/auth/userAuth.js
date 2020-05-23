import database from '../database/connection.js';
// For bearer
// export default function (server) {
//   server.auth.strategy('user', 'bearer-access-token', {
//     validate: async (require, token, h) => {
//       // check user token in db
//       const user = await database.user.findOne({ token }) || token === process.env.ADMIN_TOKEN;
//       if (user) {
//         return {
//           isValid: true,
//           credentials: {},
//           artifacts: {},
//         };
//       }
//
//       return {
//         isValid: false,
//         credentials: {},
//         artifacts: {},
//       };
//     },
//   });
// }
// for JWT
export default function (server) {
  server.auth.strategy('user', 'jwt',  { key: process.env.SECRET_OR_PRIVATE_KEY,
    validate: async function (decoded, request, h ) {

      // do your checks to see if the person is valid
      const user = await database.user.findOne({ id: decoded.id });
      if (!user) {
        return { isValid: false };
      } else {
        return { isValid: true };
      }
    }
  })
}