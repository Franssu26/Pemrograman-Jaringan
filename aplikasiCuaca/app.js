const request = require('postman-request')

// === 1️⃣ API Weatherstack ===
const url =
'http://api.weatherstack.com/current?access_key=307c0fb6d3b8a31ddd3ecc52d712876d&query=-0.8974133955080122,100.34921661993027&units=m'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        return console.log('Gagal terhubung ke Weatherstack API')
    }
    console.log('Suhu saat ini:', response.body.current.temperature + '°C')
})


// === 2️⃣ API Mapbox ===
const geocodeURL =
'https://api.mapbox.com/geocoding/v5/mapbox.places/Padang.json?access_token=pk.eyJ1IjoiZnJhbnNzdSIsImEiOiJjbWg3a21mbTYwdGUwMm1vZW4yN2tmbjB4In0.Z74bIYCJAL_0EUKp9saU7w&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        return console.log('Gagal terhubung ke Mapbox API')
    }

    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    const place = response.body.features[0].place_name

    console.log('Lokasi:', place)
    console.log('Latitude:', latitude)
    console.log('Longitude:', longitude)
})
