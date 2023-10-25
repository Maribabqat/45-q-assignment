
let magicians = ["Marib", "Aazib", "Abqat", "Rubina"];

function show_magicians(magicians:string[]) {
    console.log("Magicians:");
    magicians.forEach(function(magician) {
        console.log(" - " + magician);
    });
}

function make_great(magicians: string[]) {
    let greatMagicians:string[] = [];

    magicians.forEach(function(magician) {
        greatMagicians.push("the Great " + magician);
    });

    return greatMagicians;
}

let greatMagiciansArray = make_great(magicians);

show_magicians(magicians);
show_magicians(greatMagiciansArray);



