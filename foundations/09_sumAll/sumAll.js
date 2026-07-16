const sumAll = function(numA, numB) {
    if ((numA > 0 && numB > 0) && (Number.isInteger(numA) && Number.isInteger(numB))) {
        let greatestNum;
        let smallestNum;
        if (numA > numB) {
            greatestNum = numA;
            smallestNum = numB;
        } else {
            greatestNum = numB;
            smallestNum = numA;
        }
    
        let numberArray = [];
        let index = 0;
        let currentNum = smallestNum;
        for (let i = smallestNum; i <= greatestNum; i++) {
            numberArray[index] = i;
            index++;
        }
    
        const result = numberArray.reduce( (previousValue, currentValue) => previousValue + currentValue );
        return result;
    }
    else {
        return 'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
