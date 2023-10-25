
var usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"];

if (usernames.length > 0 ){
    
    usernames.forEach(function(username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + username + ", thank you for logging in again.");
    }
    
 });
}else {console.log("we need more userse") };

usernames=[];
if (usernames.length === 0) {
    console.log ("we need to find more users")
}

