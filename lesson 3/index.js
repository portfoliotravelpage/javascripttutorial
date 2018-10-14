function print(a,b) {
    var x = 42;
// '    console.log(x);'
    // console.log(a * b);

    return a * b;
}

var x = 2;
var y = print(x,8);
// print(x,8);
// console.log(y);

var test1 = (a,b) => {
    a * b;
}

// var test1 = a => a * 9;

// function testing(a,print) {
//     a = true;
//     print();
// }

// testing(false,print);

var  test = function () {
    test1();
    // testing();
    print();
} 

test();