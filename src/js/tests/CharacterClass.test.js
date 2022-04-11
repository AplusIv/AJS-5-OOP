import Character from '../CharacterClass';

// Может как-то нужно оптимизировать тесты? Объединить их

test.each([
  [4, new Error('Wrong name, try again')],
  ['A', new Error('Wrong name, try again')],
  ['StanlyManly', new Error('Wrong name, try again')],
])('should throw new Error "Wrong name, try again" if there is incorrect parameter', (name, error) => {
  expect(() => new Character(name, 'Bowman', 50, 80)).toThrowError(error);
});

test.each([
  [true, new Error('Wrong type, type not found, try again')],
  ['King', new Error('Wrong type, type not found, try again')],
])('should throw new Error "Wrong name, try again" if there is incorrect parameter', (type, error) => {
  expect(() => new Character('John Doe', type, 50, 50)).toThrowError(error);
});

test("should upgrade character's level", () => {
  const received = new Character('John Doe', 'Daemon', 10, 55);
  const expected = {
    name: 'John Doe',
    type: 'Daemon',
    level: 2,
    health: 100,
    attack: 12,
    defence: 66,
  };
  received.levelUp();

  expect(received.level).toBe(2);
  expect(received.attack).toBeCloseTo(12);
  expect(received.defence).toBeCloseTo(expected.defence);
});

test("method levelUp() should should throw new Error It's denied. You're dead", () => {
  const received = new Character('John Doe', 'Daemon', 10, 55);
  received.health = 0; // Так искусственно можно делать в тестах?

  expect(() => received.levelUp()).toThrowError(new Error("It's denied. You're dead"));
});

test("should refresh caracter's health if it was damaged", () => {
  const received = new Character('John Doe', 'Daemon', 10, 55);
  const expected = {
    name: 'John Doe',
    type: 'Daemon',
    level: 1,
    health: 91,
    attack: 10,
    defence: 55,
  };

  received.damage(20);
  expect(received.health).toBeCloseTo(expected.health);
});

test("metod damage(points) should throw new Error It's denied. Your health is 0 or less. You're dead", () => {
  const received = new Character('John Doe', 'Daemon', 10, 55);
  received.health = -5; // Так искусственно можно делать в тестах?

  expect(() => received.damage(25)).toThrowError(new Error("It's denied. Your health is 0 or less. You're dead"));
});
