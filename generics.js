"use strict";
const getSearchProducts = (products) => {
    return products[2];
};
const convertToArray = (input) => {
    if (typeof input === "string") {
        return [input.toUpperCase()];
    }
    return [input];
};
convertToArray("hemant");
convertToArray(2);
convertToArray({});
function anotherFunction(valOne, valTwo) {
    return { valOne, valTwo };
}
anotherFunction(3, { connection: "a", username: "", password: "" });
