const dataArray = [1, 20, 45, 35, 12]

function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray){
    nilaiArr = dataArray.length
    if(nilaiArr < 5){
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } else if (nilaiAkhir > nilaiAwal) {
        console.log("Nilai akhir harus lebih besar daripada nilai awal")
    } else if (nilaiArr < nilaiAwal) {
        console.log("Nilai tidak ditemukan")
    }
}

seleksiNilai(15, 20, dataArray)