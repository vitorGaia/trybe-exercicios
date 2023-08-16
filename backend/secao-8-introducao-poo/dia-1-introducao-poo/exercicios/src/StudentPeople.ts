class StudentPeople {
  private _registration: string;
  private _name: string;
  private _testResults: number[] = Array();
  private _workNotes: number[] = Array();

  constructor(
    registration: string,
    name: string,
    testResults: number[],
    workNotes: number[],
  ) {
    this._registration = registration;
    this._name = name;
    this.testResults = testResults;
    this.workNotes = workNotes;
  }

  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    this._registration = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get testResults(): number[] {
    return this._testResults;
  }
  public set testResults(value: number[]) {
    if (value.length === 4) this._testResults = value;
    else throw new Error('A pessoa precisa de 4 notas de prova.');
  }

  public get workNotes(): number[] {
    return this._workNotes;
  }
  public set workNotes(value: number[]) {
    if (value.length === 2) this._workNotes = value;
    else throw new Error('A pessoa precisa de 2 notas de trabalho.');
  }

  calcSumNotes(): number {
    return [...this._testResults, ...this._workNotes]
    .reduce((acc, note) => acc += note);
  }

  calcAverageNotes(): number {
    const sum = this.calcSumNotes();
    const average = +(sum / [...this._testResults, ...this._workNotes].length).toFixed(2);
    return average;
  }
};

const student1 = new StudentPeople('1234', 'Vitão', [10, 7, 3, 7], [6, 8.7]);
console.log(student1);
console.log(`Soma das notas ${student1.calcSumNotes()}`);
console.log(`Média das notas ${student1.calcAverageNotes()}`);