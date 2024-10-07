// Kelas induk
class Kapal {
    constructor(nama, jenis) {
      this.nama = nama;
      this.jenis = jenis;
    }
  
    infoKapal() {
      return `${this.nama} adalah kapal jenis ${this.jenis}.`;
    }
  
    operasi() {
      return `Kapal ${this.nama} sedang beroperasi.`;
    }
  
    muatanInfo() {
      throw new Error("Metode muatanInfo() harus diimplementasikan");
    }
  }
  
  // Kelas turunan KapalPenumpang
  class KapalPenumpang extends Kapal {
    constructor(nama, kapasitasPenumpang) {
      super(nama, "Penumpang");
      this.kapasitasPenumpang = kapasitasPenumpang;
      this.penumpangSaatIni = 0;
    }
  
    naikkanPenumpang(jumlah) {
      if (this.penumpangSaatIni + jumlah <= this.kapasitasPenumpang) {
        this.penumpangSaatIni += jumlah;
        return `${jumlah} penumpang naik. Total penumpang: ${this.penumpangSaatIni}`;
      }
      return "Kapasitas penuh, tidak bisa menambah penumpang.";
    }
  
    operasi() {
      return `Kapal penumpang ${this.nama} sedang berlayar dengan ${this.penumpangSaatIni} penumpang.`;
    }
  
    muatanInfo() {
      return `Jumlah penumpang: ${this.penumpangSaatIni}/${this.kapasitasPenumpang}`;
    }
  }
  
  // Kelas turunan KapalKargo
  class KapalKargo extends Kapal {
    constructor(nama, kapasitasMuatan) {
      super(nama, "Kargo");
      this.kapasitasMuatan = kapasitasMuatan;
      this.muatanSaatIni = 0;
    }
  
    muatBarang(berat) {
      if (this.muatanSaatIni + berat <= this.kapasitasMuatan) {
        this.muatanSaatIni += berat;
        return `${berat} ton barang dimuat. Total muatan: ${this.muatanSaatIni} ton`;
      }
      return "Kapasitas penuh, tidak bisa menambah muatan.";
    }
  
    operasi() {
      return `Kapal kargo ${this.nama} sedang mengangkut ${this.muatanSaatIni} ton barang.`;
    }
  
    muatanInfo() {
      return `Muatan: ${this.muatanSaatIni}/${this.kapasitasMuatan} ton`;
    }
  }
  
  // Kelas turunan KapalTanker
  class KapalTanker extends Kapal {
    constructor(nama, kapasitasTangki) {
      super(nama, "Tanker");
      this.kapasitasTangki = kapasitasTangki;
      this.isiTangki = 0;
    }
  
    isiMuatan(volume) {
      if (this.isiTangki + volume <= this.kapasitasTangki) {
        this.isiTangki += volume;
        return `${volume} liter cairan ditambahkan. Total isi tangki: ${this.isiTangki} liter`;
      }
      return "Tangki penuh, tidak bisa menambah cairan.";
    }
  
    operasi() {
      return `Kapal tanker ${this.nama} sedang mengangkut ${this.isiTangki} liter cairan.`;
    }
  
    muatanInfo() {
      return `Isi tangki: ${this.isiTangki}/${this.kapasitasTangki} liter`;
    }
  }
  
  // Kelas turunan KapalPenangkapIkan
  class KapalPenangkapIkan extends Kapal {
    constructor(nama, kapasitasJaring) {
      super(nama, "Penangkap Ikan");
      this.kapasitasJaring = kapasitasJaring;
      this.tangkapan = 0;
    }
  
    tangkapIkan(jumlah) {
      if (this.tangkapan + jumlah <= this.kapasitasJaring) {
        this.tangkapan += jumlah;
        return `${jumlah} kg ikan ditangkap. Total tangkapan: ${this.tangkapan} kg`;
      }
      return "Jaring penuh, tidak bisa menambah tangkapan.";
    }
  
    operasi() {
      return `Kapal penangkap ikan ${this.nama} sedang melaut dengan ${this.tangkapan} kg ikan.`;
    }
  
    muatanInfo() {
      return `Tangkapan: ${this.tangkapan}/${this.kapasitasJaring} kg`;
    }
  }
  
  // Fungsi untuk mendemonstrasikan polimorfisme
  function demonstrasiOperasiKapal(kapal) {
    console.log(kapal.infoKapal());
    console.log(kapal.operasi());
    console.log(kapal.muatanInfo());
  }
  
  // Membuat instance dari setiap kelas
  const kapalPenumpang = new KapalPenumpang("Nusantara", 500);
  const kapalKargo = new KapalKargo("Gojali", 10000);
  const kapalTanker = new KapalTanker("Pertamina", 50000);
  const kapalIkan = new KapalPenangkapIkan("Nelayan Jaya", 5000);
  
  // Mendemonstrasikan polimorfisme
  console.log("Kapal Penumpang:");
  kapalPenumpang.naikkanPenumpang(300);
  demonstrasiOperasiKapal(kapalPenumpang);
  
  console.log("\nKapal Kargo:");
  kapalKargo.muatBarang(8000);
  demonstrasiOperasiKapal(kapalKargo);
  
  console.log("\nKapal Tanker:");
  kapalTanker.isiMuatan(40000);
  demonstrasiOperasiKapal(kapalTanker);
  
  console.log("\nKapal Penangkap Ikan:");
  kapalIkan.tangkapIkan(3000);
  demonstrasiOperasiKapal(kapalIkan);