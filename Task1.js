// 1. Sort : fungsi bawaan pada Javascript yang bertujuan untuk mengurutkan value dalam sebuah array 
// menggunakan callback yang sudah ditentukan
// bentuk fungsinya variabel.sort()
// Contoh penggunaannya :
    const angka = [0, 5, 4, 7, 8];
    angka.sort(function (a, b) {
        return b - a
    }
)
    console.log(angka)