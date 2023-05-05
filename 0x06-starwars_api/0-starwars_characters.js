#!/usr/bin/node

const request = require('request')

const url = 'https://swapi-api.alx-tools.com/api/films/'

function getCharacters (url) {
  request(url + process.argv[2], function (error, response, body) {
    if (error) {
      console.log(response.statusCode)
      throw error
    }

    const data = JSON.parse(body)
    const charUrls = data.characters

    ordered(charUrls, 0)
  })
}

function ordered (chars, x) {
  if (x === chars.length) return

  request(chars[x], function (err, res, body) {
    if (err) {
      console.log(res.statusCode)
      throw err
    }

    const data = JSON.parse(body).name
    console.log(data)

    ordered(chars, x + 1)
  })
}

getCharacters(url)
