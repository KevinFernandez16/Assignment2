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
const array = [2, 4, 6]// example array
Array.prototype.mySome = function (callback, argument) {
    for (let i = 0; i < this.length; i++) {//checks all values of array
        if (callback(i, this, this[i], argument))
            return true;
    }
    return false;
};
const check_array = (element) => element % 2 === 0;//prints true
const check_array2 = (element) => element %! 2 === 0;//prints false
console.log(array.mySome(check_array));//prints to console
console.log(array.mySome(check_array2));


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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};