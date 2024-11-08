let x = 10;
let y = 5;
console.log("Initially:", "x =", x, ", y =", y, "-> x > y is", x > y);

// Now, find new values where x < y
x = 3;
y = 7;
console.log("After adjustment:", "x =", x, ", y =", y, "-> x < y is", x < y);


if (y < x) {
    console.log("y is less than x, enforcing y < x");
} else {
    console.log("Condition y < x is not met, x < y holds true.");
}
