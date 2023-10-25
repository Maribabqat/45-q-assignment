let names = "marib"
console.log (names.toUpperCase());

let names2 = "MARIB"
console.log (names2.toLowerCase());

let names3 = "marib"
.split(" ")
.map((word)=>word[0].toUpperCase() + word.slice(1).toLowerCase())
.join(" ");
console.log()
