/*44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/
function make_sandwitch(...itmes) {
    if (itmes.length === 0) {
        console.log("you ordered an empty sandwitch");
    }
    else {
        console.log("you orderd a sandwitch with following ingredients" + itmes);
    }
}
make_sandwitch("bread", "sause", "latice", "meat");
export {};