const repeatString = function(string, num) {
    let addedString = '';
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            addedString += string;
        }
        return addedString;
    } else {
        return 'ERROR';
    }    
};

// Do not edit below this line
module.exports = repeatString;
