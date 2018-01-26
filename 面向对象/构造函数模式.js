function Person(name) {
  this.name = name
  this.say = say

  function say() {
    console.log(this.name)
  }
}


const p = new Person('qin')
p.say()
