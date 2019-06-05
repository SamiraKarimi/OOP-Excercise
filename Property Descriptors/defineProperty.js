let anotherPerson = { name: "Sammy" };

Object.defineProperty(anotherPerson, "name", {
  /*by defualt all of these attribute are true*/
  writable: false,
  enumerable: false,
  configurable: false
});
anotherPerson.name = "John";
console.log(Object.keys(anotherPerson));
