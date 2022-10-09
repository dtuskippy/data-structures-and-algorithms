# Stack and Pseudo Queue -- Code Challenge 11

Implement a Queue using two Stacks.

## Code Challenge 11

Create a new class called pseudo queue.

* Do not use an existing Queue.
* Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below).
* Internally, utilize 2 Stack instances to create and manage the queue.
* Methods:
  * enqueue
    * Arguments: value.
    * Inserts value into the PseudoQueue, using a first-in, first-out approach.
  * dequeue
    * Arguments: none.
    * Extracts a value from the PseudoQueue, using a first-in, first-out.

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
