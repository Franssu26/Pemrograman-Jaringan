<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README Praktikum Node.js</title>
    <style>
        body {
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f7f9fc;
            color: #2c3e50;
            line-height: 1.8;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 900px;
            margin: 40px auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        h1, h2, h3 {
            color: #1e3799;
        }
        h1 {
            text-align: center;
            margin-bottom: 10px;
        }
        h2 {
            margin-top: 40px;
            border-left: 5px solid #4a69bd;
            padding-left: 12px;
        }
        p {
            text-align: justify;
            margin-top: 12px;
        }
        .identity p {
            margin: 4px 0;
        }
        footer {
            margin-top: 50px;
            text-align: center;
            font-style: italic;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>README Praktikum Pemrograman Jaringan (Node.js)</h1>

        <section class="identity">
            <h2>Identitas Mahasiswa</h2>
            <p><strong>Nama</strong> : Frans Surya Pati Harau</p>
            <p><strong>NIM</strong> : 23343039</p>
            <p><strong>Program Studi</strong> : Informatika</p>
            <p><strong>Sesi</strong> : 202513430093 : INF1.62.5010</p>
        </section>

        <section>
            <h2>Deskripsi Repository</h2>
            <p>
                Repository ini disusun sebagai dokumentasi sekaligus hasil dari praktikum Pemrograman Jaringan berbasis Node.js.
                Seluruh isi repository menggambarkan proses pembelajaran yang dilakukan secara bertahap, mulai dari pengenalan
                Node.js hingga penerapan konsep lanjutan seperti database, deployment aplikasi, dan komunikasi real-time.
                Setiap jobsheet dirancang untuk memperkuat pemahaman konsep sekaligus keterampilan praktik dalam pengembangan
                aplikasi jaringan modern menggunakan JavaScript.
            </p>
        </section>

        <section>
            <h2>Jobsheet 1 – Pengantar Node.js</h2>
            <p>
                Jobsheet pertama membahas pengantar Node.js sebagai runtime environment JavaScript yang berjalan di sisi server.
                Pada bagian ini dipelajari konsep dasar Node.js, perbedaannya dengan JavaScript yang berjalan di browser,
                proses instalasi Node.js, serta cara mengeksekusi program JavaScript menggunakan command line.
                Jobsheet ini menjadi fondasi utama sebelum memasuki materi Node.js yang lebih mendalam.
            </p>
        </section>

        <section>
            <h2>Jobsheet 2 – Node.js Module System</h2>
            <p>
                Jobsheet kedua menjelaskan sistem modul pada Node.js yang memungkinkan pemecahan program menjadi bagian-bagian
                kecil yang terstruktur dan mudah dikelola. Materi meliputi penggunaan module bawaan Node.js, pembuatan modul
                sendiri, serta pemanfaatan <em>require</em>, <em>exports</em>, dan <em>module.exports</em> untuk berbagi fungsi
                maupun variabel antar file.
            </p>
        </section>

        <section>
            <h2>Jobsheet 3 – HTTP Request dan API</h2>
            <p>
                Jobsheet ini berfokus pada pemahaman konsep HTTP Request dan Response serta penerapannya dalam pembuatan API.
                Pembahasan mencakup metode HTTP seperti GET dan POST, cara mengirim dan menerima data, serta pembuatan API
                sederhana menggunakan Node.js. Materi ini menjadi dasar dalam membangun layanan berbasis web dan aplikasi
                client–server.
            </p>
        </section>

        <section>
            <h2>Jobsheet 4 – JavaScript Essentials</h2>
            <p>
                Jobsheet keempat membahas konsep penting JavaScript yang sering digunakan dalam pengembangan aplikasi Node.js.
                Materi meliputi variabel dan tipe data, fungsi dan arrow function, array dan object, serta konsep asynchronous
                JavaScript seperti callback, promise, dan async/await yang sangat penting dalam pemrograman server-side.
            </p>
        </section>

        <section>
            <h2>Jobsheet 5 – Web Server dan Express.js</h2>
            <p>
                Jobsheet ini membahas pembuatan web server menggunakan framework Express.js. Pada bagian ini dipelajari konsep
                routing, middleware, serta cara membangun dan menjalankan server web sederhana. Express.js digunakan untuk
                mempermudah pengembangan aplikasi web yang terstruktur, efisien, dan mudah dikembangkan.
            </p>
        </section>

        <section>
            <h2>Jobsheet 6 – JSON HTTP Endpoints</h2>
            <p>
                Jobsheet keenam menjelaskan pembuatan endpoint berbasis JSON yang umum digunakan pada REST API.
                Materi mencakup konsep RESTful service, pengiriman dan penerimaan data dalam format JSON, serta pembuatan
                endpoint GET dan POST. Jobsheet ini membantu memahami bagaimana aplikasi backend berkomunikasi dengan frontend.
            </p>
        </section>

        <section>
            <h2>Jobsheet 7 – Version Control dan App Deployment</h2>
            <p>
                Jobsheet ini membahas penggunaan version control menggunakan Git dan GitHub untuk mengelola source code.
                Selain itu, dipelajari pula dasar-dasar deployment aplikasi Node.js agar dapat dijalankan pada server.
                Materi ini penting untuk memahami alur kerja pengembangan aplikasi secara kolaboratif dan profesional.
            </p>
        </section>

        <section>
            <h2>Jobsheet 8 – MongoDB dan Database Server</h2>
            <p>
                Jobsheet kedelapan berfokus pada penggunaan MongoDB sebagai database NoSQL.
                Materi meliputi konsep database non-relasional, proses instalasi MongoDB, operasi CRUD
                (Create, Read, Update, Delete), serta integrasi MongoDB dengan aplikasi Node.js.
                Jobsheet ini memperkenalkan pengelolaan data secara dinamis pada aplikasi backend.
            </p>
        </section>

        <section>
            <h2>Jobsheet 9 – Socket Programming</h2>
            <p>
                Jobsheet terakhir membahas konsep socket programming untuk membangun komunikasi real-time antara client dan server.
                Materi ini menjelaskan dasar komunikasi socket serta implementasi sederhana socket pada Node.js.
                Dengan jobsheet ini, mahasiswa dapat memahami bagaimana aplikasi real-time seperti chat atau notifikasi bekerja.
            </p>
        </section>

        <footer>
            <p>Dibuat oleh <strong>Frans Surya Pati Harau</strong> – Program Studi Informatika</p>
        </footer>
    </div>
</body>
</html>
