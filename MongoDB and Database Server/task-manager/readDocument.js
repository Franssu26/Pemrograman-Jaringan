const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const namaDatabase = 'task-manager';

async function main() {
    try {
        await client.connect();
        console.log('Berhasil terhubung ke MongoDB database server');
        const db = client.db(namaDatabase);

        // Mencari satu dokumen dalam koleksi 'pengguna' berdasarkan nama 'Abayy'
        const byNama = await db.collection('pengguna').findOne({ nama: 'Abayy' });

        // Mencari satu dokumen dalam koleksi 'pengguna' berdasarkan ID Objek tertentu
        const byObjectId = await db.collection('pengguna').findOne({ _id: new ObjectId("69494c78608299335eaa88a3") });

        // Mencari beberapa dokumen dalam koleksi 'pengguna' dengan kriteria usia 20 dan mengubahnya menjadi array
        const toArray = await db.collection('pengguna').find({ usia: 20 }).toArray();

        // / Menggunakan if statement dengan kondisi yang salah. (Ini tidak akan berfungsi sebagaimana yang diharapkan)
        if (byNama && byObjectId && toArray) {
            // Menampilkan hasil pencarian berdasarkan nama, ID Objek, dan kriteria usia.
            console.log('Data Pengguna ditemukan (berdasarkan nama):', byNama);
            console.log('Data Pengguna ditemukan (berdasarkan ID Objek):', byObjectId);
            console.log('Data Pengguna ditemukan (dalam format array):', toArray);
        } else {
            // Menampilkan pesan jika data pengguna tidak ditemukan.
            console.log('Data Pengguna tidak ditemukan');
        }
    } catch (error) {
        console.error(err);
    } finally {
        await client.close();
    }
}

// Memanggil fungsi 'main' dan menangani potensi kesalahan.
main().catch(console.error);