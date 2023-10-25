import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        type: "input",
        name: "username",
        message: "What is your user name?"
    }, {
        type: "list",
        name: "programming language",
        message: "what is your favourite progaramming language ?",
        choices: ["phyton", "js", "ts"],
        default: "js"
    }, {
        type: "checkbox",
        name: "future language",
        message: "what language will you learn in future?",
        choices: ["phyton", "js", "ts"],
        default: "js"
    }]);
console.log(`your username is ${answers.username} and your favourite language is ${answers["programming language"]} and you will learn ${answers["future language"]}`);
