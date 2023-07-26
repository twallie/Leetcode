function containsDuplicate(nums: number[]): boolean {
    const set: Set<number> = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!set.has(num)) {
            set.add(num);
        } else {
            return true;
        }
    }

    return false;
}
