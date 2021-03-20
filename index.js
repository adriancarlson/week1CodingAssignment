// 4.	Inside index.js, create one variable for each of the following real-life examples and assign them values:
//     a.	Item price
//     b.	Amount of money in wallet
//     c.	Number of friends
//     d.	Age in years (as a whole number)
//     e.	First name
//     f.	Last name
//     g.	Middle initial

let itemPrice = 5;
let moneyInWallet = 30;
let numberOfFriends = 5;
let ageInYears = 33;
let firstName = 'Adrian';
let lastName = 'Carlson';
let middleInitial = 'R';

// 5.	Create the following variables by performing operations (addition, subtraction, concatenation, etc…) on the variables created in the previous step:
//     a.	New amount of money in wallet after buying the item
//     b.	Number of friends you’ve made each year based on your age variable and your number of friends variable
//     c.	Full name based on first name, middle initial, and last name

let resultingMoneyInWallet = moneyInWallet - itemPrice;
let totalNumberOfFriends = numberOfFriends * ageInYears;
let fullName = firstName + ' ' + middleInitial + ' ' + lastName;

// 6.	Use console.log() to print out the values of all the variables you’ve created. Provide some detail as to what the value being printed is. For example, if I had a variable called favorite state, I would do the following:
console.log('Item Price: ' + itemPrice);
console.log('Original amount of money in my wallet: ' + moneyInWallet);
console.log('Original number of friends: ' + numberOfFriends);
console.log('My age is: ' + ageInYears);
console.log('My first name is: ' + firstName);
console.log('My middle initial name is: ' + middleInitial);
console.log('My last name is: ' + lastName);
console.log('Money left in my wallet: ' + resultingMoneyInWallet);
console.log('Total Numbers of friends: ' + totalNumberOfFriends);
console.log('My full name is: ' + fullName);
