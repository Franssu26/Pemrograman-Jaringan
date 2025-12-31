const request = require('postman-request')

const mapboxToken = 'pk.eyJ1IjoiZnJhbnNzdSIsImEiOiJjbWg3a21mbTYwdGUwMm1vZW4yN2tmbjB4In0.Z74bIYCJAL_0EUKp9saU7w'
const weatherKey = '307c0fb6d3b8a31ddd3ecc52d712876d'


const lokasi = 'Padang'

const geocodeURL = `http://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(lokasi)}.json?access_token=${mapboxToken}&limit=1`

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        return console.log('❌ Gagal terhubung ke API Mapbox')
    }

    if (response.body.features.length === 0) {
        return console.log('⚠️ Lokasi tidak ditemukan. Coba nama lain.')
    }

    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    const placeName = response.body.features[0].place_name

    console.log(`📍 Lokasi ditemukan: ${placeName}`)
    console.log(`   Koordinat: ${latitude}, ${longitude}`)


    const urlCuaca = `http://api.weatherstack.com/current?access_key=${weatherKey}&query=${latitude},${longitude}&units=m`

    request({ url: urlCuaca, json: true }, (error, response) => {
        if (error) {
            return console.log('❌ Gagal mengakses API Weatherstack')
        }

        if (response.body.error) {
            return console.log('⚠️ Kesalahan dari API:', response.body.error.info)
        }

        const cuaca = response.body.current.weather_descriptions[0]
        const suhu = response.body.current.temperature
        const hujan = response.body.current.precip

        console.log(`🌤️ Cuaca di ${placeName}: ${cuaca}`)
        console.log(`   Suhu: ${suhu}°C`)
        console.log(`   Kemungkinan hujan: ${hujan}%`)
    })
})
