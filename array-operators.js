export class MyArray {
  constructor(values = []) {
    this.values = values;
  }

  append(arr) {
    const newArray = [];
    for (let i = 0; i < this.values.length; i++) {
      newArray[newArray.length] = this.values[i];
    }
    for (let i = 0; i < arr.values.length; i++) {
      newArray[newArray.length] = arr.values[i];
    }
    return new MyArray(newArray);
  }

  concat(arrays) {
    const myArray = new MyArray(this.values);
    for (let i = 0; i < arrays.values.length; i++) {
      const currentArray = arrays.values[i];
      for (let j = 0; j < currentArray.values.length; j++) {
        myArray.values[myArray.values.length] = currentArray.values[j];
      }
    }
    return myArray;
  }

  filter(callbackFn) {
    const myArray = new MyArray();
    for (let i = 0; i < this.values.length; i++) {
      if (callbackFn(this.values[i], i, this.values)) {
        myArray.values[myArray.values.length] = this.values[i];
      }
    }
    return myArray;
  }

  length() {
    // return this.values.length;

    let count = 0;
    for (let i = 0; i < this.values.length; i++) {
      count++;
    }
    return count;
  }

  map(callbackFn) {
    const myArray = new MyArray();
    for (let i = 0; i < this.values.length; i++) {
      myArray.values[i] = callbackFn(this.values[i]);
    }
    return myArray;
  }

  foldl(callbackFn, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.values.length; i++) {
      acc = callbackFn(acc, this.values[i]);
    }
    return acc;
  }

  foldr(callbackFn, initialValue) {
    let acc = initialValue;
    for (let i = this.values.length - 1; i >= 0; i--) {
      acc = callbackFn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    const reversedArray = [];
    for (let i = this.values.length - 1; i >= 0; i--) {
      reversedArray[reversedArray.length] = this.values[i];
    }
    return new MyArray(reversedArray);
  }
}
