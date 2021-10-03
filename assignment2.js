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
const array = [1, 2, 3, 4];//example array
Array.prototype.myReduce = function (callback, value) {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
        if (total == undefined) continue;//continue executes this part of the loop
        total = callback(total, this[i], i, this, undefined);
    }
    return total;
};
const reducer = (callback, value) => callback + value;
console.log(array.myReduce(reducer));//prints to the console
//expected answer should be 10


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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};