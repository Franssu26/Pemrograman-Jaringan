const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);

        // Memperbarui Data dengan perintah updateOne()
        const updateOnePromise = db.collection('pengguna').updateOne(
            { _id: new ObjectId("69494c78608299335eaa88a3") }, // Filter untuk menemukan dokumen yang akan diperbarui
            { $set: { nama: 'Abayyeiei'} } // Operasi pembaruan yang akan dilakukan
            // {$inc: { usia: 1 }} // Operasi pembaruan yang akan dilakukan
        );
        updateOnePromise.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.error(error);
        }).finally(() => {
            // Menutup koneksi setelah operasi selesai
            client.close();
        });
    } catch (error) {
        console.error(error);
    }
}

// Memanggil fungsi 'main' dan menangani potensi kesalahan.
main();