let newguests = ["andrew tate", "hamza", "jordan peterson"];
console.log("i would like to inform you that i have found a bigger table so more people are been invited ");
newguests.unshift("khabib");
newguests.splice(2, 0, 'kaney west');
newguests.push("elon musk");
newguests.forEach(function (newin) {
    console.log("hey", newin, " i would like to invite you to a dinner");
});
console.log("i would let you know that i can only invite two people");
newguests.pop(), console.log("elon iam sorry babo");
newguests.pop(), console.log("jordon peterson iam sorry babo");
newguests.pop(), console.log("hamza iam sorry babo");
newguests.pop(), console.log("kaney west iam sorry babo");
newguests.forEach(function (letinv) {
    console.log(letinv, "you are still invited");
});
newguests.pop();
newguests.pop();
console.log(newguests);
export {};
