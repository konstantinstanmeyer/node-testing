const Card = require("./card");

const card = new Card;

console.log("Initial card: " + card);

card.update(3)
console.log("Update 1");
console.table({ card })

card.update(4)
console.log("Update 2")
console.table({ card })

card.update(5)
console.log("Update 3");
console.table({ card })

card.update(5)
console.log("Update 4")
console.table({ card })

card.update(5)
console.log("Update 5")
console.table({ card })
//     input:  user grade q
//             repetition number n
//             easiness factor EF
//             interval I
//     output: updated values of n, EF, and I

//     if q ≥ 3 (correct response) then
//         if n = 0 then
//             I ← 1
//         else if n = 1 then
//             I ← 6
//         else
//             I ← round(I × EF)
//         end if
//         increment n
//     else (incorrect response)
//         n ← 0
//         I ← 1
//     end if
    
//     EF ← EF + (0.1 − (5 − q) × (0.08 + (5 − q) × 0.02))
//     if EF < 1.3 then
//         EF ← 1.3
//     end if
    
//     return (n, EF, I)

// input is based on a grading ranging from 1 to 5:

// 1: very hard and repeat again very soon (5min)
// 2: incorrect, but easily understanding the error (1 day)
// 3: correct, but not very well understanding (2 days)
// 4: correct, but with consideration (3 days)
// 5: corrent, with an immediate understanding (4 days)