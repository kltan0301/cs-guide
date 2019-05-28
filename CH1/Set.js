class Set {
  constructor(...elements) {
    this.list = elements;
  }
  //read
  read(index) {
    return this.list[index];
  }
  //search
  search(term) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === term) {
        return i;
      }
    }
    return "no such value";
  }
  //insert
  insert(term, index) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === term) {
        return "No duplicate values allowed!";
      }
    }
    if (index === undefined) {
      this.list[this.list.length] = term;
    } else {
      for (let i = this.list.length; i > index; i--) {
        // shift values to right
        this.list[i] = this.list[i - 1];
      }
      this.list[index] = term;
    }
    return this.list;
  }
  //delete
  delete(term) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === term) {
        this.list[i] = undefined;
      }
    }
    return this.list;
  }

  get length() {
    return this.list.length;
  }
}

module.exports = Set;
