const createUser = function createUser(name, age) {
  const user = {
    name,
    age,
    hobby: "hockey",
  };
  user.greet = greet;
  return user;
};

const greet = function greet() {
  console.log(
    `Hi, my name is ${this.name} and I'm ${this.age} years old, and I like ${this.hobby} so much!`,
  );
};

const userOne = createUser("Hanna", 37);
userOne.greet();

const userTwo = createUser("Antonio", 17);
userTwo.greet();
