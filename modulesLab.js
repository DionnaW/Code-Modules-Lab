// name as variable
const name = 'myModule';

// getValue as a function
function getValue() {
    return 'this is getValue';
}

// findAnswer is a function
function findAnswer(a, b) {
    return `this is findAnswer and the arguments are: ${a} and ${b}`;
}

// makeCake is a function
function makeCake() {
    return 'make the cake';
}

// eatItToo is a function
function eatItToo() {
    console.log('eat it too');
}

// hidden from everyone else
function notShared() {
    console.log('this function is not exported so I can only access it in here');
}

export { name, getValue, findAnswer, makeCake, eatItToo };