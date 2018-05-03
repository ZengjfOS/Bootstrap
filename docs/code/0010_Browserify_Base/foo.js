module.exports = function (n) {
    return n * 111
};

var numbers = [];
for (var i = 0; i < 100; i++) numbers.push(i);

module.exports.numbers = numbers;

module.exports.beep = function (n) { return n * 1000 }
module.exports.boop = 555
