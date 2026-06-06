// FOR IN LOOP
let student = {
  name: "Nimal",
  age: 18,
  city: "Colombo"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}