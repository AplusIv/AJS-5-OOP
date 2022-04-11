/* import Bowman from "./BowmanClass";
import Swordsman from "./SwordsmanClass";
import Magician from "./MagicianClass";
import Undead from "./UndeadClass";
import Zombie from "./ZombieClass";
import Daemon from "./DaemonClass"; */

export default class Character {
  constructor(name, type, attack, defence) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Wrong name, try again');
    }
    if (typeof type === 'string' && (type === 'Bowman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie')) {
      this.type = type;
    } else {
      throw new Error('Wrong type, type not found, try again');
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    /* По заданию должны быть эти 4 свойства в классе Character,
    но не проще ли их было добавлять наследникам в конструктор? */
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error("It's denied. You're dead");
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error("It's denied. Your health is 0 or less. You're dead");
    }
  }
}
