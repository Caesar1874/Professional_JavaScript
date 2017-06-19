
var arr = [1, 5, 9,  , 10, 100, 1000, 999];
var max = arr.reduce(function(first, second) {
    return first > second ? first : second;
});