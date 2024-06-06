// const names = ["Abigail", "Alexandra", "Alison",
// "Amanda", "Angela", "Bella",
// "Carol", "Caroline", "Carolyn",
// "Deirdre", "Diana", "Elizabeth", 
// "Ella", "Faith","Olivia", "Penelope"]

// function searchName(search, arr, callback){
//     let result = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().includes(search)) {
//             result = [...result, arr[i]];
//         }
//     } 
//     callback(result, 3)
// }

// function limit(arr, lim) {
//     let temp = []
//     for (i = 0; i < lim; i++) {
//         if(arr[i] !== undefined) {
//             temp = [...temp, arr[i]];
//         }
//     }
//     console.log(temp)
// }

const searchName = function (keyword, limit, cb) {
    const name = ["Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth", 
    "Ella", "Faith","Olivia", "Penelope"]; 

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    let searchResult = []

        for (let i = 0; i < name.length; i++) {
            const personName = name[i]
            let result = ""
        }
    
    for (let i = 0; i < personName.length; i++) {
        let converted = false 
        for (let j = 0; j < uppercase.length; j++) {
            if (converted === false)
                if (personName[i] === uppercase[j]) {
                result += lowercase[j]
                converted = true
                }
        }
        if (j < 25)
            if (personName[i] !== uppercase[j]) {
                result += personName[i]
                converted = true
            }
    }
    
    let isFound = false
    for (let i = 0; i < result.length; i++){
        let segment = ""
        for (let j = i; j < keyword.length; j++)
        if (result[j] !== undefined) {
            segment += result[j]
        }

        if (isFound === true) 
        searchResult = {...searchResult, personName}
    }

    cb (searchResult, limit)

    function limit (segment, lim) {
        let temp = []
        for (let i = 0; i < lim; i++)
            if(segment[i] !== undefined) {
                temp = [...temp, segment[i]]
            }       
    }
    console.log(temp)        
}

// function limit(arr, lim) {
//     let temp = []
//     for (i = 0; i < lim; i++) {
//         if(arr[i] !== undefined) {
//             temp = [...temp, arr[i]];
//         }
//     }
//     console.log(temp)
// }
