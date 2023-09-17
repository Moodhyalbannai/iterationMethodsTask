//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/


//1
//Q1) Create a new array containing numbers that are greater than or equal to 25.

function filterIt1(x){
    return x>=25;
}

const greaterthan25 = numbers.filter(filterIt1);
console.log(greaterthan25);

//--------------------------------------------------------------//

//2
//Q2) Create a new array containing numbers that are divisible by 5.
function filterIt2(x1){
    return x1%5 == 0;
}

const divisibleBy5 = numbers.filter(filterIt2);
console.log(divisibleBy5);


//--------------------------------------------------------------//

//3
//Q3) Create a new array that contains each number squared.
function map1(x2){
    return x2**2;
}

const eachNumberSquared = numbers.map(map1);
console.log(eachNumberSquared);

//--------------------------------------------------------------//

//4
//Q4) Create a new array that contains each number multiplied by 2.
function map2(x3){
    return x3*2;
}

const numberMultipliedBy2 = numbers.map(map2);
console.log(numberMultipliedBy2);

//--------------------------------------------------------------//

//5
//Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
function filterIt3(x4){
    return x4>=20;
}

function squareIt1(x4){
    return x4**2;
}

const acceptable1 = numbers

.filter(filterIt3)
.map(squareIt1);

console.log (acceptable1);

//--------------------------------------------------------------//

//6
//Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
function filterIt4(x5){
    return x5%5 == 0;
}

function squareIt2(x5){
    return x5**3;
}

const acceptable2 = numbers

.filter(filterIt4)
.map(squareIt2);

console.log (acceptable2);