const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
};

// Apply isLoggedIn middleware to all routes
router.use(isLoggedIn);

// READ / Menampilkan semua data logistik
router.get('/', (req, res) => {
    const query = `SELECT * FROM logistik`;
    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.render('logistik', { error: 'Error fetching data.', logistik: [] });
        }
        res.render('logistik', { logistik: results, user: req.session.user });
    });
});

// CREATE / INSERT data
router.post('/add', (req, res) => {
    const { nama_barang, kategori_barang, berat, harga, nama_gudang, lokasi_gudang, kapasitas_gudang, tanggal_pengiriman, tujuan_pengiriman, jumlah_barang } = req.body;
    const query = `INSERT INTO logistik (nama_barang, kategori_barang, berat, harga, nama_gudang, lokasi_gudang, kapasitas_gudang, tanggal_pengiriman, tujuan_pengiriman, jumlah_barang) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [nama_barang, kategori_barang, berat, harga, nama_gudang, lokasi_gudang, kapasitas_gudang, tanggal_pengiriman, tujuan_pengiriman, jumlah_barang], (err, result) => {
        if (err) {
            console.error(err);
            return res.redirect('/logistik');
        }
        res.redirect('/logistik?added=true');
    });
});

router.get('/edit/:id', (req, res) => {
    const query = `SELECT * FROM logistik WHERE id_logistik = ?`;
    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.redirect('/logistik?error=true');
        }
        if (result.length === 0) {
            return res.redirect('/logistik?error=true');
        }
        res.render('edit', { logistik: result[0], user: req.session.user });
    });
});

// UPDATE / Memperbarui data logistik
router.post('/update/:id', (req, res) => {
    const { nama_barang, kategori_barang, berat, harga, nama_gudang, lokasi_gudang, kapasitas_gudang, tanggal_pengiriman, tujuan_pengiriman, jumlah_barang } = req.body;
    const query = `UPDATE logistik 
                  SET nama_barang = ?, 
                      kategori_barang = ?, 
                      berat = ?, 
                      harga = ?, 
                      nama_gudang = ?, 
                      lokasi_gudang = ?, 
                      kapasitas_gudang = ?, 
                      tanggal_pengiriman = ?, 
                      tujuan_pengiriman = ?, 
                      jumlah_barang = ? 
                  WHERE id_logistik = ?`;
    
    db.query(query, [
        nama_barang, 
        kategori_barang, 
        berat, 
        harga, 
        nama_gudang, 
        lokasi_gudang, 
        kapasitas_gudang, 
        tanggal_pengiriman, 
        tujuan_pengiriman, 
        jumlah_barang, 
        req.params.id
    ], (err, result) => {
        if (err) {
            console.error("Kesalahan saat update:", err);
            return res.redirect('/logistik?error=true');
        }
        res.redirect('/logistik?edited=true');
    });
});

// DELETE / Menghapus data logistik
router.get('/delete/:id', (req, res) => {
    const query = `DELETE FROM logistik WHERE id_logistik = ?`;
    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            console.error(err);
            return res.redirect('/logistik?error=true');
        }
        res.redirect('/logistik?deleted=true');
    });
});

module.exports = router;