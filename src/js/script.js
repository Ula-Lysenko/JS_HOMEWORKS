const parseJSONToObj = (jsonStr) => {
  try {
    const parsedObj = JSON.parse(jsonStr);
    return parsedObj;
  } catch (error) {
    console.error("Invalid JSON string: ", error.message);
    return null; // Return null or handle the error as needed
  }
};

const jsonStr = '{"last name": "Bond", "name": "James Bond", "city": "Tokyo"}';
console.log(jsonStr);

console.log(parseJSONToObj(jsonStr));
