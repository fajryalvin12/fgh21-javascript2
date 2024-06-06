const seleksiNilai = function(nilaiAwal, nilaiAkhir, dataArray){

if (nilaiAwal > nilaiAkhir){
    console.log("Nilai akhir harus lebih besar dari nilai awal")
}

if (dataArray.length < 5) {
    console.log("Jumlah angka dalam array harus lebih dari 5")
}

let result = []

for(let i = 0; i < dataArray.length; i++){
    const num = dataArray[i]
    if(num > nilaiAwal){
        if(num < nilaiAkhir)
        result = [...result, num]
    }
}

    if (result.length === 0) {
    console.log("Nilai tidak ditemukan")
    } else {
    console.log(result)
    }   
}

seleksiNilai(5, 40, [2, 25, 4, 14, 17, 30, 8])

const unsortedArray = function (seleksiNilai) {
    
}