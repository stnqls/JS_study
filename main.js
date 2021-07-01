// Truthy & Falsy

//Falsy
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN); // Not a Number
console.log(!false);

//Truthy
console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});
console.log(!true);

const value = {};
const truthy = !!value;
console.log(truthy);