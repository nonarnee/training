function solution(k, dungeons) {
  let result = 0;
  let count = 0;
  let currentK = 0;

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function perm(arr, depth, n, r) {
    if (depth === r) {
      const dg = [...arr];
      count = 0;
      currentK = k;

      for (let i=0; i<arr.length; i++) {
        if (currentK >= dg[i][0] && currentK >= dg[i][1]) {
          currentK -= dg[i][1];
          count++;
        }
      }

      if (count > result) {
        result = count;
      }
      return;
    }

    for (let i=depth; i<n; i++) {
      swap(arr, i, depth);
      perm(dungeons, depth + 1, n, r);
      swap(arr, i, depth);
    }
  }

  perm(dungeons, 0, dungeons.length, dungeons.length);
  
  return result;
}