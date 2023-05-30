class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = ["primary", "middle", "high"];
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberofStudents) {
    if (typeof numberOfStudents === number) {
      this._numberOfStudents = newNumberofStudents;
    }
  }
  quickFacts() {}
  pickSubstituteTeacher() {}
}

class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, numberOfStudents) {
    super(name, numberOfStudents);
  }
}

class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}
