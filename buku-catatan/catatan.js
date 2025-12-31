/*const fs = require('fs');
const chalk = require('chalk');

// Fungsi untuk menambah catatan
const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan();
    const catatanGanda = catatan.filter((note) => note.judul === judul);

    if (catatanGanda.length === 0) {
        catatan.push({ judul: judul, isi: isi });
        simpanCatatan(catatan);
        console.log(chalk.green.inverse('Catatan baru ditambahkan!'));
    } else {
        console.log(chalk.red.inverse('Judul catatan sudah dipakai!'));
    }
};

// Fungsi simpan dan muat catatan
const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan);
    fs.writeFileSync('catatan.json', dataJSON);
};

const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

// Ekspor fungsi agar bisa dipakai di app.js
module.exports = {
    tambahCatatan: tambahCatatan
};
*/
const fs = require('fs');
const chalk = require('chalk');

// Fungsi tambah catatan
const tambahCatatan = (judul, isi) => {
    const catatan = muatCatatan();
    const duplikat = catatan.find((note) => note.judul === judul);

    if (!duplikat) {
        catatan.push({ judul: judul, isi: isi });
        simpanCatatan(catatan);
        console.log(chalk.green.inverse('Catatan baru ditambahkan!'));
    } else {
        console.log(chalk.red.inverse('Judul catatan sudah ada!'));
    }
};

// Fungsi hapus catatan
const hapusCatatan = (judul) => {
    const catatan = muatCatatan();
    const sisaCatatan = catatan.filter((note) => note.judul !== judul);

    if (sisaCatatan.length < catatan.length) {
        simpanCatatan(sisaCatatan);
        console.log(chalk.green.inverse('Catatan dihapus!'));
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
};

// Fungsi menampilkan semua catatan
const listCatatan = () => {
    const catatan = muatCatatan();
    console.log(chalk.blue.inverse('Daftar Catatan:'));
    catatan.forEach((note, i) => {
        console.log(`${i + 1}. ${note.judul}`);
    });
};

// Fungsi membaca catatan tertentu
const bacaCatatan = (judul) => {
    const catatan = muatCatatan();
    const note = catatan.find((note) => note.judul === judul);

    if (note) {
        console.log(chalk.green.inverse('Catatan Ditemukan:'));
        console.log(`Judul: ${note.judul}`);
        console.log(`Isi: ${note.isi}`);
    } else {
        console.log(chalk.red.inverse('Catatan tidak ditemukan!'));
    }
};

// Fungsi menyimpan catatan ke file JSON
const simpanCatatan = (catatan) => {
    const dataJSON = JSON.stringify(catatan);
    fs.writeFileSync('catatan.json', dataJSON);
};

// Fungsi memuat catatan dari file JSON
const muatCatatan = () => {
    try {
        const dataBuffer = fs.readFileSync('catatan.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

// Ekspor fungsi-fungsi agar bisa digunakan di app.js
module.exports = {
    tambahCatatan,
    hapusCatatan,
    listCatatan,
    bacaCatatan
};
