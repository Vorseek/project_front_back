// export default function (server) {
//   server.auth.strategy('admin', 'bearer-access-token', {
//     validate: (require, token, h) => {
//       const isValid = process.env.ADMIN_TOKEN === token;
//       return {
//         isValid,
//         credentials: {},
//         artifacts: {},
//       };
//     },
//   });
//
// }
// for JWT

export default function (server) {
  server.auth.strategy('admin', 'jwt',  { key: process.env.SECRET_OR_PRIVATE_KEY,
    validate: async function (decoded, request, h ) {

      // do your checks to see if the person is valid
      const user = process.env.ADMIN_ID === decoded.id;
      if (!user) {
        return { isValid: false };
      } else {
        return { isValid: true };
      }
    }
  })
}