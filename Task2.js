const names = ["Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth", 
"Ella", "Faith","Olivia", "Penelope"]

function searchName(search, arr, callback){
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(search)) {
            result = [...result, arr[i]];
        }
    } 
    callback(result, 3)
}

function limit(arr, lim) {
    let temp = []
    for (i = 0; i < lim; i++) {
        if(arr[i] !== undefined) {
            temp = [...temp, arr[i]];
        }
    }
    console.log(temp)
}

searchName("an", names, limit)