import { merge } from "../src/merge";

describe("merge()", () => {
  test("test1", () => {
    const col1 = [1, 3, 5];
    const col2 = [9, 7, 4]; 
    const col3 = [2, 6, 8];

    const result = merge(col1, col2, col3);
    // console.log(result)

    expect(result).toEqual([1,2,3,4,5,6,7,8,9]);
  });

  test("test2", () => {
    const col1: number[] = [];
    const col2: number[] = [];
    const col3: number[] = [];
    const result = merge(col1, col2, col3);
    // console.log(result)
    expect(result).toEqual([]);
  });

  test("test3", () => {
    const col1 = [1];
    const col2 = [2];  
    const col3 = [3];
    const result = merge(col1, col2, col3);
    // console.log(result)
    expect(result).toEqual([1,2,3]);
  });

  test("test4", () => {
    const col1 = [1, 3, 5, 9];
    const col2 = [5, 4, 3];
    const col3 = [2, 3];
    const result = merge(col1, col2, col3);
    // console.log(result)
    expect(result).toEqual([1,2,3,3,3,4,5,5,9]);
  });
  
});