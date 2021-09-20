<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width" initial-scale="1.0">
	<title>JavaScript Tutorial</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

	<!-- <div class="heading"> -->
		<!-- <h1><i class="fa fa-sticky note"></i></h1>
	</div> -->

	<!-- <div class="btn-div"></div> -->

<script>
	/*Values and variable*/
	var myName = 'Kyara Hariyani';
	var myAge = 28;
	console.log(myName);

	/*Data types*/
	var myName = 'Kyara Hariyani';
	var iampallavi = true;
	console.log(iampallavi);
	console.log(myName);

	/*Type of operator*/
	console.log(typeof(myName));
	console.log(typeof(myAge));
	console.log(typeof(iampallavi));
	console.log( 10 + "20");
	console.log( 9 - "5");/*getting result of number - string is a bug*/
	console.log( "Java " + "Script");
	console.log( " " + "0");
	console.log( "Java " - "Script");
	console.log( true + true);

	/*Difference between null and undefined*/

	var iamusefull = null;
	console.log(iamusefull);
	console.log(typeof(iamusefull));/*showing type as object and null can't be object, so it is a bug */

	var iamstandby;
	console.log(iamstandby);
	console.log(typeof(iamstandby));

	/*What is NAN?*/
	var myphonenum = 2222200000 ;
	var myName = "Pallavi"
	console.log(isNaN(myphonenum));
	console.log(isNaN(myName));

	if(isNaN(myName)){
		console.log("Please enter valid mob. no.");
	}

	console.log(NaN === NaN);
	console.log(Number.NaN === NaN);
	console.log(isNaN(NaN));
	console.log(isNaN(Number.NaN));
	console.log(Number.isNaN(NaN));

	/*Expressions and Operators*/
	console.log(5+20);

	/*Assingment operator*/
	var x = 5;
	var y = 5;
	console.log("is both x and y are equal or not" + x == y );
	console.log(x == y );

	/*Arithmatic operator*/
	console.log(3+3);
	console.log(10-5);
	console.log(20/5);
	console.log(5*6);
	/*modular operator*/

	console.log("Remainder operator " +  271%8);

	/*Increment and decrement operator */

	var num = 15;
	var newNum = num++; 
	console.log(num);
	console.log(newNum);


	/*Prefix operator*/
	var num = 15;
	var newNum = ++num; 
	console.log(num);
	console.log(newNum);

	/*Decrement operator*/
	var num = 15;
	var newNum = num-- + 5; 
	console.log(num);
	console.log(newNum);

	/*Prefix Decrement operator*/
	var num = 15;
	var newNum = --num + 5; 
	console.log(num);
	console.log(newNum);

	/*Comparison operator*/
	var a = 30;
	var b = 10;

	//Equal (==)
	console.log(a == b);

	//Not Equal (!= )
	console.log(a !=  b);

	//Greater than ( > )
	console.log(a >  b);

	//Greater than or equal ( >= )
	console.log(a >=  b);

	//Less than ( < )
	console.log(a <  b);

	//Greater than or equal ( <= )
	console.log(a <=  b); 

	/*Logical operator*/


	//Logical and (&&)
	 var a = 30;
	 var b = -20;

	 console.log(a > b && b > 0);

	 //Logical or (||)
    console.log(a > b || b > 0 || b < 0);

    //Logical not ( ! )
    console.log(!((a > 0) || (b > 0)));
    console.log(!false);
    console.log(!true);

	/*String Concatenation*/
	var myName = "Pallavi";
	console.log(myName + " Naik" );

	/*Exercise*/
	//What will be the output for 3**3?
	console.log(3**3); /*(power 3, exponentiation operator)*/

	//What will be the output, when we add a number and string?
	console.log(5 + "hello") 
	console.log(5 - "hello") //NaN

	//Write a program to swap two numbers
	 var a = 5;
	 var b = 10;
	 

	 var c = b;//c = 10;
	 b = a ; //b = 5;
	 a = c;

	 console.log("The value of a is " + a);
	 console.log("The value of b is " + b);

	 //outout b = 5; a = 10;

	 //Control Statement and loops

	 //If ... Else
	 var tomr = 'rain';

	 if(tomr = 'rain') {
	 	console.log('Take a raincoat');
	 } else {
	 	console.log('Do not take raincoat');
	 }

	 //Program for leap year or not
	 var year = 2020;

	 if(year % 4 === 0){
	 	if(year % 100 === 0){
	 		if(year % 400 === 0) {
	 			console.log("The year " + year + " is a leap year");
	 		}
	 		else {
	 		console.log("The year " + year + " is not a leap year");
		}

	 } else {
	 	console.log("The year " + year + " is a leap year");
	 } 
	} else {
	 	console.log("The year " + year + " is not a leap year");
	 }

	 //truthy and falsy concept

	 if(score = 0){
	 	console.log("OMG, we loss the game");
	 } else {
	 	console.log("Yay, We won the game");
	 }


	 //Conditional (ternary) operator(short version of if... else)
	 //variablename = (condition) ? value1:value2

	 var age = 19;
	 if(age >= 18){
	 	console.log("You are eligible to vote");
	 } else {
	 	console.log("You are not eligible to vote");
	 }

	 //ternary operator(short version of if... else)
	 var age = 17;
	console.log((age >= 18) ? "You are eligible to vote" : "You are not eligible to vote");

	//Switch statement
	//Find area of circle, triangle and rectangle?

	var area = "circle";
	var PI = 3.14; l=5, b=4, r=3;

	if(area == "circle") {
		console.log("The area of circle is : " + PI*r**2); 
	} else if(area == "triangle")  {
		console.log("The area of triangle is : " + (l*b)/2); 
	}  else if(area == "rectangle")  {
		console.log("The area of rectangle is : " + (l*b)); 
	}  else  {
		console.log("Please enter valid data"); 
	}

		//Switch statement
	var area = "circle";
	var PI = 3.14; l=5, b=4, r=3;

	switch(area){
		case 'circle':
		console.log("The area of circle is : " + PI*r**2); 
		break;

		case 'triangle':
		console.log("The area of triangle is : " + (l*b)/2); 
		break;

		case 'rectangle':
		console.log("The area of rectangle is : " + (l*b)); 
		break;

		default:
		console.log("Please enter valid data");
	}

	//while loop

	var num = 10;

	while(num<=10){
		console.log(num);
		num++;
	}

	//do while loop

	var num = 20;

	do {
		console.log(num);
		num++;
	} while(num<=10);

	//for loop

	for(var num=10; num<=0; num++){
		console.log(num);
	}

	for(var num=1; num<=10; num++){
		var tableOf = 8;
		console.log(tableOf + " * " + num + " = " + tableOf * num);
	}

	//Functions

	function sum(a,b){
		var total = a+b;
		console.log(total);
	}
	sum(50,100);

	//function expressions
	function sum(a,b){
		var total = a+b;
		console.log(total);
	}
	var funExp = sum(50,200);

	//return keyword
	function sum(a,b){
		return total = a+b;
	}
	var funExp = sum(30,60);

	console.log('the sum of two number is ' + funExp );

	//Annonymous function(funct without a name)

	var funExp = function(a,b){
		return total = a+b;
	}

	var sum = funExp(30,50);
	var sum1 = funExp(30,70);
	console.log('the sum of two number is ' + sum );
	console.log('the sum of two number is ' + sum1 );
	console.log(sum > sum1);

	//ECMA2015
	//LET vs CONST vs VAR

	// var myName = "Pallavi naik"
	// console.log(myName);

	// myName = "Pallavi naik"
	// console.log(myName);

	// const myName = "Pallavi naik"
	// console.log(myName);

	// myName = "Pallavi naik"
	// console.log(myName);

	//var => Function scope
	//let and const => Block scope

	function biodata(){
		var myFirstname = "Kyara";//in var we can change data anywhere
		console.log(myFirstname);

		if(true){
		var myLastname = "Hariyani";
		console.log('inner' + myLastname);
		console.log('inner' + myFirstname);
		}
		console.log('innerOuter' + myFirstname);

	} 
	biodata();

	function biodata(){
		let myFirstname = "Kyara";//in var we can change data anywhere
		console.log(myFirstname);

		if(true){
		let myLastname = "Hariyani";
		console.log('inner' + myLastname);
		console.log('inner' + myFirstname);
		}
//		console.log('innerOuter' + myLastname);

	} 
	biodata();

	//Template literals
	// tableof 12

	for(let num = 1; num <= 10; num++){
		let tableOf = 12;
		console.log( `${tableOf} * ${num} = ${tableOf * num} ` );
	}

	//Default parameter

	function mult(a,b=5){
		return a*b;
	}

	console.log(mult(5));

	//Fat arrow function
	const add = () => `The addition of two numbers are ${(a=5)+(b=10)}` ;
	console.log(add());

	//Arrays in javascript

	var myFriends = ['Ramesh', 'Suresh'];
	console.log(myFriends);

	 //Traversal array
	 var myFriends = ['Ramesh', 'Suresh', 'Arjun'];
	 console.log(myFriends.length);
	 console.log(myFriends[myFriends.length - 1]);

	// //check length of elements
	// console.log(myFriends.length);

	// //we use for loop to navigate
	 var myFriends = ['Ramesh', 'Suresh', 'Arjun', 'Vinod'];

	for(i = 0; i<myFriends.length; i++){
	console.log(myFriends[i]);
	 }

	 //for in loop provides us index number
	 var myFriends = ['Ramesh', 'Suresh', 'Arjun', 'Vinod'];

	 for(let elements in myFriends){
	 	console.log(elements);
	 }

	 //for of
	 var myFriends = ['Ramesh', 'Suresh', 'Arjun', 'Vinod'];

	 for(let elements of myFriends){
	 	console.log(elements);
	 }

	 //for each loop - calls a function for each element in array
	 var myFriends = ['Ramesh', 'Suresh', 'Arjun', 'Vinod'];

	 myFriends.forEach(function(element, index, array) {
	 	console.log(element + " index : " + index + " " + array);
	 });

	 //for each - using fat array function 
	 //fat arraw function does not support this argument

	 myFriends.forEach((element, index, array) => {
	 	console.log(element + " index : " + index + " " + array);
	 });

	 //Searching and filter in array
	 var myFriendNames = ['Ramesh', 'Suresh', 'Arjun', 'Vinod', 'Thapa'];

	 //Array prptotype push
	 const animals = ['lion', 'tiger', 'goat', 'sheep'];

	 animals.push('chicken');
	 console.log(animals);

	 const count = animals.push('chicken');
	 console.log(count);

	 const myNumbers = [1,2,3,5];

	 myNumbers.unshift(4,6);
	 console.log(myNumbers);

	 //Array prptotype pop - to remove data

	 const plants = ['cabbage, tomato, kale, brocolli, papaya'];
	 console.log(plants);
	 console.log(plants.pop());
	// console.log(plants);

	//map function - returns a new array containing the result of a calling funct of every element in this array

	const array1 = [1, 2, 3, 4, 5, 50, 30];
	//let newArr = array1.map((curElem, index, arr) => {
	//	return curElem > 9;
	//});
	//	console.log(array1);
	//	console.log(newArr);


	// let newArr = array1.map((curElem, index, arr) => {
	// 	return `Index number = ${index} and the value ${curElem} belongs to ${arr} `;
	// });
	// console.log(newArr);

	let newArr = array1.forEach((curElem, index, arr) => {
		return `Index number = ${index} and the value ${curElem} belongs to ${arr} `;
	});
	console.log(newArr);

	 //Date
	 let currentdate = new Date();
	 console.log(currentdate);
	 console.log(new Date().toLocaleString());



</script>


</body>
</html>