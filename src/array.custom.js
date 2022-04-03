class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  /**
   *
   * TC -> O(1)
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  /**
   *
   * TC -> 0(n)
   */
  shift(value) {
    let prevItem = this.data[0];
    for (let index = 0; index < this.length; index++) {
      const nextItem = this.data[index + 1];
      this.data[index + 1] = prevItem;
      prevItem = nextItem;
    }
    this.data[0] = value;
    this.length++;
  }

  /**
   *
   * TC -> 0(n)
   */
  unshift() {
    for (let index = 0; index < this.length; index++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  delete(indexNo) {
    for (let index = indexNo; index < this.length; index++) {
      this.data[index] = this.data[index + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const arr1 = new MyArray();
arr1.push('Hi');
arr1.push('Hello');
arr1.push('Chaw');
arr1.push('Namastey');
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift('Where?');
console.log(arr1);

arr1.unshift();
console.log(arr1);

arr1.delete(1);
console.log(arr1);
