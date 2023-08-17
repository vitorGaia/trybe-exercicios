export abstract class Character {
  abstract talk(): void;
  abstract spetialMove(): void;

  static characterRepresentation(character: Character): void {
    character.talk();
    character.spetialMove();
  }
};

export class MeleeCharacter extends Character {
  constructor(private _name: string, private _spetialMove: string) {
    super()
  };

  talk(): void {
    console.log(`${this._name} usa ataques de curto alcance.`);
  }

  spetialMove(): void {
    console.log(`${this._name} usou o ataque especial ${this._spetialMove}.`);
  }
}

export class LongRangeCharacter extends Character {
  constructor(private _name: string, private _spetialMove: string) {
    super()
  };

  talk(): void {
    console.log(`${this._name} usa ataques de longo alcance.`);
  }

  spetialMove(): void {
    console.log(`${this._name} usou o ataque especial ${this._spetialMove}.`);
  }
}