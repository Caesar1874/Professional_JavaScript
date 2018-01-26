function add(num1, num2) {
  return num1 + num2
}
const curriedAdd = add.bind(this, 23)
console.log(curriedAdd(24))