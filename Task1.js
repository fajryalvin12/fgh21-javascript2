// // 1. Sort : fungsi bawaan pada Javascript yang bertujuan untuk mengurutkan value dalam sebuah array 
// // menggunakan callback yang sudah ditentukan
// // bentuk fungsinya .sort()
// // Contoh penggunaannya :
//     const angka = [0, 5, 4, 7, 8];
//     angka.sort(function (b, a) {
//         return b - a
//     }
// )
//     console.log(angka)

// // 2. Reverse : fungsi bawaan pada Javascript yang bertujuan untuk menampilkan value pada array secara terbalik
// // bentuk fungsinya .reverse()
// // contoh penggunaannya :
//     const buah = ["Jeruk", "Kiwi", "Pisang", "Stroberi"]
//     buah.reverse()
//     console.log(buah)

// // 3. Push : fungsi bawaan yang berperan menambahkan value atau item baru pada array di bagian akhir dari sebuah array
// // bentuk fungsinya .push()
// // contoh penggunaannya :
//     let angkaMenarik = [0, 3, 6]
//     let tambahanAngka = angkaMenarik.push(1, 2)

//     console.log(tambahanAngka)

// // 4. Map : fungsi bawaan pada Javascript yang berperan menciptakan sebuah array baru dengan pengkondisian tertentu dari array yang sudah ada 
// // bentuk fungsinya .map 
// // contoh penggunaannya :
//     const num = [0, 1, 2]; 

//     const angkaTripel = num.map(function(value){
//         return value * 3
//     }
// )
//         console.log(angkaTripel)

// 5. Split : fungsi bawaan pada JavaScript yang digunakan untuk memecah string menjadi array berdasarkan pemisah tertentu.
// // bentuk fungsinya .split()
// // contoh penggunaannya :
//     const sapaan = "Selamat Pagi!"
    
//     const kata = sapaan.split(" ")
//     console.log(kata)

// 6. Join : fungsi bawaan pada Javascript yang digunakan untuk menyatukan string pada array dengan pemisah yang ditentukan
// bentuk fungsinya .join()
// // contoh penggunaannya :
//     const buah = ["Apel", "Jeruk", "Melon"]
//     const buahBuahan = buah.join(" ")

//     console.log(buahBuahan)
//

// 7. Pop : fungsi bawaan pada Javascript yang digunakan untuk menghapus value dari array dan menampilkannya secara terpisah
// bentuk fungsinya .pop()
// contoh penggunaannya :
    // const pemain = ["Antony", "Mudryk", "Darwin"]
    // const pemainTobat = pemain.pop()

    // console.log(pemainTobat)

    // 8. Includes : Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu. Output bouleaan
// bentuk fungsinya .includes
// contoh penggunaannya :

    // const game = ["Tekken", "Street Fighter", "Mortal Kombat"]
    // const gameBest = game.includes("Crash Bandicoot", 1)

    // console.log(gameBest)

// 9. Concat : metode yang digunakan untuk menggabungkan value pada dua array yang berbeda
// bentuk fungsinya .Concat
// contoh penggunaannya : 

    // const pemainJunior = ["Mbappe", "Haaland"]
    // const pemainSenior = ["Kane", "Rodri"]
    // const pemainLegend = ["Ronaldo", "Messi"]

    // const pemainBola = pemainJunior.concat(pemainSenior, pemainLegend)
    // console.log(pemainBola)
// 10. Slice : Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array.
// bentuk fungsinya .slice
// contoh penggunaannya : 

    // const makanan = ["Nasi Goreng", "Indomie", "Ayam Geprek", "Bakso"]
    // const makananFavorit = makanan.slice(1, 3)

    // console.log(makananFavorit)