// FOR EACH //
Array.prototype.myEach = function() {

};

// MAP //
let array = [2, 4, 6, 8, 10, 12];// example array
Array.prototype.myMap = function(print_array){
    let array_brac = [];
    let array_size = this.length;// set a variable equal to the array's length.
    for (let i = 0; i < array_size; i++) {
        let counter = print_array(this[i]);
        array.push(counter);
    }
    return array;
};
array = array.myMap(e => e * 2);//multiplies array values by 2
console.log(array)//prints out the array

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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};