const sumAll = function(num1, num2) {
    let menor = Math.min(num1, num2);
    let maior = Math.max(num1, num2);
    let total = 0;
    let error = "ERROR";

    if (menor < 0 || maior < 0) {
        return error;
    } else if ((typeof num1 === "string") || (typeof num2 === "string")) {
        return error;
    } else if ((typeof num1 === "object") || (typeof num2 === "object")) {
        return error;
    } else {
        for (let i = menor; i <= maior; i++) {
            total = total + i;
        }
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
