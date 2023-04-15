/*
Thomas Wallsmith
Leetcode 641. Design Circular Deque
    Design your implementation of the circular double-ended queue (deque).

    Implement the MyCircularDeque class:
    - MyCircularDequeue(int k) initalizes the deque with a maximum size of k.
    - boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
    - boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
    - boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise. 
    - boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
    - int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
    - int getRear() Returns the last item from Deque. Returns -1 if the deque is empty. 
*/

class MyCircularDeque {
    private array: number[]
    private maxSize: number

    constructor(k: number) {
        this.array = Array()
        this.maxSize = k
    }

    public insertFront(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.array.unshift(value)
        return true
    }

    public insertLast(value: number): boolean {
        if (this.isFull()) {
            return false
        }
        this.array.push(value)
        return true
    }

    public deleteFront(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.array.shift()
        return true
    }

    public deleteLast(): boolean {
        if (this.isEmpty()) {
            return false
        }
        this.array.pop()
        return true
    }

    public getFront(): number {
        if (this.isEmpty()) {
            return -1
        } else {
            return this.array[0]
        }
    }

    public getRear(): number {
        if (this.isEmpty()) {
            return -1
        } else {
            return this.array[this.array.length - 1]
        }
    }

    public isEmpty(): boolean {
        return this.array.length === 0
    }

    public isFull(): boolean {
        return this.array.length === this.maxSize
    }
}