/*
Thomas Wallsmith
Leetcode 641. Design Circular Deque
https://leetcode.com/problems/design-circular-deque/

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
import java.util.List;
import java.util.LinkedList;

class MyCircularDeque {

    private List<Integer> list;
    private int maxSize;

    public MyCircularDeque(int k) {
        this.list = new LinkedList<>();
        this.maxSize = k;
    }
    
    public boolean insertFront(int value) {
        if (isFull()) {
            return false;
        } 

        this.list.add(0, value);
        return true;
    }
    
    public boolean insertLast(int value) {
        if (isFull()) {
            return false;
        }

        this.list.add(value);
        return true;
    }
    
    public boolean deleteFront() {
        if (isEmpty()) {
            return false;
        }

        this.list.remove(0);
        return true;
    }
    
    public boolean deleteLast() {
        if (isEmpty()) {
            return false;
        }

        this.list.remove(this.list.size() - 1);
        return true;
    }
    
    public int getFront() {
        if (isEmpty()) {
            return -1;
        }

        return this.list.get(0);
    }
    
    public int getRear() {
        if (isEmpty()) {
            return -1;
        }    

        return this.list.get(this.list.size() - 1);
    }
    
    public boolean isEmpty() {
        return this.list.size() == 0;
    }
    
    public boolean isFull() {
        return this.list.size() == this.maxSize;
    }
}