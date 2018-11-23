function my_max(array){
    let max = array[0];
    array.forEach(function(element) {
        if(max < element){
            max = element
        }
      });
      return console.log(max);
};

function  vowel_count(string){
    let m = string.match(/[aeiou]/gi);
    return m === null ? console.log(0) : console.log(m.length);
};

function reverse(string){
    let word = "";
    for (var i = 1; i <= string.length; i++) {
        word += string[string.length-i];
    };
    return console.log(word)
};

function add(a, b){
    return a + b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a/b;
};

function substract(a, b){
    return a - b;
};
