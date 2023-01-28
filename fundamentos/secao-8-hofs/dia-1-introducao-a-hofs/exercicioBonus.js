/*// Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status e, ao final, retornam os resultados da rodada.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = () => {
  const maxDmg = Math.floor(Math.random() * (dragon.strength - 15 + 1) + 15);
}

// Crie uma função que retorne o dano causado pelo warrior. O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorDamage = () => {
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return Math.floor(Math.random() * (maxDamage - warrior.strength + 1) + warrior.strength)
}

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const mageDamageMana = () => {
  const maxDamage = mage.intelligence * 2;
  const damage = Math.floor(Math.random() * (maxDamage - mage.intelligence + 1) + mage.intelligence);
  if (mage.mana < 15) {
    return 'Não possui mana suficiente!';
  }
  return {
    damage: damage,
    mana: 15,
  }
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: () => {
    const warriorDamage = warriorDamage();
    dragon.healthPoints = dragon.healthPoints - warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: () => {
    const mageDamage = mageDamageMana().damage;
    dragon.healthPoints = dragon.healthPoints - mageDamage;
    mage.damage = mageDamage
    mage.mana = mageDamageMana().mana;
  },
  dragonTurn: () => {
    const dragonDamage = dragonDamage();
    mage.healthPoints = mage.healthPoints - dragonDamage;
    warrior.healthPoints = warrior.damage - dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResult: () => battleMembers
};
console.log(gameActions.warriorTurn());
console.log(gameActions.mageTurn());
console.log(gameActions.dragonTurn());
console.log(gameActions.turnResult());*/

// 🚀======================================================================

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);

  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;

  return dragonDmg;
};

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
};

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDmg = minDmg < maxDmg ? maxDmg : minDmg;
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());