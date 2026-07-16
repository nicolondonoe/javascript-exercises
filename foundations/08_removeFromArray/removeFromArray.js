const removeFromArray = function(array) {
    let searchFrom = 0;
    let indexToRemove = 0;
    for (let i = 1; i < (arguments.length); i++) {
        while (indexToRemove >= 0) {
            indexToRemove = array.indexOf(arguments[i], searchFrom);
            if (indexToRemove >= 0) {
                array.splice(indexToRemove, 1); 
            }
            searchFrom = array.indexOf(arguments[i], searchFrom);
        }
        searchFrom = 0;
        indexToRemove = 0;
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
