/*
Thomas Wallsmith
Leetcode 213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. 
All houses at this place are arranged in a circle.  That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two 
adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1
    Input: nums = [2,3,2]
    Output: 3
    Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

Example 2
    Input: nums = [1,2,3,1]
    Output: 4
    Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4.

Example 3
    Input: nums = [1,2,3]
    Output: 3
*/

function rob(nums: number[]): number {

    if (nums.length < 4) {
        return Math.max(...nums)
    }

    return Math.max(
        nums[0] + helperRob(true, 2, Array(nums.length)),
        helperRob(false, 1, Array(nums.length))
    )

    function helperRob(robbedFirst: boolean, position: number, memo: number[]): number {

        if (position >= nums.length) {
            return 0
        } else if (position === (nums.length - 1)) {
            if (robbedFirst) {
                return 0
            } else {
                return nums[position]  
            }
        }

        if (memo[position] == undefined) {
            memo[position] = Math.max(
                nums[position] + helperRob(robbedFirst, position + 2, memo),
                helperRob(robbedFirst, position + 1, memo)
            )
        }
        return memo[position]
    }    
}

// Driver code
let cases: number[][] = [
    [2,3,2],
    [1,2,3,1],
    [1,2,3],
] 

let count: number = 0
cases.forEach(testcase => {
    console.log(`Testcase ${count+=1} = ${rob(testcase)}`)
})

export {}