const fibonacci = function() {
    var sequence = [];

    sequence[0] = 0;
    sequence[1] = 1;
    
    for (i = 2; i < 10; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence[6];
};

// Do not edit below this line
module.exports = fibonacci;
