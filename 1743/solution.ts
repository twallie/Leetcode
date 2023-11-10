function restoreArray(adjacentPairs: number[][]): number[] {
  type Pairs = Map<number, number[]>;

  const pairs: Pairs = new Map();
  let numsLength = 0;

  // Load in pairs into map
  for (const adjacentPair of adjacentPairs) {
    const a = adjacentPair[0];
    const b = adjacentPair[1];
    addPairs(a, b);
  }

  const used: Set<number> = new Set();

  const firstNumber = adjacentPairs[0][0];
  let nums: number[] = [firstNumber];
  used.add(firstNumber);

  while (nums.length !== numsLength) {
    const prev = nums[nums.length - 1];
    const next = findUnusedPair(prev);

    if (next === undefined) {
      nums = nums.reverse();
      continue;
    }

    used.add(next);
    nums.push(next);
  }

  return nums;

  function findUnusedPair(a: number): number | undefined {
    const pairings = pairs.get(a);
    if (pairings) {
      for (const pair of pairings) {
        if (!used.has(pair)) {
          // Found unused pair
          return pair;
        }
      }
    }

    // No available pairs
    return undefined;
  }

  // Helpers
  function addPairs(a: number, b: number) {
    const aPairings = pairs.get(a);

    // Add a pairs to b
    if (!aPairings) {
      pairs.set(a, [b]);
      numsLength++;
    } else {
      aPairings.push(b);
    }

    const bPairings = pairs.get(b);

    // Add b pairs to a
    if (!bPairings) {
      pairs.set(b, [a]);
      numsLength++;
    } else {
      bPairings.push(a);
    }
  }
}
