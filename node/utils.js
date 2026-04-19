function sum(value1, value2) {
    return value1+value2;
}

export function square (value1) {
    return value1*value1;
}

function greet () {
    return("Hello World!");
}

// module.exports = { sum };

export {sum};
export default greet;