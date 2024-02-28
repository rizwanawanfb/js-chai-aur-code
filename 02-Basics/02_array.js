const myFriends1 = ["Hassan", "Muzammil", "Saqib"]
const myFriends2 = ["Husnain", "Hunain", "Ali"]

// myFriends1.push(myFriends2)

// console.log(myFriends1)

// const allFriends = myFriends1.concat(myFriends2);
// console.log(allFriends)

// const allNewFriends = [...myFriends1, ...myFriends2];
// console.log(allNewFriends);

const realAnotherArray = [1, 2, 3, [4, 5, 6],7,[6, 7, [4,5]]]
const anotherArray = realAnotherArray.flat(Infinity);
// console.log(anotherArray)

const array1 = ["a", "b", "c"];
const array2 = ["a", "b", "c"];
const array3 = array2.concat(array1)

// console.log(array3);

const arr1 = [1, 3, [4, 6]]

console.log(arr1.flat())