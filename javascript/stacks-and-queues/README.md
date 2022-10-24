# Stacks and Queues -- Code Challenge 10

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

* Node
  * Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Stack
  * Create a Stack class that has a top property.
  * It creates an empty Stack when instantiated.
  * This object should be aware of a default empty value assigned to top when the stack is created.

## Code Challenge 10

The class should contain the following methods:

* push
  * Arguments: value
  * adds a new node with that value to the top of the stack with an O(1) Time performance.
* pop
  * Arguments: none
  * Returns: the value from node from the top of the stack
  * Removes the node from the top of the stack
  * Should raise exception when called on empty stack
* peek
  * Arguments: none
  * Returns: Value of the node located at the top of the stack
  * Should raise exception when called on empty stack
* is empty
  * Arguments: none
  * Returns: Boolean indicating whether or not the stack is empty.

## Approach & Efficiency

* The full coding challenge took approximately 8 hours to complete, including reading, reviewing a video, writing the actual code for methods and the testing.
