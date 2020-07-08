
//-------------- String Methods --------------
//1.
// var firstName = prompt("First Name: ");
// var lastName = prompt("Last Name: ");
// var fullName = firstName + " " + lastName;
// alert("Hi " + fullName);

//2.
// var userPhone = prompt("Enter your favourite Phone is: ");
// var strLength = userPhone.length;
// document.write("My Favourite Mobile is: " + userPhone + "<br />");
// document.write("Length of String: " + strLength);

//3.
// var str = "Pakistani";
// document.write("String: " + str + "<br />" + "Index of 'n': " + str.indexOf("n"));

//4.
// var str = "Hello World";
// document.write("String: " + str + "<br />" + "Last Index of 'l': " + str.lastIndexOf("l"));

//5.
// var str = "Pakistani";
// document.write("String: " + str + "<br />" + "Char at Index 3: " + str.charAt(3));

//6.
// var firstName = prompt("First Name: ");
// var lastName = prompt("Last Name: ");
// var fullName = "";
// alert("Hi " + fullName.concat(firstName, " ", lastName));

//7.
// var word = "Hyderabad";
// document.write("City: " + word + "<br />"); 
// document.write("After Replacement: " + word.replace(word.slice(0, 5), "Islam"));

//8.
// var message = "Ali and Sami are best friends. They play cricket and football together. They also take lanuch and dinner together.";
// message = message.replace(/and/g, "&");
// console.log(message);

//9.
// var num = "472";
// document.write("Value: " + num + "<br />");
// document.write("Type: " + typeof num + "<br />");
// num = Number(num)
// document.write("Value: " + num + "<br />");
// document.write("Type: " + typeof num + "<br />");

//10.
// var input = prompt("Enter a Dry Fruit: ");
// document.write("User Input: " + input + "<br />");
// document.write("Upper Case: " + input.toUpperCase() + "<br />");

//11.
// var input = prompt("Enter a Dry Fruit: ");
// document.write("User Input: " + input + "<br />");
// var firstChar = input.slice(0, 1);
// document.write(firstChar.toUpperCase() + input.slice(1).toLowerCase());

//Extra.
//var: Jab Variable Globally initialized karna ho to ya particular instance p bhi kar sakte h.
// {
//     var a = 2;
//     console.log(a);
// }
// console.log(a);

//let: Jab Variable kisi bhi 'Block Scoped' m define karna ho to.
// {
//     let a = 2;
//     console.log(a);
// }
// console.log(a);     //ReferenceError: variable not defined error

//const: Jab kisi vaiable ko constantly initialized karana ho to.
// const a = 3.14;
// console.log(a);
// a = 3.142;
// console.log(a);        //TypeError: Assignment to constant variable

//12.
// var num = 33.56;
// var str = num.toString()
// document.write("Number : " + str + "<br />");
// document.write("Result : " + str.replace(".", ""));

//13.
// var userName = prompt("Enter your Name: ");
// for (var i = 0; i < userName.length; i++) { 
//     if (userName[i].charCodeAt(0) === "@".charCodeAt(0) ||userName[i].charCodeAt(0) ===  ".".charCodeAt(0) ||userName[i].charCodeAt(0) ===  ",".charCodeAt(0) ||userName[i].charCodeAt(0) ===  "!".charCodeAt(0)){
//         alert("Please Enter a Valid Username")
//     }
// }

//14.
// document.write("<h2>" + "XYZ Bakery" + "</h2>")
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// for (var i = 0; i < A.length; i++) {
//     document.write("[" + A[i] + "]" + " " );
// }
// var item = prompt("Welcome to XYZ Bakery\nWhat do you want to order Sir/Ma'am?");
// var alarm = false;
// for (var i = 0; i < A.length; i++) {
//     if (item.toLowerCase() === A[i]) {
//         alarm = true;
//         alert(item + " is available at index " + i + " in our bakery.")
//     }
// }
// if (alarm === false) {
//     alert("We are Sorry. " + item + " is not available in our bakery.")
// }

//15.
//Task:
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Input your Password: ");
// for (var i = 0; i < password.length; i++){
//     if (((password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) || (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)) && (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) ){
//         console.log("Case 1 Passed")
//         for (var j = 0; j < 10; j++) {
//             if (password.slice(0, 1) !== i && password.length >= 6){
//                 alert("Login Successfully")
//             }
//             else {
//                 alert("Enter a valid password!")
//             }
//         }
//     }
//     else {
//         alert("Enter a valid password!")
//     }
// }                                                    
//OR
// var pass = prompt("Input your password: ");
// for (var i = 0; i < pass.length; i++) {
//     if ((pass[i].charCodeAt(0) >= 97 && pass[i].charCodeAt(0) <= 122) || (pass[i].charCodeAt(0) >= 65 && pass[i].charCodeAt(0) <= 90)){
//         for (var t = 0; t < 10; t++) {
//             if (pass.slice(0, 1) !== i && pass.length >= 6) {
//                 console.log("Matched");
//                 break;
//             }
//         }
//         break;
//     }
// }                                                      //Incomplete

//16.
// var uni = "University Of Karachi";
// var arr = uni.split("")
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br />");
// }

//17.
// var userInput = prompt("Input Some Thing: ");
// document.write("User Input: " + userInput + "<br />");
// document.write("Last Character of Input: " + userInput.charAt(userInput.length - 1));

//18.
// var text = "The quick brown fox jumps ThE over the lazy dog. The dog waste tHE to much time.";
// var count = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "ThE" || text.slice(i, i + 3) === "The" || text.slice(i, i + 3) === "the" || text.slice(i, i + 3) === "THe" ||text.slice(i, i + 3) === "THE" || text.slice(i, i + 3) === "tHE" || text.slice(i, i + 3) === "thE" || text.slice(i, i + 3) === "tHe") {
//         count++;
//     }
// }
// document.write("Text: " + text + "<br />");
// document.write("There are " + count + " occurence(s) of word 'the'.");

//------------------ Math Methods -------------------
//1.
// var positiveInteger = prompt("Enter a Positive Integer decimal number: ");
// if (positiveInteger > 0) {
//     document.write("Number: " + Number(positiveInteger) + "<br />");
//     document.write("Round Off value: " + Math.round(positiveInteger) + "<br />");
//     document.write("Floor value: " + Math.floor(positiveInteger) + "<br />");
//     document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br />");
// }
// else {
//     alert("Please Enter a valid value!")
// }

//2.
// var negativeFloatingNum = prompt("Enter a Negative Floating Point number: ");
// if (negativeFloatingNum < 0) {
//     document.write("Number: " + Number(negativeFloatingNum) + "<br />");
//     document.write("Round Off value: " + Math.round(negativeFloatingNum) + "<br />");
//     document.write("Floor value: " + Math.floor(negativeFloatingNum) + "<br />");
//     document.write("Ceil value: " + Math.ceil(negativeFloatingNum) + "<br />");
// }
// else {
//     alert("Please Enter a valid value!")
// }

//3.
// var num = -768;
// if (num < 0) {
//     var absoluteValue = (num * -1)
//     document.write("The Absolute Value of " + num + " is " + absoluteValue);
// }
// else {
//     document.write("The Absolute Value of " + num + " is " + num);
// }

//4.
// document.write("Random Dice Value: " + Math.ceil(Math.random() * 6));

//5.
// var toss = Math.ceil(Math.random() * 2);
// if (toss === 1){
//     document.write(toss + " : random coin value : Tails");
// }
// else {
//     document.write(toss + " : random coin value : Heads");
// }

//6.
// document.write("Random Number between 1 and 100: " + Math.ceil(Math.random() * 100));

//7.
// var weight = prompt("Enter your weight in kilograms: ");
// var num = 0;
// for (var i = 0; i < weight.length; i++) {
//     if (weight.slice(i, i + 1) === "k" || weight.slice(i, i + 1) === "K") {
//         num = weight.slice(0, i);
//         document.write("The Weight of User is " + Number(num) + " Kilograms");
//         break;
//     }
// }
// if (weight > 0) {
//     document.write("The Weight of User is " + Number(weight) + " Kilograms");
// }

//8.
// var randomNumber = Math.ceil(Math.random() * 10);
// var userNumber = +prompt("Input a Number between 1 and 10: ");
// if (randomNumber === userNumber) {
//     alert("Conratulations\nYour Number is Matched :)");
// }
// else {
//     alert("Try Again\nYour Number isn't Matched :(");
// }
// console.log(randomNumber)

//----------------- Date Methods -----------------
//1.
// var rightNow = new Date();
// document.write(rightNow);

//2.
// var rightNow = new Date();
// document.write(rightNow);
// var months = ['January', 'Febarary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// alert("Current Month: " + months[rightNow.getMonth()]);

//3.
// var rightNow = new Date();
// document.write(rightNow);
// var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thr', 'Fri', 'Sat'];
// alert("Toady is " + days[rightNow.getDay()]);

//4.
// var rightNow = new Date();
// if (rightNow.getDay() === 0 || rightNow.getDay() === 6) {
//     alert("It's Fun Day");
// }

//5.
// var rightNow = new Date();
// if (rightNow.getDate() < 15) {
//     alert("First Fifteen Days of the Month");
// }
// else {
//     alert("Last Days of the Month");
// }

//6.
// var rightNow = new Date();
// document.write("Current Date: " + rightNow + "<br />");
// document.write("Elapsed Minutes since January 1, 1970: " + rightNow.getTime() / (1000 * 60) + "<br />");
// document.write("Elapsed Milliseconds since January 1, 1970: " + rightNow.getTime());

//7.
// var rightNow = new Date();
// if (rightNow.getHours() < 12) {
//     alert("Its AM");
// }
// else {
//     alert("Its PM");
// }

//8.
// laterDate = new Date("December 31, 2020");
// document.write(laterDate);

//9.
// var days = Math.ceil((new Date().getTime() - new Date("April 24, 2020").getTime()) / (1000 * 60 * 60 * 24));
// document.write(days  + " days have passed since 1st Ramadan, 2020");

//10.
// var sec = Math.ceil((new Date("Dec 5, 2015 22:50:16").getTime() - new Date("Jan 1, 2015").getTime()) / (1000 * 60));
// document.write("On reference date Dec 5, 2015 22:50:16 " + sec + " minutes had passed since beginning of 2015");

//11.
// var curr = new Date();
// document.write("Current Date: " + curr + "<br />");
// curr.setHours(curr.getHours() - 1);
// document.write("1 Hour Ago, it was " + curr);

//12.
// var curr = new Date();
// alert(curr);
// curr.setFullYear(curr.getFullYear() - 100);
// alert("100 Years Back, it was " + curr);

//13.
// var age = +prompt("Enter your Age: ");
// var now = new Date();
// var currYear = now.getFullYear();
// now.setFullYear(currYear - age);
// alert("Your Birth Year is " + now.getFullYear());

//14.
// document.write("<h1>" + "K-Electric Bill" + "</h1>");
// var CPU = 18;
// var NOU = 320;
// var LPS = 390;
// document.write("Costumer Name: Imran Ali" + "<br />");
// document.write("Billing Month: July" + "<br />");
// document.write("Number of Units: " + NOU + "<br />");
// document.write("Charges per Unit: " + CPU + "<br />" + "<br />");

// document.write("Net Amount Payable (With in Due Date): " + (NOU * CPU) + "<br />");
// document.write("Late Payment Surcharge: " + LPS + "<br />");
// document.write("Gross Amount Payable (after due date): " + ((NOU * CPU) + LPS) + "<br />")

//----------------------- Functions ------------------------
//1.
// function rightNow() {
//     var dateTime = new Date();
//     alert(dateTime);
// }
// rightNow();

//2.
// function greeting (fn, ln) {
//     alert("Assalam O Alikum " + fn + " " + ln);
// }
// greeting("SAIFULLAH", "BIHARI");

//3.
// function add (num1, num2) {
//     return "Sum : " + (num1 + num2);
// }
// alert(add (+prompt("Enter First Num: "), +prompt("Enter Second Num: ")));

//4.
// function calculator(num1, operator, num2) {
//     switch(operator) {
//         case "+" :
//             alert("Sum : " + (num1 + num2));
//             break;
//         case "-" :
//             alert("Difference : " + (num1 - num2));
//             break;
//         case "*" :
//             alert("Product : " + (num1 * num2));
//             break;
//         case "/" :
//             alert("Quotient : " + (num1 / num2));
//             break;
//         case "%" :
//             alert("Remainder : " + (num1 % num2));
//             break;
//         default :
//             alert("Incorrect Operator")
//     }
// }
// calculator(+prompt("CALCULATOR\nEnter Num 1: "), prompt("CALCULATOR\nEnter Operator: "), +prompt("CALCULATOR\nEnter Num 2: "));

//5.
// var num = +prompt("Enter a Number for squaring: ");
// function powerSq(num) {
//     return num * num;
// }
// alert("Ans: " + powerSq(num));

//6.
// var num = +prompt("Enter a Number for finding factorial: ");
// function factorial(fac_num) {
//     var value = 1;
//     for (var i = fac_num; i > 0; i--) {
//         value = value * i;
//     }
//     return "Ans: " + value;
// }
// alert(factorial(num));

//7.
// var start = +prompt("Enter a Starting Number of Series: ");
// var end = +prompt("Enter an Ending Number of Series: ");
// function series(st, ed) {
//     if (st < ed){
//         for (var i = st; i <= ed; i++) {
//             document.write(i + " ");
//         }
//     }
//     else {
//         alert("Invalid Points");
//     }
// }
// document.write("<h2>" + "Series Of Numbers" + "</h2>");
// series(start, end);

//8.
// var per = +prompt("Input a Perpendicular of Right Triangle: ");
// var base = +prompt("Input a Base of Right Triangle: ");
// function squaring(val) {
//     return (val * val);
// }
// function hypotenuse(p, b) {
//     var hypo = squaring(p) + squaring(b);
//     return Math.round(Math.sqrt(hypo));
// }
// alert("Hypotenuse of Right Triangle is: " + hypotenuse(per, base));

//9.
// var width = 10;
// var height = 6;
// function areaOfrec(w, h) {
//     alert("Area: " + (w * h));
// }
// areaOfrec(4, 5);
// areaOfrec(width, height);

//10.
// var str = prompt("Enter a String to check Palindrome or not: ");
// function palindromeChecker(userString) {
//     var revStr = "";
//     for (var i = userString.length - 1; i >= 0 ; i--) {
//         revStr = revStr + str[i];
//     }
//     console.log(str);
//     console.log(revStr);
//     if (str === revStr) {
//         alert("Given String is a Palindrome");
//     }
//     else {
//         alert("String is not a Palindrome");
//     }
// }
// palindromeChecker(str);

//11.
// function titleCase(string) {
//     var check = "";
//     for (var i = 0; i < string.length; i++) {
//         if (i === 0 || string[i - 1] === " ") {
//             check = check + string[i].toUpperCase();
//         }
//         else {
//             check = check + string[i];
//         }
//     }
//     console.log(check);
// }
// titleCase("hello maria, you are the leader of 2020 bootcamp");

//12.
// function longestWord(string) {
//     var check1 = "";
//     var check2 = [];
//     var greaterLen = ""; 
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] !== " ") {
//             check1 = check1 + string[i];
//         }
//         else {
//             check2.push(check1);
//             check1 = "";
//         }
//     }
//     check2.push(check1);
//     for (var i = 0; i < check2.length; i++) {
//         if(check2[i].length > check2[i + 1].length) {       //TypeError
//             greaterLen = check2[i];
//         }
//     }
//     alert("Longest Word with in the String is: " + greaterLen);
// }
// longestWord("Web and Mobile Develoment");

//13.
// function letterCounter(str, let) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === let) {
//             count++;
//         }
//     }
//     alert("The Number of Occurence of \"" + let + "\" in \"" + str  + "\" is " + count + " times");
// }
// letterCounter("I am good fantastic, how about you?", "a");

//14.
// var circleRadius = +prompt("Enter a Circle Radius: ");
// function calCircumference(rad) {
//     alert("The Circumference is: " + (2 * Math.PI * rad).toFixed(3));
// }
// function calArea(rad) {
//     alert("The Area is: " + (Math.PI * (rad * rad)).toFixed(2));
// }
// calCircumference(circleRadius);
// calArea(circleRadius);