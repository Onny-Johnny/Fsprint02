let beginRange = Number(prompt("Enter beginRange number from 1 to 100"))
let endRange = Number(prompt("Enter endRange number from 1 to 100"))
let i

function checkDivision(beginRange, endRange) {

    if (beginRange === "" || endRange === "" || beginRange === null || endRange === null || beginRange >= endRange) {
        alert("Wrong input, that's why default range is from 1 to 100")
        beginRange = 1
        endRange = 100
    }
        for(i = beginRange; i <= endRange; i++) {
            if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
                console.log(i + " is even, is multiple of 3 and is a multiple of 10")
            } else if (i % 3 === 0 && i % 10 === 0) {
                console.log(i + " is multiple of 3 and is a multiple of 10")
            } else if (i % 2 === 0 && i % 3 === 0) {
                console.log(i + "  is even and is multiple of 3")
            } else if (i % 3 === 0) {
                console.log(i + "  is multiple of 3")
            } else if (i % 2 === 0 && i % 10 === 0) {
                console.log(i + "  is even and is a multiple of 10")
            } else if (i % 10 === 0) {
                console.log(i + "  is a multiple of 10")
            } else if (i % 2 === 0) {
                console.log(i + "  is even")
            } else if (i % 2 == 1) {
                console.log(i + " - ")
            } else if (i % 3 === 0) {
                console.log(i + "  is multiple of 3")
            } else if (i % 10 === 0) {
                console.log(i + "  is a multiple of 10")
            }
        }
}

  console.log(checkDivision(beginRange, endRange))