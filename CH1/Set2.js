class Set {
  constructor(...elements) {
    this.elements = elements;
  }

  insert(element, insertIndex) {
    if (this.find(element) !== -1) return;
    if (insertIndex === undefined) {
      this.elements[this.elements.length] = element;
    } else {
      //shift array
      let lastIndex = this.elements.length - 1;
      for (let index = 0; index < this.elements.length; index++) {
        this.elements[lastIndex + 1] = this.elements[index];
        lastIndex = lastIndex + 1;
      }
      
      this.elements[insertIndex] = element;
    }

    console.log(this.elements);
  }

  find(element) {
    for (let index = 0; index < this.elements.length; index++) {
      if (this.elements[index] === element) return index;
    }
    return -1;
  }

  get(index) {
    if (index > this.elements.length - 1) return -1;
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }
}

module.exports = Set;
