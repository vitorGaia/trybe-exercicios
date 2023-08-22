import Race from "./Race";

export default class Halfling extends Race {
  private static instanceCount: number = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instanceCount += 1;
  }

  createdRacesInstances(): number { return Halfling.instanceCount; };

  maxLifePoints(): number { return 60; };
}