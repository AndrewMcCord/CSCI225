// Question 1 

element1 = 1; assigns 1 to element1. 

element2 = 0; assigns 0 to element2. 

element3 = 4; assigns 4 to element3. 

queue.enqueue(element2); adds element2 to the queue. 

queue.enqueue(element1); adds element1 to the queue. 

queue.enqueue(element1 + element3); adds element1 + element3 (5) to the queue. 

element2 = queue.dequeue() removes and retrieves the front element from the queue, which is 0, and assigns it to element2. 

queue.enqueue(element3*element3); adds the result of element3 * element3 (16) to the queue. 

queue.enqueue(element2); adds the element2 (0) to the queue. 

queue.enqueue(3); adds 3 to the queue. 

element1 = queue.dequeue(); removes and retrieves the front element from the queue, which is 1, and assigns it to element1. 

System.out.println(element1 + " " + element2 + " " + element3); prints the values of element1, element2, and element3, separated by spaces. 

while (!queue.isEmpty()) starts a loop that continues until the queue is empty. 

Inside the loop: 

element1 = queue.dequeue(); removes and retrieves the front element from the queue and assigns it to element1. 

System.out.println(element1); prints element1. 

 

The initial values of element1, element2, and element3 are 1, 0, and 4 respectively. 

After the first dequeue operation, element2 becomes 0. 

The values added to the queue are 1, 5, 16, 0, and 3 in that order. 

After the second dequeue operation, element1 becomes 1. 

The values printed by the first System.out.println statement are element1, element2, and element3, which are 1, 0, and 4 respectively. 

The while loop prints the remaining elements of the queue. 

Output: 

1 0 4 

5 

16 

0 

3 

 

See attached sheet for answers as well. 

// Question 2  

 

// The answer is highlighted below, though I also included my own function as well. Just focus on the highlighted part. 

ArrayQueue tempQueue = new ArrayQueue(); 

ArrayQueue copyQueue = new ArrayQueue(); 

Object tempItem; 

 

while (!myQueue.isEmpty()) 

{ 

  tempItem = myQueue.dequeue(); 

  tempQueue.enqueue(tempItem); 

} 

 

while (!tempQueue.isEmpty()) 

{ 

  tempItem = tempQueue.dequeue(); 

  copyQueue.enqueue(tempItem); 

  myQueue.enqueue(tempItem); 

 

} 

 

//Regular code 

ArrayQueue copyQueue = new ArrayQueue(); // Create a new ArrayQueue to store the copy 

 

// Create a temporary queue to preserve the order of elements in myQueue 

ArrayQueue tempQueue = new ArrayQueue(); 

 

// Iterate through myQueue to copy its elements to copyQueue 

while (!myQueue.isEmpty()) { 

// Enqueue each element from myQueue to tempQueue 

tempQueue.enqueue(myQueue.front()); 

// Dequeue and enqueue each element from tempQueue to copyQueue to preserve the order 

copyQueue.enqueue(tempQueue.front()); 

tempQueue.dequeue(); 

// Dequeue each element from myQueue 

myQueue.dequeue(); 

} 

 

// Restore the original order of elements in myQueue using tempQueue 

while (!tempQueue.isEmpty()) { 

myQueue.enqueue(tempQueue.front()); 

tempQueue.dequeue(); 

} 

 

Output:  

Is "radar" a palindrome? true 

Is "hello" a palindrome? false 

Is "level" a palindrome? true 

 

//Question 3 

public class HW6N3 { 

public static void main(String[] args) { 

// Test cases 

String string1 = "radar"; 

System.out.println("Is \"" + string1 + "\" a palindrome? " + Palindrome(string1, 0, string1.length() - 1)); 

 

String string2 = "hello"; 

System.out.println("Is \"" + string2 + "\" a palindrome? " + Palindrome(string2, 0, string2.length() - 1)); 

 

String string3 = "level"; 

System.out.println("Is \"" + string3 + "\" a palindrome? " + Palindrome(string3, 0, string3.length() - 1)); 

} 

 

public static boolean Palindrome(String string1, int first, int last) { 

// Base case: when first index is greater than or equal to last index, return true 

if (first >= last) { 

return true; 

} 

// Check if characters at first and last index are equal 

if (string1.charAt(first) != string1.charAt(last)) { 

return false; 

} 

// Recursive case: check the substring from first+1 to last-1 

return Palindrome(string1, first + 1, last - 1); 

} 

} 

 

Output:  

Is "radar" a palindrome? true 

Is "hello" a palindrome? false 

Is "level" a palindrome? true 

//Question 4 

public class HW6N4 { 

public static void main(String[] args) { 

// Test cases 

String string1 = "radar"; 

System.out.println("Is \"" + string1 + "\" a palindrome? " + Palindrome(string1)); 

 

String string2 = "hello"; 

System.out.println("Is \"" + string2 + "\" a palindrome? " + Palindrome(string2)); 

 

String string3 = "level"; 

System.out.println("Is \"" + string3 + "\" a palindrome? " + Palindrome(string3)); 

} 

 

public static boolean Palindrome(String string1) { 

// Convert the string to lowercase to handle case-insensitive palindromes 

string1 = string1.toLowerCase(); 

 

// Get the length of the string 

int length = string1.length(); 

 

// Check characters from both ends of the string towards the middle 

for (int i = 0; i < length / 2; i++) { 

// Compare characters at positions i and length - i - 1 

if (string1.charAt(i) != string1.charAt(length - i - 1)) { 

return false; // If characters don't match, it's not a palindrome 

} 

} 

 

return true; // If all characters match, it's a palindrome 

} 

} 

 

//Question 5 

// The answer is highlighted below, though I also included my own function as well. 

 

public Object popTop() throws StackUnderflowException; 

// Effect: Removes top item from this stack and returns it 

{       

  Object hold = new Object();              

  if (!isEmpty()) 

  { 

    hold = top.info; 

    top = top.link; 

  } 

  else 

    throw new StackUnderflowException("popTop attempted on an empty stack."); 

  return hold; 

} 

 

------------------------------------------------------------------ 

public class LinkedStack<T> implements StackInterface<T> { 

private Node<T> topNode; // Reference to the top node of the stack 

 

// Constructor 

public LinkedStack() { 

topNode = null; // Initialize the top node to null for an empty stack 

} 

 

// Other methods of the LinkedStack class... 

 

@Override 

public T pop() throws StackUnderflowException { 

if (isEmpty()) { 

throw new StackUnderflowException("Cannot pop from an empty stack."); 

} else { 

T topItem = topNode.getData(); // Store the data of the top node 

topNode = topNode.getNext(); // Move the topNode reference to the next node 

return topItem; // Return the data of the popped node 

} 

} 

 

@Override 

public T popTop() throws StackUnderflowException { 

if (isEmpty()) { 

throw new StackUnderflowException("Cannot popTop from an empty stack."); 

} else { 

T topItem = topNode.getData(); // Store the data of the top node 

topNode = topNode.getNext(); // Move the topNode reference to the next node 

return topItem; // Return the data of the popped node 

} 

} 

} 

 