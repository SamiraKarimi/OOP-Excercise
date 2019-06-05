let person = { name: "Sammy" };

// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
// console.log(descriptor);

Object.defineProperty(person, "name", {
  /*by defualt all of these attribute are true*/
  writable: false,
  enumerable: false,
  configurable: false
});
person.name = "John";
console.log(Object.keys(person));
