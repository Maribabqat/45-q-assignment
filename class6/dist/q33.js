let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (numbers) {
    let oridnal;
    if (numbers === 1) {
        oridnal = "1st";
    }
    else if (numbers === 2) {
        oridnal = "2nd";
    }
    else if (numbers === 3) {
        oridnal = "3rd";
    }
    else {
        oridnal = numbers + "th";
    }
    console.log(oridnal);
});
export {};
