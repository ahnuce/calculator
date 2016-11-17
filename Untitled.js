class Animal{
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.diet = [];
  }
  eat(food){
    this.diet.push(food);
    console.log(diet);
  }
}

class Dog extends Animal {
  constructor(name, breed, tail) {
    super(name, breed);
    this.waggingTail = tail;
  }
  bark() {
    console.log(`bark. this is dog. my name is ${this.name}`)
  }
}

class Cat extends Animal {
  constructor(name, breed, numLives){
    super(name, breed);
    this.numLives = numLives;
  }
  meow(){
    return `Meow! I am not a dog! My name is ${this.name}`
  }
}

const goat = new Animal("Billy", "mountain goat");
console.log(goat);
//
const fido = new Dog("Fido", "Beagle", true);
console.log(fido);
