# Thomas Wallsmith
# Leetcode 2130. Maximum Twin Sum of a Linked List

# This solution is complete, but there is probably a better one.
# This has the runtime of the best known solution (O(n)) but not the raw MS on leetcode.com

# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def pairSum(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: int
        """
        list = []
        
        node = head
        while node is not None:
            list.append(node.val)
            node = node.next
        
        n = len(list)
        record = -sys.maxsize - 1
        for i in range(n):
            val = list[i]
            twin_val = list[n-1-i]
            twin_sum = val + twin_val
            record = twin_sum if twin_sum > record else record

        return record
