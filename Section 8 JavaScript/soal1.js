var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = false;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama + 
        " nomor urut " + 
        a +
        " sekarang sedang mengikuti " + 
        b + 
        " berasal dari " +
        asal
    );
}
terdaftar = true; /** Jawaban Soal 1.b : Ubah kode sehingga baris 22 bisa tampil */
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}
console.log("array = "+ lengkap_arr[2]); /** Jawaban Soal 1.a : Ambil index ke 2 dalam array baris 5 */
a = b;
// nama = b;

// console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan() /** Jawaban Soal 1.c : Memanggil function perkenalan pada baris 31 */
