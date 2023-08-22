import Race from "./Race";

export default class Orc extends Race {
  private static instanceCount: number = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instanceCount += 1;
  }

  createdRacesInstances(): number { return Orc.instanceCount; };

  maxLifePoints(): number { return 74; };
}