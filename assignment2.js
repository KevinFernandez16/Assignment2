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
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    //create an empty array 
    const new_array = [];
    for (let i = 0; i < this.length;i++){
        if (callbackFn(this[i], i, this))
          new_array.push(this[i]);
        
    }
    return new_array;
};
//used to test filter function
//const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//const result = words.myFilter(word => word.length > 6);
//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

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