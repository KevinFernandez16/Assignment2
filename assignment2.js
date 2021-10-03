// FOR EACH //
Array.prototype.myEach = function() {

};

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement, element) {
};

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
const object1 = {//given example
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.values(object1));