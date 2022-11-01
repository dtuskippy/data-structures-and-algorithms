# Hash Map-Repeated Word -- Code Challenge 31

## Feature Tasks

* Write a function called repeated word that finds the first word to occur more than once in a string

  * Arguments: string
  * Return: string

## Whiteboard Process

![whiteboard](images/stack-queue-branches.png)

## Approach & Efficiency

* The full coding challenge took approximately 3 hours to complete, including white board partner session, and writing the actual code for the solution and the testing.
* Time: O(N), Iteration over the string of size N one time.
* Space: O(N) for stack.

## Solution

* let string = '([{}])';
* let string2 = '{}{Code}[Fellows](())';
* let string3 = '[({}]';

* console.log(validateBrackets(string)); // returns true
* console.log(validateBrackets(string2)); // returns true
* console.log(validateBrackets(string3)); // returns false
