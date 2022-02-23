const numStr =  {
    "0" : "zero", "1" : "one", "2" : "two", "3" : "three", "4" : "four", "5" : "five", "6" : "six", "7" : "seven", "8" : "eight", "9" : "nine", "10" : "ten", "11" : "eleven", "12" : "twelve", "13" : "thirteen", "14" : "fourteen", "15" : "fifteen", "16" : "sixteen", "17" : "seventeen", "18" : "eighteen", "19" : "nineteen", "20" : "twenty", "30" : "thirty", "40" : "forty", "50" : "fifty", "60" : "sixty", "70" : "seventy", "80" : "eighty", "90" : "ninety",
};

let num1 = '',
    num2 = '',
    num3 = '';

module.exports = function toReadable (number) {
    if (number >= 100) {
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[0] === Object.keys(numStr)[i]) {
               num1 = (`${Object.values(numStr)[i]} hundred`);
            }
        }
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[1] > 0 && number.toString()[1] + number.toString()[2] === Object.keys(numStr)[i]) {
                num2 = (Object.values(numStr)[i]);
                return `${num1} ${num2}`;
            } else if (number.toString()[1] + "0" === Object.keys(numStr)[i]) {
                num2 = (Object.values(numStr)[i]);
            } 
        }
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[2] > 0 && number.toString()[2] === Object.keys(numStr)[i]) {
                num3 = (Object.values(numStr)[i]);
            }
        }
        if (number.toString()[1] === "0" && number.toString()[2] === "0") {
            return num1;
        }
        if (number.toString()[1] === "0") {
            return `${num1} ${num3}`;      
        }
        return result = `${num1} ${num2} ${num3}`;
    } else if (number >= 10 && number < 20) {
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[0] + number.toString()[1] === Object.keys(numStr)[i]) {
                num1 = (Object.values(numStr)[i]);
            }
        }
        return result = num1;
    } else if (number >= 20 && number < 100) {
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[0] + "0" === Object.keys(numStr)[i]) {
                num1 = (Object.values(numStr)[i]);
            }
        }
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[1] > 0 && number.toString()[1] === Object.keys(numStr)[i]) {
                num2 = (Object.values(numStr)[i]);
            }
        }
        if (number.toString()[1] === "0") {
            return num1;
        }
        return result = `${num1} ${num2}`;
    } else if (number < 10) {
        for (i = 0; i < Object.keys(numStr).length; i++) {
            if (number.toString()[0] === Object.keys(numStr)[i]) {
                num1 = (Object.values(numStr)[i]);
            } 
        }
        return num1;
    }
}
