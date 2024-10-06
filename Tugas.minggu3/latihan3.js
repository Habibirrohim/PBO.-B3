class SensorPasut {
    constructor(nama, lokasi) {
        this.nama = nama;
        this.lokasi = lokasi;
        this._status = 'mati';
    } 

    aktifkan() {
        this._status = 'hidup';
        return `Sensor ${this.nama} dengan lokasi ${this.lokasi} aktif`;
    }

    matikan() {
        this._status = 'mati';
        return `Sensor ${this.nama} dengan lokasi ${this.lokasi} mati`;
    }  

    getStatus() {
        return `Status sensor ${this.nama} dengan lokasi ${this.lokasi}: ${this._status}`;   
    }         
}

class UsiaSensor extends SensorPasut{
    
}


let sensorPasutMerak = new SensorPasut('sensor selat sunda', 'merak');
console.log(sensorPasutMerak.aktifkan());
console.log(sensorPasutMerak.matikan());
console.log(sensorPasutMerak.getStatus());