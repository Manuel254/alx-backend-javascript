export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError("Name must be a string");
    }

    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError("Length must be a number");
    }

    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw TypeError("Students must be an array");
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(stud) {
    this._students = stud;
  }

}
