function twoSum(nums: number[], target: number): number[] {
    // Map of numbers we need, and what numbers need them
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // Is this value needed by another value to equal the target?
        if (map.has(num)) {
            const otherIndex = map.get(num);

            if (otherIndex == undefined) {
                console.log("This should never happen.");
                return [];
            }

            // Yippee!
            return [i, otherIndex];
        }

        // Otherwise, we need to add this value to the map
        map.set(target - num, i);
    }

    // Since the prompt tells us every case will have a valid solution,
    // we should never reach here
    return [];
}
