# Thomas Wallsmith
# Leetcode 1372. Longest Zigzag Path in a Binary Tree

"""
Leetcode 1372. Longest Zigzag Path in a Binary Tree

You are given the root of a binary tree.

A ZigZag path for a binary tree is defined as follows:
    - Choose any node in the binary tree and a direction (right or left)
    - If the current direction is right, move to the right child of the current node; otherwise move to the left child
    - Change the direction from right to left or from left to right
    - Repeat the second and third steps until you can't move in the tree

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return the longest ZigZag path contained in that tree
"""

from math import max

class Solution(object):
    def longestZigZag(self, root):
        # A wrapper, because if Leetcode wont follow PIP styleguides, I will
        self.max_depth = 0
        return self.longest_zigzag(root)

    def longest_zigzag(self, root):
        def solver(node, direction, depth):
            self.max_depth = max(self.max_depth, depth)
            if node.left:
                solver(node.left, 'left', depth+1) if direction is not 'left' else solver(node.left, 'left', 1)
            if node.right:
                solver(node.right, 'right', depth+1) if direction is not 'right' else solver(node.right, 'right', 1)
        solver(root, '', 0)
        return self.max_depth
        