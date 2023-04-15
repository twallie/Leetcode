// Thomas Wallsmith
// Leetcode 2605. Form Smallest Number From Two Digit Arrays

/*
    https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/

    Problem Description
        Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

    Example 1
        Input: nums1 = [4,1,3], nums2 = [5,7]
        Output: 15
        Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.
    
    Example 2
        Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
        Output: 3
        Explanation: The number 3 contains the digit 3 which exists in both arrays.

    Constraints
        1 <= nums1.length, nums2.length <= 9
        1 <= nums1[i], nums2[i] <= 9
        All digits in each array are unique.
*/

function minNumber(nums1: number[], nums2: number[]): number {
    let set1: boolean[] = Array(9).fill(false)
    let set2: boolean[] = Array(9).fill(false)
    
    populateSet(nums1, set1)
    populateSet(nums2, set2)

    let smallest1: number | undefined = undefined
    let smallest2: number | undefined = undefined
    for (let i: number = 0; i < 9; i++) {
        if (set1[i] && set2[i]) {
            return i+1
        }
        else if (set1[i] && smallest1 === undefined) {
            smallest1 = i+1
        }
        else if (set2[i] && smallest2 === undefined) {
            smallest2 = i+1
        }
    }

    if (smallest1 === undefined || smallest2 === undefined) {
        console.log("Invalid test case!")
        return -1
    }

    return convertToSmallestNumberPossible(smallest1, smallest2)

    function populateSet(nums: number[], set: boolean[]) {
        nums.forEach(num => {
            set[num-1] = true // mark existence in the set
        });        
    }

    function convertToSmallestNumberPossible(num1: number, num2: number) {
        let smaller: number = num1 < num2 ? num1 : num2;
        let larger: number = num1 > num2 ? num1 : num2;
        return (smaller * 10) + larger
    }
}

// Driver code
// [ [[1,2,3],[1,2,3]],[ ],[ ]]
let cases: number[][][] = [
    
    // Case 1
    [
        [4,1,3],
        [5,7]
    ],
    
    // Case 2
    [
        [3,5,2,6],
        [3,1,7]
    ]
]
for (let i: number = 0; i < cases.length; i++) {
    let nums1: number[] = cases[i][0]
    let nums2: number[] = cases[i][1]
    let result: number = minNumber(nums1, nums2)
    console.log(`Case ${i} result = ${result}`)
}

export {}