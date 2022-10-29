# Hash Table -- Code Challenge 30

* Implement a Hashtable Class with the following methods:

  * set
    * Arguments: key, value
    * Returns: nothing
    * This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
    * Should a given key already exist, replace its value from the value argument given to this method.
  * get
    * Arguments: key
    * Returns: Value associated with that key in the table
  * has
    * Arguments: key
    * Returns: Boolean, indicating if the key exists in the table already.
  * keys
    * Returns: Collection of keys
  * hash
    * Arguments: key
    * Returns: Index in the collection for that key


## Approach & Efficiency

* The full coding challenge took approximately 4 hours to complete, mainly spent on writing the actual code for methods and the associated testing.
* Big O
  * Time complexity (Search, Insertion, Deletion)
    * Average: O(1)
    * Worst: O(n)
  * Space complexity (worst): O(n)
