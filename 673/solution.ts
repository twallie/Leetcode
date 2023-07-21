function findNumberOfLIS(nums: number[]): number {
  let max: number = 1;
  const memo: number[] = [];
  const count: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    memo.push(1);
    count.push(1);
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (memo[j] + 1 > memo[i]) {
          memo[i] = memo[j] + 1;
          count[i] = count[j];
        } else if (memo[j] + 1 == memo[i]) {
          count[i] += count[j];
        }
      }
    }
    if (memo[i] > max) {
      max = memo[i];
    }
  }

  let result = 0;
  for (let i = 0; i < count.length; i++) {
    if (memo[i] == max) {
      result += count[i];
    }
  }

  return result;
}
