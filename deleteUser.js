/*

Write a function to sign out a user, if present in users array


implementation logic:

check if given user is in the array
if true
    slice out the user
Else 
    display error, user not found

*/

const users = ["ram", "shiv", "rahim", "manthara"];

// original users
console.log(`Original Members: ${users.join(", ")}`);

function deleteUser(userName){
    // Check if user is in the user list
    if(users.includes(userName)){
        // find the index of the user in the array
        const index = users.indexOf(userName);

        // Remove the user
        users.splice(index, 1);
        console.log(`User ${userName} is deleted successfully!`);
        return 0; // return 0 on success
    } else{
        console.error("Can't delete the user. User not found")
    }
};

deleteUser("manthara"); // call delete user

console.log(`Final Members: ${users.join(", ")}`); 


