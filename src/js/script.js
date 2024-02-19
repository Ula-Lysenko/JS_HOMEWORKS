const parseJSONToObj = (jsonStr) => {
  try {
    const parsedObject = JSON.parse(jsonStr);
    return parsedObject;
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    // return null; // Return null or handle the error as needed
  }
};

// Приклад використання:
const jsonStr = '{"name": "John", "age": , "city": "New York"}';
console.log(parseJSONToObj(jsonStr));
// const parsedResult = parseJSONToObj(jsonStr);

// if (parsedResult) {
//   console.log("Parsed object:", parsedResult);
// } else {
//   console.log("Invalid JSON input.");
// }
