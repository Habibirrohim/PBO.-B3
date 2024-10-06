const sik = {
    kelas: "B",
    angkatan: "2023",
    dosenwali: "Wildan"
};

console.log(sik.kelas);
console.log(sik.angkatan);
console.log(sik.dosenwali);

const sikel = {};

sikel.atribut1 = "contoh atribut 1";
sikel.atribut2 = "contoh atribut 2";
sikel.atribut3 = "contoh atribut 3";

console.log(sikel.atribut1);

delete sikel.atribut1;

let orang = {
    nama: "habibi",
    pekerjaan: "wiraswasta",
    kendaraan: {
        mobil: "civic",
        motor: "ninjaH2r"
    }
};

console.log(orang.kendaraan.mobil);

orang.kendaraan.motor = "ninjaH2R";
console.log(orang.kendaraan.motor);

let tampil = "Nama saya " + orang.nama + ", Saya bekerja sebagai " + orang.pekerjaan + " sehari-hari saya terbiasa menggunakan mobil pribadi " + orang.kendaraan.mobil;

// Pastikan ada elemen dengan id "objek" di HTML Anda
document.getElementById("objek").innerHTML = tampil;

let mahasiswa = {
    namaDepan: "habibi",
    namaBelakang: "rrohim",
    namaLengkap: function() {
        return this.namaDepan + " " + this.namaBelakang;
    }
};

let tampilMHS = "Nama saya " + mahasiswa.namaDepan + ", nama lengkap saya adalah " + mahasiswa.namaLengkap();

// Pastikan ada elemen dengan id "objek" di HTML Anda
document.getElementById("objek").innerHTML = tampilMHS;

function mahasiswaSIK (Nama,kelas,angkatan){
    this.nama = Nama;
    this.kelas = kelas;
    this.angkatan = angkatan;
    this.namaLengkap = function() {
        return this.nama + " - Kelas " + this.kelas + " Angkatan " + this.angkatan;
    };
}

const mhs1 = new mahasiswaSIK("Habibirrohim", "B", 2023);
const mhs2 = new mahasiswaSIK("Bintang", "B", 2023);
const mhs3 = new mahasiswaSIK("dzaki", "B", 2023);

console.log("nama mahasiswa pertama adalah " + mhs1.Nama);
console.log("nama mahasiswa kedua adalah " + mhs2.Nama);
console.log("nama mahasiswa ketiga adalah " + mhs3.Nama);


