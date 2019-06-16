class OrderedArray {
  constructor(...arrayParams) {
    this.array = this._sort(arrayParams);
  }

  _sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let element = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > element; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = element;
    }
    return arr;
  }

  print() {
    return this.array;
  }

  read(index) {
    return this.array[index];
  }

  //using iterative binary search
  search(element) {
    let endIndex = this.array.length;
    let startIndex = 0;

    while (startIndex <= endIndex) {
      let searchIndex = Math.floor((startIndex + (endIndex - startIndex) / 2))
      if (this.array[searchIndex] === element) {
        return searchIndex;
      } else if (element > this.array[searchIndex]) {
        startIndex = searchIndex + 1;
      } else {
        endIndex = searchIndex - 1;
      }
    }
    return -1;
  }

  insert(element) {
    let insertIndex;
    for (let i = 0; i < this.array.length; i++) {
      if (element < this.array[i]) {
        insertIndex = i;
        break;
      }
    }

    for (let j = this.array.length - 1; j >= insertIndex; j--) {
      this.array[j + 1] = this.array[j]
    }
    this.array[insertIndex] = element;

    return this.array;
  }

  delete(element) {
    let deleteIndex = this.search(element);
    if (deleteIndex === -1) { return -1; }
    this.array[deleteIndex] = null;
    for (let i = deleteIndex + 1; i < this.array.length; i++) {
      this.array[i - 1] = this.array[i];
    }
    this.array.pop();
    return this.array;
  }
}
