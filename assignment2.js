// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if (this[i] === undefined ) continue;
        //element
        //element index 
        //element index array
        callbackFn(this[i], i, this);

    }
};
//Used to test foreach function
//const array1 = ['a', 'b', 'c'];
//array1.myEach(element => console.log(element));
// MAP //
let array = [2, 4, 6];// example array
let array2 = [3, 6, 9];
//Array.prototype.myMap = function(print_array){
    let array_bracket = [];
    let array_size = this.length;// set a variable equal to the array's length.
    for (let i = 0; i < array_size; i++){
        let counter = print_array(this[i]);
        array_bracket.push(counter);
    }
    return array_bracket;
};
//array = array.myMap(e => e * 2);//multiplies array values by 2
//array2 = array2.myMap(e => e + 5);// adds the second array values by 5
//console.log(array);//prints out the array
//console.log(array2);//prints out array2

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
//const array = [2, 4, 6]// example array
Array.prototype.mySome = function (callback, argument) {
    for (let i = 0; i < this.length; i++) {//checks all values of array
        if (callback(i, this, this[i], argument))
            return true;
    }
    return false;
};
//const check_array = (element) => element % 2 === 0;//prints true
//const check_array2 = (element) => element %! 2 === 0;//prints false
//console.log(array.mySome(check_array));//prints to console
//console.log(array.mySome(check_array2));


// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
//const array = [1, 2, 3, 4];//example array
Array.prototype.myReduce = function (callback, value) {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        if (total == undefined) continue;//continue executes this part of the loop
        total = callback(total, this[i], i, this, undefined);
    }
    return total;
};
//const reducer = (callback, value) => callback + value;
//console.log(array.myReduce(reducer));//prints to the console
//expected answer should be 10


// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
//const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];//example array
Array.prototype.myIndexOf = function (searchElement, element) {
    let animal = element//set argument to variable animal
    for (let i = 0 || animal; i < this.length; i++) {
        if (this[i] === searchElement) {
            return i || animal;//returns position the animal is located in in the array
        }
    }
    return -1;//returns -1 if false
};
//console.log(beasts.myIndexOf('bison'));// should output 1
//console.log(beasts.myIndexOf('bison', 2));// should output 4
//console.log(beasts.myIndexOf('giraffe'));// should output -1

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
//const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];//example array
Array.prototype.myLastIndexOf = function (searchElement, element) {
    let animal = element//set argument to variable animal
    backwards = 1;
    for (let i = this.length - backwards; i >= 0 || animal; i--) {//Basically switched around the for loop from previous function
        //similar to myIndexOf but we are trying to return the last index
        if (this[i] == searchElement) {
            return i || animal;//returns position the animal is located in the array
        }

    }
    return -1;//returns -1 if false
//Array.prototype.myLastIndexOf = function (searchElement, element) {
};
//console.log(animals.myLastIndexOf('Dodo'));// should output 3
//console.log(animals.myLastIndexOf('Tiger'));// should output 1

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function (obj) {
    let array = [ ];//defined an empty array to grab and place values into
    for (let values in Object.grabValues(obj)) {//for every value in object, a new set of data is pushed into our new array
        values = array.push(obj[value]);//push adds elements to end of an array
    }
    return array;//return the array
};
//const object1 = {//given example
   // a: 'somestring',
   // b: 42,
   // c: false
//};

//console.log(Object.values(object1));
