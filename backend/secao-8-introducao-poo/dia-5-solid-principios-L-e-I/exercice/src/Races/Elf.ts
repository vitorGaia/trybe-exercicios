import Race from "./Race";

export default class Elf extends Race {
  private static instanceCount: number = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instanceCount += 1;
  }

  createdRacesInstances(): number { return Elf.instanceCount; };

  maxLifePoints(): number { return 99; };
}