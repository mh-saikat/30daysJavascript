class person {
  constructor(name) {
    this.name = name;
  }
  //Task 7
  get name() {
    return `${this._name.toUpperCase()}`;
  }
  //Task 8
  set name(value) {
    this._name = value;
  }
}

const fullname = new person("MH Saikat");
console.log(fullname);

//Update syntax

class updatePerson {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name.toUpperCase();
  }
  set name(value) {
    this.#name = value;
  }
}

const user = new updatePerson("Saikat Khan");
console.log(user.name);

class personOne {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  get fullname() {
    let fullname = `${this.firstname}${this.lastname}`;
    return fullname;
  }

  set fullname(value) {
    this.fullname = value;
  }
}

const chai = new personOne("Ch", "ai");
console.log(chai.fullname);
