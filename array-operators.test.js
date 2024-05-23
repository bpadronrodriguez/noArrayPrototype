import { describe, test, expect } from 'vitest';
import { MyArray } from './array-operators.js';

describe('append entries to an array and return the new array', () => {
  test('empty arrays', () => {
    const arr1 = new MyArray();
    const arr2 = new MyArray();
    expect(arr1.append(arr2)).toEqual(new MyArray());
  });

  test('empty array to array with items', () => {
    const arr1 = new MyArray([1, 2, 3, 4]);
    const arr2 = new MyArray();
    expect(arr1.append(arr2)).toEqual(arr1);
  });

  test('non-empty arrays to array', () => {
    const arr1 = new MyArray([1, 2]);
    const arr2 = new MyArray([2, 3, 4, 5]);
    expect(arr1.append(arr2).values).toEqual([1, 2, 2, 3, 4, 5]);
  });
});

describe('concat arrays and arrays of arrays into new array', () => {
  test('empty arrays', () => {
    const arr1 = new MyArray();
    const arr2 = new MyArray();
    expect(arr1.concat(arr2).values).toEqual([]);
  });

  test('array of arrays', () => {
    const arr1 = new MyArray([1, 2]);
    const arr2 = new MyArray([3]);
    const arr3 = new MyArray([]);
    const arr4 = new MyArray([4, 5, 6]);
    const arrayOfArrays = new MyArray([arr2, arr3, arr4]);

    expect(arr1.concat(arrayOfArrays).values).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('filter array return only values that satisfy the filter function', () => {
  test('empty array', () => {
    const arr1 = new MyArray([]);

    expect(arr1.filter((el) => el % 2 === 1).values).toEqual([]);
  });

  test('non empty array', () => {
    const arr1 = new MyArray([1, 2, 3, 5]);

    expect(arr1.filter((el) => el % 2 === 1).values).toEqual([1, 3, 5]);
  });
});

describe('returns the length of a array', () => {
  test('empty array', () => {
    const arr1 = new MyArray();

    expect(arr1.length()).toEqual(0);
  });

  test('non-empty array', () => {
    const arr1 = new MyArray([1, 2, 3, 4]);

    expect(arr1.length()).toEqual(4);
  });
});

describe('returns a array of elements values should equal the array value transformed by the map function', () => {
  test('empty array', () => {
    const arr1 = new MyArray();

    expect(arr1.map((el) => ++el).values).toEqual([]);
  });

  test('non-empty array', () => {
    const arr1 = new MyArray([1, 3, 5, 7]);

    expect(arr1.map((el) => ++el).values).toEqual([2, 4, 6, 8]);
  });
});

describe('folds (reduces) the given array from the left with a function', () => {
  test('empty array', () => {
    const arr1 = new MyArray();

    expect(arr1.foldl((acc, el) => el * acc, 2)).toEqual(2);
  });

  test('direction independent function applied to non-empty array', () => {
    const arr1 = new MyArray([1, 2, 3, 4]);

    expect(arr1.foldl((acc, el) => acc + el, 5)).toEqual(15);
  });

  test('direction dependent function applied to non-empty array', () => {
    const arr1 = new MyArray([1, 2, 3, 4]);

    expect(arr1.foldl((acc, el) => el / acc, 24)).toEqual(64);
  });
});

describe('folds (reduces) the given array from the right with a function', () => {
  test('empty array', () => {
    const arr1 = new MyArray();

    expect(arr1.foldr((acc, el) => el * acc, 2)).toEqual(2);
  });

  test('direction independent function applied to non-empty array', () => {
    const arr1 = new MyArray([1, 2, 3, 4]);

    expect(arr1.foldr((acc, el) => acc + el, 5)).toEqual(15);
  });

  test('direction dependent function applied to non-empty array', () => {
    const arr1 = new MyArray([1, 2, 3, 4]);

    expect(arr1.foldr((acc, el) => el / acc, 24)).toEqual(9);
  });
});

describe('reverse the elements of a array', () => {
  test('empty array', () => {
    const arr1 = new MyArray();

    expect(arr1.reverse().values).toEqual([]);
  });

  test('non-empty array', () => {
    const arr1 = new MyArray([1, 3, 5, 7]);

    expect(arr1.reverse().values).toEqual([7, 5, 3, 1]);
  });

  test('array of arrays is not flattened', () => {
    const arr1 = new MyArray([[1, 2], [3], [], [4, 5, 6]]);

    expect(arr1.reverse().values).toEqual([[4, 5, 6], [], [3], [1, 2]]);
  });
});
