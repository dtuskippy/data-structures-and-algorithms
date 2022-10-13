# Tread Breadth First -- Code Challenge 17

Traverse an input tree using a Breadth-first approach.

## Code Challenge 11

Write a function called breadth first

    * Arguments: tree
    * Return: list of all values in the tree, in the order they were encountered

## Whiteboard Process

![whiteboard](images/stack-queue-pseudo.png)

## Approach & Efficiency

* The full coding challenge took approximately 3 hours to complete, including white board partner session, and writing the actual code for the solution and the testing.
* Time:
  * Push: O(N) -- because all elements must be popped from one queue and pushed to the other.
  * Pop: O(1) -- because must remove the front elemement from the queue.
* Space: O(N) -- use 2 queues for implementing a stack.

## Solution

* let queue = new Queue();
* queue.enQueue(1);
* queue.enQueue(2);
* queue.enQueue(3);

* console.log(queue); // Queue { stack1: [ 3, 2, 1 ], stack2: [] }
* console.log(queue.deQueue()); // 1
* console.log(queue); // Queue Queue { stack1: [ 3, 2 ], stack2: [] }
* console.log(queue.deQueue()); // 2
* console.log(queue); // Queue { stack1: [ 3 ], stack2: [] }
* console.log(queue.deQueue()); // 3
* console.log(queue); // Queue Queue { stack1: [], stack2: [] }
