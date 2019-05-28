const Set = require("./Set");

describe("A Set", () => {
  it("should be able to create a new Set of elements", () => {
    const set1 = new Set(1, 2, 3, 4);
    expect(set1.length).toEqual(4);
  });

  it("should be able to insert an element at the front of the set", () => {
    const set1 = new Set(1, 2, 3);
    set1.insert(4, 0);
    expect(set1.length).toEqual(4);
    expect(set1.read(0)).toEqual(4);
  });

  it("should be able to insert an element at the middle of the set", () => {
    const set1 = new Set(1, 2, 3, 4);
    set1.insert(5, 2);
    expect(set1.length).toEqual(5);
    expect(set1.list).toEqual([1, 2, 5, 3, 4]);
  });

  it("should be able to insert an element to the end of the set", () => {
    const set1 = new Set(1, 2, 3);
    set1.insert(4);
    expect(set1.length).toEqual(4);
    expect(set1.read(3)).toEqual(4);
  });

  it("should not be able to insert a duplicate element into the set", () => {
    const set1 = new Set(1, 2, 3);
    set1.insert(3);
    expect(set1.length).toEqual(3);
    expect(set1.read(2)).toEqual(3);
  });

  it("should be able to remove an element from the set", () => {});

  it("should be able to read an element from the set", () => {
    const set1 = new Set(1, 2, 3, 4);
    expect(set1.read(1)).toEqual(2);
    expect(set1.read(2)).toEqual(3);
  });

  xit("should be return -1 if index is out of range", () => {
    const set1 = new Set(1, 2, 3, 4);
    expect(set1.read(4)).toEqual(-1);
  });

  xit("should be able to return index of an element in the set if it exists", () => {
    const set1 = new Set(1, 2, 3, 4);
    expect(set1.search(3)).toEqual(2);
  });

  it("should be able to return 'no such value' if element does not exist in the set", () => {
    const set1 = new Set(1, 2, 3, 4);
    expect(set1.search(5)).toEqual("no such value");
  });
});
