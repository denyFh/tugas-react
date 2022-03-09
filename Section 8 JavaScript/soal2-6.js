/** Soal 2.a : 
 * Kenapa baris 21 - 23 tidak tampil? */
/** Jawaban 2.a : 
 * karena pada baris 21 sampai 23 merupakan sebuah block dengan kondisi variabel terdaftar yang tidak terpenuhi yakni bernilai false */

/** Soal 2.b : 
 * Kenapa deklarasi pada baris 26 menyebabkan error? */
/** Jawaban 2.b : 
 * Karena variabel nama dideklarasikan sebagai const yang berarti nilainya tidak bisa di reassign */

/** Soal 2.c : 
 * Dengan mengkomen baris 26, apa baris 28 bisa di eksekusi? */
/** Jawaban 2.c : 
 * Baris 28 juga akan menimbulkan error karena variabel asal hanya bisa diakses pada scope function, sehingga tidak bisa dipanggil diluar dari function */

/** Soal 3 : 
 * Lakukan destructuring sehingga setiap data tersimpan pada variabel tersendiri*/
/** Jawaban Soal 3 : */
const foo = ['Budi', 'Sita', 'Ayu'];
[a, b, c] = [foo[0], foo[1], foo[2]];
console.log("variable a = " + a);
console.log("variable b = " + b);
console.log("variable c = " + c);

/** Soal 4 : 
 * ubah tanda (-) dalam array variabel menjadi (/) */
/** Jawaban Soal 4 : */
let bdays = ['10-17', '05-19', '20-19'];
bdays = bdays.map(elem => elem.replace('-', '/'));
console.log(bdays);

/** Soal 5 : 
 * mengalikan setiap value array dengan 2 */
/** Jawaban Soal 5 : */
let value = [1,2,3,4,5,6];
value = value.map( val => val * 2);
console.log(value);

/** Soal 6 : 
 * membulatkan variabel ke atas */
/** Jawaban Soal 6 : */
let arr = [1.5, 2.56, 5.1, 12.33];
arr = arr.map(value => Math.round(value));
console.log(arr);