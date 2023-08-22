import Race from "./Race";

export default class Dwarf extends Race {
  private static instanceCount: number = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instanceCount += 1;
  }

  createdRacesInstances(): number { return Dwarf.instanceCount; };

  maxLifePoints(): number { return 80; };
}