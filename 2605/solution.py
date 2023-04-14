
# Thomas Wallsmith
# Leetcode 2605. Form Smallest Number From Two Digit Arrays

"""
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
"""

# Mostly lifted from my TypeScript solution

import sys

class Solution(object):
    
    @staticmethod
    def minNumber(nums_1, nums_2):
        set_1 = [False] * 9
        set_2 = [False] * 9

        populate_set(nums_1, set_1)
        populate_set(nums_2, set_2)

        smallest_1 = None
        smallest_2 = None
        for i in range(9):
            if set_1[i] and set_2[i]:
                return i+1
            elif set_1[i] and smallest_1 is None:
                smallest_1 = i+1
            elif set_2[i] and smallest_2 is None:
                smallest_2 = i+1

        return convert_to_smallest_number_possible(smallest_1, smallest_2)
        
def convert_to_smallest_number_possible(num_1, num_2):
    smaller = num_1 if num_1 < num_2 else num_2
    larger = num_1 if num_1 > num_2 else num_2
    return (smaller * 10) + larger

def populate_set(list, set):
    for num in list:
        set[num-1] = True

# Driver code
cases = [
    [
        [4,1,3],
        [5,7]
    ],
    [
        [3,5,2,6],
        [3,1,7]
    ]
]

count = 1
for case in cases:
    nums_1 = case[0]
    nums_2 = case[1]
    result = Solution.minNumber(nums_1, nums_2)
    print(f"Case {count} = {result}")
    count += 1