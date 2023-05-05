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

if (process.argv.length > 2) {
	request('https://swapi-api.hbtn.io/api/films/' + process.argv[2], function (err, res, body) {
		if (err) throw err;
		const actors = JSON.parse(body).characters;
		exactOrder(actors, 0);
	});
	const exactOrder = (actors, x) => {
		if (x === actors.length) return;
		request(actors[x], function (err, res, body) {
			if (err) throw err;
			console.log(JSON.parse(body).name);
			exactOrder(actors, x + 1);
		});
	};
}

