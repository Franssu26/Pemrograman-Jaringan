const request = require('postman-request')
const urlCuaca = 'http://api.weatherstack.com/current?access_key=307c0fb6d3b8a31ddd3ecc52d712876d&query=-0.8974133955080122,100.34921661993027&units=m'

request({ url: urlCuaca, json: true }, (error, response) => {
    console.log('Cuaca saat ini: ' + response.body.current.weather_descriptions[0])
    console.log('Suhu: ' + response.body.current.temperature + '°C')
    console.log('Kemungkinan hujan: ' + response.body.current.precip + '%')
})
