export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const col2 = reverse(collection_2);

  return mergeThree(collection_1, col2, collection_3);
}

function reverse(arr: number[]): number[] {
  const result: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]!);
  }
  return result;
}

function mergeThree(arr1: number[], arr2: number[], arr3: number[]): number[] {
  let i = 0,
    j = 0,
    k = 0;
  const result: number[] = [];

  while (i < arr1.length || j < arr2.length || k < arr3.length) {
    let a = Number.MAX_VALUE,
      b = Number.MAX_VALUE,
      c = Number.MAX_VALUE;
    if (i < arr1.length) {
      a = arr1[i]!;
    }
    if (j < arr2.length) {
      b = arr2[j]!;
    }
    if (k < arr3.length) {
      c = arr3[k]!;
    }

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= a && b <= c) {
      result.push(b);
      j++;
    } else if (c <= a && c <= b) {
      result.push(c);
      k++;
    }
  }

  return result;
}
