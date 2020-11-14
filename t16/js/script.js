function firstElements(arr, n) {
    if(n < 1) {
        console.log('[]')
    }
    if(n > 0){
        console.log(arr.slice(0,n))
    }
}

var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, 5))
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, 1))
// ["Captain America"]
console.log(firstElements(heroes, 3))
// ["Captain America", "Hulk", "Thor"]
console.log(firstElements(heroes, 6))
// ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]
console.log(firstElements(heroes, -1))
// []
