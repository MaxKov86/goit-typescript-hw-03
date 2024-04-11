class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: number;
  constructor(key) {
    this.key = key;
  }
  getKey(): number {
    return this.key;
  }
}

abstract class House {
  constructor(public key: Key) {}
  door: boolean;
  tenants: string[] = [];

  comeIn(person) {
    if (this.door) {
      this.tenants.push(person);
    }
    console.log(this.tenants);
  }

  abstract openDoor(key): void;
}

class MyHouse extends House {
  openDoor(key) {
    if (this.key.getSignature() === key) {
      this.door = true;
      console.log(`Welcome houme`);
    } else {
      console.log("Wrong key");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn("Max");

export {};
