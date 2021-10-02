// FOR EACH //
Array.prototype.myEach = function() {

};

// MAP //
let array = [2, 4, 6];// example array
let array2 = [3, 6, 9];
Array.prototype.myMap = function(print_array){
    let array_bracket = [];
    let array_size = this.length;// set a variable equal to the array's length.
    for (let i = 0; i < array_size; i++){
        let counter = print_array(this[i]);
        array_bracket.push(counter);
    }
    return array_bracket;
};
array = array.myMap(e => e * 2);//multiplies array values by 2
array2 = array2.myMap(e => e + 5);// adds the second array values by 5
console.log(array);//prints out the array
console.log(array2);//prints out array2

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