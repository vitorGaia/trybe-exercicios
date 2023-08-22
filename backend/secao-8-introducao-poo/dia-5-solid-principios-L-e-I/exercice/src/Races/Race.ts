export abstract class Race {
  constructor(
    readonly name: string,
    readonly dexterity: number
  ) { }

  static createdRacesInstaces(): number {
    throw new Error('Not implemented');
  }

  abstract maxLifePoints: number;
}