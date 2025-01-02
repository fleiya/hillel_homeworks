// за допомогою циклу for
function pow(x, y) {
    let value = 1;
    for (let i = 0; i < y; i++) {
        value = value * x;
    }
    return value;
}

console.log(pow(4, 2));
console.log(pow(5, 3)); 
console.log(pow(6, 5)); 
console.log(pow(7, 4));


// за допомогою циклу while
function pow(x, y) {
    let value = 1;
    let i = 0; 
    while (i < y) {
        value = value * x;
        i++;
    }
    return value;
}

console.log(pow(4, 2));
console.log(pow(5, 3)); 
console.log(pow(6, 5)); 
console.log(pow(7, 4)); 
