/*
*
* Random generator
*
* */

instance = {

    // generating a random number between min and max: returns an integer
    number : (min =0 , max = 1 ) => {
        max++; // adding 1 to include max number in results
        return Math.floor((Math.random() * max) + min);
    },

    // returns a random element in the array. returns as a string
    array : (arr = []) => {
        let length = arr.length;
        let randomArrayNumber;
        if (arr.length == 0) {
            randomArrayNumber = 0;
        } else {
            randomArrayNumber = instance.number(0, length);
        }

        return arr[randomArrayNumber];
    },

    // returns a random key and value pair. returns as an object
    object : (obj = {}) => {
        let keys = Object.keys(obj);
        let values = Object.values(obj);

        let num = instance.number(0, keys.length-1);
        let randomObj = {};
        let key = keys[num];
        let value = values[num];
        randomObj[key] = value;

        return randomObj
    },

    // returns a random character in a string
    character : (string = '') => {
        let length = string.length;
        let num = instance.number(0 , length);
        return string[num];
    },

    shuffle : (array = []) => {
        if (array.length < 2) {
            // does nothing. Needs to be grater than 1
            return array;
        } else {
            for (let i = 0; i < array.length + 300; i++) {
                let num = instance.number(0, array.length-1);
                let temp = array[num];
                array.splice(num, 1);
                if (i % 2 == 0){
                    array.unshift(temp);
                } else {
                    array.push(temp);
                }
            }
        }
        return array;
    },
};

module.exports = {
    instance,
};