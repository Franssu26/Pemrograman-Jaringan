/*const chalk = require('chalk');
console.log(chalk.red('Merah 🔴'));
console.log(chalk.green('Hijau 🟢'));
console.log(chalk.yellow('Kuning 🟡'));
console.log(chalk.blue('Biru 🔵'));
console.log(chalk.magenta('Ungu 🟣'));
console.log(chalk.cyan('Cyan 🔵🟢'));
console.log(chalk.white('Putih ⚪'));*/

//console.log('Halo Frans Surya Pati Harau!');

/*const fs = require('fs')
fs.writeFileSync('catatan.txt', 'Nama Saya Frans Surya Pati Harau')
fs.appendFileSync('catatan.txt', 'Saya tinggal di Padang')*/
//
/*const catatan = require('./catatan')
const pesan = catatan()
console.log(pesan)*/
//
/*const validator = require('validator')
const ambilCatatan = require('./catatan')
const pesan = ambilCatatan()
console.log(pesan)
console.log(validator.isURL('https://franssu.com'))*/

/*const ambilCatatan = require('./catatan')

const command = process = process.argv[2]

console.log(process.argv)

 if (command === 'tambah') {
      console.log('Tmabah Catatan')
 } else if (command === 'hapus') {
      console.log('Hapus Catatan')
 }*/
/*
// Import package dan file lokal
const yargs = require('yargs');
const catatan = require('./catatan.js');
const chalk = require('chalk');

// Kustomisasi versi Yargs
yargs.version('10.1.0');

// Command: tambah catatan
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi);
    }
});

// Command: hapus catatan
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang akan dihapus',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.hapusCatatan(argv.judul);
    }
});

// Command: list semua catatan
yargs.command({
    command: 'list',
    describe: 'Menampilkan daftar semua catatan',
    handler: function () {
        catatan.listCatatan();
    }
});

// Command: baca catatan
yargs.command({
    command: 'baca',
    describe: 'Baca sebuah catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.bacaCatatan(argv.judul);
    }
});

// Jalankan Yargs
yargs.parse();
*/

const yargs = require('yargs');
const catatan = require('./catatan.js');
const chalk = require('chalk');

// Mengatur versi aplikasi
yargs.version('10.1.0');

// Perintah: tambah catatan
yargs.command({
    command: 'tambah',
    describe: 'Menambahkan catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.tambahCatatan(argv.judul, argv.isi);
    }
});

// Perintah: hapus catatan
yargs.command({
    command: 'hapus',
    describe: 'Menghapus catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dihapus',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.hapusCatatan(argv.judul);
    }
});

// Perintah: tampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua catatan',
    handler() {
        catatan.listCatatan();
    }
});

// Perintah: baca catatan tertentu
yargs.command({
    command: 'baca',
    describe: 'Membaca catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        catatan.bacaCatatan(argv.judul);
    }
});

// Jalankan Yargs
yargs.parse();

