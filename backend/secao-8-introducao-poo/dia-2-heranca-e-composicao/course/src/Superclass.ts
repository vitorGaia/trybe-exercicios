class Superclass {
  constructor(
    public isSuper: boolean = true,
  ) {}

  public sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
}

function myFunc(superclass: Superclass) {
  // return superclass.sayHello()
  console.log(superclass.isSuper ? 'Super!' : 'Sub!');
}

const super1 = new Superclass();
const sub1 = new Subclass();

myFunc(super1);
myFunc(sub1);