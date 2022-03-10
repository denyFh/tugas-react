// class user {
//     var id;
//     var username;
//     var password;
// }

// class userservice {
//     user[] users = [];

//     user[] getallusers() {
//         return users;
//     }

//     user getuserbyid(userid) {
//         return users.filter(userid);
//     }
// }

// Dari kode yang telah dicontohkan beberapa kekurangan yang saya temukan dalam penulisan kode tersebut diantaranya:
// 1. tidak ada constructor dalam class user, karena dalam suatu class harus terdapat sebuah constructor yang diisi oleh atribut class.
// 2. atribut class tidak membutuhkan suaut deklarasi seperti var id, namun menggunakan this.id = id. 
// 3. tidak ada constructor dalam class userservice, sama seperti sebelumnya tidak ada suatu constructor pada class ini. 
// 4. menurut saya class userservice bisa menjadi suatu extend dari user karena dari nama yang digunakan bisa saling berkaitan.
// 5. deklarasi suatu array yang salah, menurut saya untuk melakukan deklarasi array tidak perlu awalan user[]. 
// 6. penulisan user[] yang tidak diperlukan ketika membuat method getallusers() dalam class userservice.
// 7. penulisan user dalam method getuserbyid tidak diperlukan.
// 8. variabel userid yang disebut masih belum di definisikan.

// Sehingga bisa dihasilkan kode js yang benar menurut saya seperti dibawah ini.

class user {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

class userservice extends user {
    constructor(users = [], id, username, password){
        super(id, username, password);
        this.users = [...users];
        this.userid = id;
    }

    getallusers() {
        return users;
    }

    getuserbyid(userid) {
        return users.filter(userid);
    }
}