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
Array.prototype.myEvery = function(callbackFn) {
    for (let i = 0; i < this.length; i++){
        if (!callbackFn(this[i], i, this))
            return false;
        else
            return true;
    }
};

//const isBelowThreshold = (currentValue) => currentValue < 40;

//const array1 = [1, 30, 39, 29, 10, 13, 41];

//console.log(array1.myEvery(isBelowThreshold));
// expected output: true


// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function(callbackFn) {
    let includes = false;
    for (let i = 0; i < this.length; i++){
        if (this[i] === callbackFn)
            includes = true;
    }
    return includes;

};

//const array1 = [1, 2, 3];

//console.log(array1.myIncludes(2));
// expected output: true

//const pets = ['cat', 'dog', 'bat'];

//console.log(pets.myIncludes('cat'));
// expected output: true

//console.log(pets.myIncludes('at'));
// expected output: false

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {
    for(let i = 0; i < arguments.length; i++)
    //adding the element to the end of the array
      this[this.length] = arguments[i];
    return this.length;
  };
  
  //const animals = ['pigs', 'goats', 'sheep'];
  
  //const count = animals.myPush('cows');
  //console.log(count);
  // expected output: 4
  //console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows"]
  
  //animals.myPush('chickens', 'cats', 'dogs');
  //console.log(animals);
  // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};