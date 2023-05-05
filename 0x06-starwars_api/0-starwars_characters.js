#!/usr/bin/node

const request = require('request')

// const url = 

// request('https://swapi-api.alx-tools.com/api/films/' + process.argv[2], function (error, response, body) {
// 	if (error) {
// 		console.log(response.statusCode)
// 		throw error
// 	}

// 	const data = JSON.parse(body)
// 	const charUrls = data.characters

// 	ordered(charUrls, 0)
// })

// const ordered = (chars, x) => {
//   if (x === chars.length) return;

//   request(chars[x], function (err, res, body) {
//     if (err) {
//       console.log(res.statusCode)
//       throw err
//     }

//     const data = JSON.parse(body).name
//     console.log(data)

//     ordered(chars, x + 1)
//   })
// }

const API_URL = 'https://swapi-api.hbtn.io/api';

if (process.argv.length > 2) {
  request(`${API_URL}/films/${process.argv[2]}/`, (err, _, body) => {
    if (err) {
      console.log(err);
    }
    const charactersURL = JSON.parse(body).characters;
    const charactersName = charactersURL.map(
      url => new Promise((resolve, reject) => {
        request(url, (promiseErr, __, charactersReqBody) => {
          if (promiseErr) {
            reject(promiseErr);
          }
          resolve(JSON.parse(charactersReqBody).name);
        });
      }));

    Promise.all(charactersName)
      .then(names => console.log(names.join('\n')))
      .catch(allErr => console.log(allErr));
  });
}