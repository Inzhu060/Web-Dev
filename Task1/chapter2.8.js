let a = 1, b = 1;
alert(++a);
alert(b++);
alert(a);
alert(b);

let c = 2;
let x = 1 + (c *= 2);
alert(c);
alert(x);

let d = prompt("First number?", 1);
let f = prompt("Second number?", 2);

alert(+d + +f);