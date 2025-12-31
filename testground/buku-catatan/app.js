const fs = require('fs')
fs.writeFileSync('catatan.txt', 'Nama Saya Frans Surya Pati Harau')
fs.appendFileSync('catatan.txt', 'Saya tinggal di Padang')

const catatan = require('./catatan')
const pesan = catatan()
console.log(pesan)