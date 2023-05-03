/*
 * Thomas Wallsmith
 * Leetcode 2215. Find the Different of Two Arrays
 *
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
 *  - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 *  - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Note that the integers in the lists may be returned in any order.
 *
 */

function findDifference(nums1: number[], nums2: number[]): number[][] {
    
    let set1 = new Set<number>();
    let set2 = new Set<number>();

    // Populate the sets
    for (let num1 of nums1) {
        set1.add(num1);
    }
    for (let num2 of nums2) {
        set2.add(num2);
    }

    // If we detect an element of set1 in set2, 
    // we delete the element from BOTH sets
    let answer1: number[] = [];
    let answer2: number[] = [];
    set1.forEach((num1) => {
        if (set2.has(num1)) {
            set1.delete(num1);
            set2.delete(num1);
        }
    });

    return [Array.from(set1.values()), Array.from(set2.values())];
}
