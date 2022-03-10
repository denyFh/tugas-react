// Kode awal
// class kendaraan { <- belum ditambahkan constructor
//     var totalroda = 0; <- tidak usah menggunakan deklarasi
//     var kecepatanperjam = 0;
// }

// class mobil extends kendaraan { <- belum ditambahkan constructor dan super
//     void berjalan() { <- method ini perlu diubah urutannya agar bisa menjalankan method yang digunakan
//         tambahkecepatan(10); <- nilai yang ditambahkan diubah menjadi inputan ketika membuat mobil
//     }

//     tambahkecepatan(var kecepatanbaru) {
//         kecepatanperjam = kecepatanperjam + kecepatanbaru;
//     }
// }

// void main() { <- kurang menuliskan function dan tanda akhir dibawah
//     mobilcepat = new mobil(); <- class tidak didefinisikan nilai dari atribut
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();
//     mobilcepat.berjalan();

//     mobillamban = new mobil();
//     mobillamban.berjalan()
// }

// Rewrite
class Kendaraan {
    constructor(totalRoda, kecepatanPerJam) {
        this.totalRoda = totalRoda;
        this.kecepatanPerJam = kecepatanPerJam;
    }

    totalRoda = 0;
    kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
    constructor(totalRoda, kecepatanPerJam, kecepatanBaru) {
        super(totalRoda, kecepatanPerJam);
        this.kecepatanBaru = kecepatanBaru;
    }

    tambahkecepatan(kecepatanBaru) {
        this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru;
    }

    berjalan() {
        this.tambahkecepatan(this.kecepatanBaru);
    }
}

void function main() {
    mobilcepat = new Mobil(4, 0, 50);
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new Mobil(4, 0, 50);
    mobillamban.berjalan()
}();

// Untuk pengecekan hasil menjalankan fungsi main
console.log("Mobil cepat: ", mobilcepat);
console.log("Mobil lamban: ", mobillamban);