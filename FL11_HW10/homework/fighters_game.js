class Fighter {
  constructor(options) {
    this._name = options.name;
    this._damage = options.damage;
    this._hp = options.hp;
    this._totalHP = options.hp;
    this._agility = options.agility;
    this._combatHistory = { 'Name': this._name, 'Wins': 0, 'Losses': 0 };
  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage
  }

  getAgility() {
    return this._agility;
  }

  getHealth() {
    return this._hp;
  }

  logCombatHistory() {
    return this._combatHistory;
  }

  attack(opponent) {
    let opponentAgilty = 100 - opponent.getAgility();
    let rundomNumber = Math.floor(Math.random() * 100);

    if (rundomNumber <= opponentAgilty) {
      opponent.dealDamage(this._damage);
      console.log(`${this._name} make ${this._damage} to ${opponent.getName()}`)
    } else {
      console.log(`${this._name} attack missed`)
    }
  }

  heal(heal) {
    if (heal + this._hp >= this._totalHP) {
      this._hp = this._totalHP;
    } else {
      this._hp = heal + this.hp;
    }
  }

  dealDamage(damage) {

    if (this._hp - damage <= 0) {
      this._hp = 0;
    } else {
      this._hp = this._hp - damage;
    }
  }

  addWin() { 
    this._combatHistory.Wins = this._combatHistory.Wins + 1 
  }

  addLoses() { 
    this._combatHistory.Losses = this._combatHistory.Losses + 1 
  }
}

let fighter1 = new Fighter({ name: 'John', damage: 10, hp: 100, agility: 25 })
let fighter2 = new Fighter({ name: 'Jack', damage: 10, hp: 100, agility: 25 })

function battle(fighter1, fighter2) {
  let winner = '';

  if (fighter1.getHealth() === 0) {
    return console.log(`${fighter1.getName()} is dead and cant fight`)
  }
  if (fighter2.getHealth() === 0) {
    return console.log(`${fighter2.getName()} is dead and cant fight`)
  }

  while (!winner) {
    fighter1.attack(fighter2)
    fighter2.attack(fighter1)
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
      winner = fighter1.getHealth() ? fighter1.getName() : fighter2.getName();
    }
  }
  console.log(`Winner is ${winner}`)

}


battle(fighter1, fighter2);
fighter2.heal(100)
battle(fighter1, fighter2);














