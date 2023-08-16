interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
};

class MyClass implements MyInterface {
  constructor(
    public myNumber: number = 0
  ) {}

  myFunc(myParam: number): string {
    const sum = myParam + this.myNumber;
    return `Resultado da soma ${sum}`;
  }
}

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));