const getSearchProducts = <T>(products: T[]): T => {
  return products[2];
};

const convertToArray = <T>(input: T): T[] => {
  if (typeof input === "string") {
    return [input.toUpperCase() as T];
  }
  return [input];
};

convertToArray("hemant");
convertToArray(2);
convertToArray({});

interface Databse {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Databse>(valOne: T, valTwo: U): object {
  return { valOne, valTwo };
}

anotherFunction(3, { connection: "a", username: "", password: "" });
