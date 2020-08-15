// import mock     from './dummy';
// import _        from 'lodash';
// import * as jwt from "jsonwebtoken";
//
// const jwtConfig = {
//     "secret"   : "dummysecret",
//     "expiresIn": "2 days" // A numeric value is interpreted as a seconds count. If you use a string be sure you provide the time units
//                           // (days, hours, etc)
// };
//
//
// const authDb = {
//     users: [
//         {
//             username: "admin",
//             password: "admin",
//             role    : "admin",
//             info    : {
//                 displayName: "Kutay Celebi",
//                 email      : "mail@kutaycelebi.com"
//             }
//         }
//     ]
// };
//
// mock.onGet('/api/auth').reply((config) => {
//
//     const data = JSON.parse(config.data);
//     const {username, password} = data;
//
//     const user = _.cloneDeep(authDb.users.find(_user => _user.username === username));
//     const error = {
//         username: user ? null : 'Kullanici adi hatali',
//         password: user && user.password === password ? null : 'Sifre Hatali'
//     };
//
//     if (!error.username && !error.password) {
//
//         const token = jwt.sign({id: user.username}, jwtConfig.secret, {expiresIn: jwtConfig.expiresIn});
//         const response = {
//             user : user,
//             token: token
//         };
//         return [200, response]
//     } else {
//         return [200, {error}]
//     }
// });
