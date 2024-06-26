class Key {
  private signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key) {
    this.key = key;
  }
  getKey(): Key {
    console.log(this.key);
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  tenants: string[] = [];

  constructor(public key: Key) {}

  comeIn(person) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  abstract openDoor(key): void;
}

class MyHouse extends House {
  openDoor(key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("Welcome houme");
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
