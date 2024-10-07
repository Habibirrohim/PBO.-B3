class Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna) {
      this.nama = nama;
      this.jenis = jenis;
      this.nomor = nomor;
      this.kapasitas = kapasitas;
      this.warna = warna;
    }
  
    infoKapal() {
      return `Kapal ${this.nama} adalah kapal ${this.jenis} dengan nomor ${this.nomor}, kapasitas ${this.kapasitas}, dan berwarna ${this.warna}.`;
    }
  
    ubahWarna(warnaBaru) {
      this.warna = warnaBaru;
      return `Warna kapal ${this.nama} telah diubah menjadi ${this.warna}.`;
    }
  }
  
  class KapalPenumpang extends Kapal {
    constructor(nama, jenis, nomor, kapasitas, warna, jumlahPenumpang) {
      super(nama, jenis, nomor, kapasitas, warna);
      this.jumlahPenumpang = jumlahPenumpang;
    }
  
    tambahPenumpang(jumlah) {
      if (this.jumlahPenumpang + jumlah <= this.kapasitas) {
        this.jumlahPenumpang += jumlah;
        return `${jumlah} penumpang telah ditambahkan. Total penumpang sekarang: ${this.jumlahPenumpang}`;
      } else {
        return `Tidak dapat menambah ${jumlah} penumpang. Kapasitas tidak mencukupi.`;
      }
    }
  
    infoPenumpang() {
      return `Kapal ${this.nama} saat ini membawa ${this.jumlahPenumpang} penumpang dari kapasitas ${this.kapasitas}.`;
    }
  }
  
  const kapalFeri = new KapalPenumpang("Habibi", "Feri", "KF-001", 200, "Putih", 150);
  
  console.log(kapalFeri.infoKapal());
  console.log(kapalFeri.infoPenumpang());
  console.log(kapalFeri.tambahPenumpang(30));
  console.log(kapalFeri.tambahPenumpang(30));
  console.log(kapalFeri.ubahWarna("Biru"));
  console.log(kapalFeri.infoKapal());