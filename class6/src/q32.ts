let currentUsers = [" marib ", "aazib", "abqat", "rubina", "noice"]
let newUsers = [" marib ", "jhon", "lex", "bruce", "robin"]

newUsers.forEach(function(newUsers){
    let istaken = currentUsers.includes(newUsers)
    if (istaken){
        console.log ("sorry the" + newUsers + "is already taken" )
    }else{console.log ("congrats" + newUsers + "is not taken ")}
});