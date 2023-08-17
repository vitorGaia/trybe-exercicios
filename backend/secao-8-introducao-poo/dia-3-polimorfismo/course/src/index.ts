import { Character, LongRangeCharacter, MeleeCharacter } from "./Character";

const yoshi = new MeleeCharacter('Yoshi', 'Super Dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

// yoshi.talk()
// yoshi.spetialMove()
// samus.talk()
// samus.spetialMove()

Character.characterRepresentation(yoshi);
Character.characterRepresentation(samus);