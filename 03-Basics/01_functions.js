// // 

// function addTwoNumbers(number1, number2) {
//     // let result = number1 + number2;
//     // return result;

//     return number1 + number2;
// }

// const result = addTwoNumbers(91, 9)
// // console.log(result)

// function loginUserMsg(username) {
//     return `${username} just logged in!`
// }

// console.log(loginUserMsg("Rizwan"));

function loginUserMsg(username = "sam") {
        // if (username === undefined){
        if (!username){
            console.log("Please enter user name");
            return
        }
        return `${username} just logged in!`
    }

    console.log(loginUserMsg("Rizwan"));

