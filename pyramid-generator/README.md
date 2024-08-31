# Algorithms and Data Structures

## Pyramid Generator

1. In this project, you will learn the basics of Javascript and apply those concepts to building a pyramid generator (start building at step 32). A pyramid generator is a program where you can set the type of character, the count for the pyramid, and the direction of the pyramid. The program will then generate a pyramid based on those inputs.

2. __Variable__ naming follows specific rules: names can include letters, numbers, dollar signs, and underscores, but cannot contain spaces and must not begin with a number. It is common practice to end statements in JavaScript with a semicolon.

    ```javascript
    let character;
    ```

3. You can assign a value using the __assignment operator (=)__ to give your variable a value. Assigning a value to a variable at the moment of its __declaration__ is known as __initialization__.

    ```javascript
    let character = "Hello";
    ```

4. JavaScript has seven __*primitive* data types__, with __String__ being one of them. In JavaScript, a string represents a _sequence of characters that is enclosed in either single (') or double (") quotes_. Strings are _immutable_, which means once they are created, they cannot be changed. The _variable can be __reassigned__ another value_.

    ```javascript
    let character = 'Hello';
    ```

5. The __console__ allows you to print and view JavaScript output. You can send information to the console using `console.log()`. The value between the parentheses is the value that will be printed.

    ```javascript
    console.log(character);
    
    >Hello
    ```

6. When a variable is declared with the `let` keyword, you can reassign (or change the value of) that variable later on. _When reassigning a variable, you do not use the let keyword again_.

    ```javascript
    character = 'World';
    ```

7. When you log your character variable to the console again, you should see the string `Hello`, then the string `World`, in the console.
   
   ```javascript
   let character = 'Hello';
   console.log(character);
   
   >Hello
   
   character = 'World';
   console.log(character);
   
   >World
   ```

8. When variable names are more than one word, there are specific naming conventions for how you capitalize the words. In JavaScript, the convention to use is __camel case__. Camel case means that the _first word in the name is entirely lowercase, but the following words are all title-cased_.

   ```javascript
   let secondCharacter;
   ```

9. When you declare a variable without initializing it, it is considered __uninitialized__. The default value of an uninitialized variable is __undefined__.

   ```javascript
   console.log(secondCharacter);
   
   >undefined
   ```

10. You can still assign a value to an uninitialized variable.

   ```javascript
   secondCharacter = 'Test';
   console.log(secondCharacter);
   
   >Test
   ```
11. You can also assign the value of a variable to another variable.

   ```javascript
   character = 'World';
   secondCharacter = character;
   console.log(secondCharacter);
   
   >World
   ```

12. You can declare as many variables as you need. You can remove any code you don't need. Remove all code, leaving your original `character` variable.

   ```javascript
   let character = 'Hello';
   ```

13. Take a moment to review the concepts you learned by logging two newly declared variables, one of which is uninitialized.

   ```javascript
   let profession = 'teacher';
   let age;
   console.log(profession);
   
   >teacher
  
   console.log(age);
   
   >undefined
   ```

14. Now that you have reviewed declaration and initialization, remove the code you wrote for your review, leaving your original `character` variable. 

   ```javascript
   let character = 'Hello';
   ```

15. When using a __number__ value, you do not use quotes.

   ```javascript
   let count = 8;
   ```

16. With the number data type, you can perform mathematical operations, like addition.

   ```javascript
   console.log(count + 1);
   
   >9
   ```

17. You can also perform subtraction `-`, multiplication `*`, and division `/`.

18. In programming, you will often need to work with lots of data. There are many __data structures__ that can help you organize and manage your data. One of the most basic data structures is an __array__.

   An array is a __*non-primitive* data type__ that _can hold a series of values_. Non-primitive data types differ from primitive data types in that they can hold more complex data. _Primitive data types like strings and numbers can only hold one value at a time_.

   Arrays are denoted using square brackets ([]). Brackets with no value(s) inside is an empty array.

   ```javascript
   let rows = [];
   ```

19. When an array holds values, or elements, those values are separated by commas.

   ```javascript
   let rows = ['Naomi', 'Quincy', 'CamperChan'];
   ```

20. You can access the values inside an array using the index of the value. An index is a number representing the position of the value in the array, starting from 0 for the first value.

   You can access the value using bracket notation, such as `array[0]`.

   ```javascript
   console.log(rows[0]);
   
   >Naomi
   ```

21. Arrays are special in that they are considered _mutable_. This means you can change the value at an index directly.

   ```javascript
   let rows = ['Naomi', 'Quincy', 'CamperChan'];
   rows[2] = 10;
   console.log(rows);
   
   >[ 'Naomi', 'Quincy', 10 ]
   ```

22. Currently, your code accesses the last element in the array with `rows[2]`. But you may not know how many elements are in an array when you want the last one.You can make use of the `.length` property of an array - this __returns__ the number of elements in the array. Therefore, `array.length - 1`, gives the index of the last element in the array.

   ```javascript
   let rows = ['Naomi', 'Quincy', 'CamperChan'];
   rows[rows.length - 1] = 10;
   console.log(rows);
   
   >[ 'Naomi', 'Quincy', 10 ]
   ```

23. Console logging helps you see what the code is doing. It is best practice to remove console log statements from your final code.

24. Take a moment to review the array concepts you learned by logging a variable once it is declared then after it is updated.

   ```javascript
   let cities = ['London', 'New York', 'Mumbai'];
   console.log(cities);
  
   >[ 'London', 'New York', 'Mumbai' ]
  
   cities[cities.length - 1] = 'Mexico City';
   console.log(cities);
   
   >[ 'London', 'New York', 'Mexico City' ]
   ```

25. Now that you have reviewed array updating, remove the code you wrote for your review.

26. A __method__ in JavaScript is a function that's associated with certain values or objects. An example you've already encountered is the `.log()` method, which is part of the console object.

   Arrays have their own methods, and the first you will explore is the `.push()` method. This _allows you to add/push a value to the end of an array_. 

   ```javascript
   let rows = ['Naomi', 'Quincy', 'CamperChan'];
   rows.push('freeCodeCamp');
   console.log(rows);
   
   >[ 'Naomi', 'Quincy', 'CamperChan', 'freeCodeCamp' ]
   ```

27. Another method essential for this project is the `.pop()` method. It _removes the last element from an array and returns that element_.

   When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

   ```javascript
   let rows = ['Naomi', 'Quincy', 'CamperChan'];
   rows.push('freeCodeCamp');
   let popped = rows.pop();
   console.log(popped);
   
   >freeCodeCamp
   
   console.log(rows);
  
   >[ 'Naomi', 'Quincy', 'CamperChan' ]
   ```

28. `.push()` also returns a value.

   ```javascript
   let rows = ['Naomi', 'Quincy', 'CamperChan'];
   let pushed = rows.push('freeCodeCamp');
   console.log(pushed);
  
   >4
   ```

29. `.push()` returns the new length of the array, after adding the value you give it. It is important to be aware of what values a method returns.

30. Generally, it does not matter which of the two you prefer, but you will want to be consistent in that choice throughout your project. Return your initialized variables to their original values.

   ```javascript
   let character = 'Hello';
   let count = 8;
   let rows = [];
   ```

31. Declaring a variable with the `let` keyword allows it to be reassigned. This means you could change character later to be a completely different value.

   For this project, you will not want to change these variable values. So instead, you should use `const` to declare them. A `const` variable cannot be reassigned like a `let` variable. A `const` variable also cannot be uninitialized.

   ```javascript
   const character = 'Hello';
   const count = 8;
   const rows = [];
   ```

32. You are now ready to start building your pyramid generator. Your character variable will serve as the building block for the pyramid. Change the value of character.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```

33. To generate a pyramid, you will need to create multiple rows. When you have to perform a task repeatedly until a condition is met, you will use a __loop__. There are many ways to write a loop. You are going to start with a basic `for` loop with the following syntax:

   ```javascript
   for (iterator; condition; iteration) {
      logic;
      }
   ```

34. The __iterator__ is a variable you can declare specifically in your for loop to control how the loop iterates or goes through your logic. It is a common convention to use `i` or `index` as your iterator variable in a loop. Assigning it the value `0` will give the i variable the value `0` the first time your loop runs. Note you need the `let` keyword since you are declaring an iterator variable. 

   ```javascript
   for (let i = 0; condition; iteration) {
      
      }
   ```

35. The __condition__ of a `for` loop tells the loop how many times it should iterate. When the condition becomes false, the loop will stop.

   In JavaScript, a __Boolean__ value can be either `true` or `false`. These are not strings - you will learn more about the difference later on.

   For now, you will use the __less than operator__ `<`. This allows you to check if the value on the left is less than the value on the right.

   ```javascript
   for (let i = 0; i < count; iteration) {
      
      }
   ```

36. Your __iteration__ statement will tell your loop what to do with the iterator after each run. When you reassign a variable, you can use the variable to reference the previous value before the reassignment. This allows you to do things like add three to an existing number. For example, `bees = bees + 3` would increase the value of bees by three.

   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      
      }
   ```

37. Your loop should now run eight times. Inside the body of the loop, print the value of the `i` iterator and see what happens.

   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      console.log(i);
      }
  
   >0
   >1
   >2
   >3
   >4
   >5
   >6
   >7
   ```

38. You should see the numbers 0 through 7 printed in your console, one per line. This will serve as the foundation for generating your pyramid. Replace your log statement with a statement to push `i` to your `rows` array.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   
   for (let i = 0; i < count; i = i + 1) {
      rows.push(i);
      }
   ```

39. Unfortunately, now you cannot see what your loop is doing. Use `let` to declare a `result` variable, and assign it an empty string. An empty string is represented by quotation marks with nothing between them, such as `''`.

   ```javascript
   let result = '';
   ```

40. Add a log statement to print the value of `result`. Depending on which console you use, you may not see anything printed.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];

   for (let i = 0; i < count; i = i + 1) {
      rows.push(i);
      }

   let result = '';
   ```
   ```javascript
   console.log(result);
   ```

41. To manipulate the result string, you will use a different type of loop. Specifically, a `for...of` loop, which iterates over each item in an iterable object and temporarily assigns it to a variable. Note that you can use const because the variable only exists for a single iteration, not during the entire loop.

   ```javascript
   for (const row of rows) {

   }
   ```

42. Remember in your previous loop that you used the addition operator `+` to increase the value of `i` by 1. You can do a similar thing with a string value, by appending a new string to an existing string. For example, `hello = hello + ' World'` would add the string `' World'` to the existing string stored in the `hello` variable. This is called __concatenation__.

   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      rows.push(i);
      }
   let result = '';
   ```
   ```javascript
   for (const row of rows) {
      result = result + row;
   }
   ```
   ```javascript
   console.log(result);
   
   >01234567
   ```

43. Now all of your numbers are appearing on the same line. This will not work for creating a pyramid.

   You will need to add a new line to each row. However, pressing the return key to insert a line break between quotes in JavaScript will result in a parsing error. Instead, you need to use the special __escape sequence__ `\n`, which is interpreted as a new line when the string is logged.

   ```javascript
   for (const row of rows) {
      result = result + '\n' + row;
   }
   
   >0
   >1
   >2
   >3
   >4
   >5
   >6
   >7
   ```

44. Printing numbers won't result in a visually appealing pyramid. Now that you're outputting the formatted content of your `rows` array, it's time to update your original loop.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      rows.push(character);
   }
   ```
   ```javascript
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);
   
   >#
   >#
   >#
   >#
   >#
   >#
   >#
   >#
   ```

45. Now you have a series of `#` characters, but the pyramid shape is still missing. Fortunately, the `i` variable represents the current "row" number in your loop, enabling you to use it for crafting a pyramid-like structure.

To achieve this, you will use the `.repeat()` method available to strings. This method accepts a number as an __argument__, specifying the number of times to repeat the target string. 

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      rows.push(character.repeat(i));
   }
   ```
   ```javascript
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);

   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   ```

46. You're getting closer! At this point, you're encountering what's known as an __off-by-one error__, a frequent problem in __zero-based indexing__ languages like JavaScript.

   The first index of your `rows` array is 0, which is why you start your `for` loop with `i = 0`. But repeating a string zero times results in nothing to print.

   To fix this, add 1 to the value of `i` in your `.repeat()` call. Do not assign it back to `i` like you did in your loop conditions.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   ```
   ```javascript
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);

   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

47. The logic for formatting this pyramid is likely going to get complicated, which means it's a great time to extract that code into a __function__, which is a block of code that can be reused throughout your application.

   ```javascript
   function name(parameter) {

   }
   ```

   The `function` keyword tells JavaScript that the `name` variable is going to be a function. `parameter` is a variable that represents a value that is passed into the function when it is used. A function may have as many, or as few, parameters as you'd like. Like a `for` loop, the space between the curly braces is the function body.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   function padRow() {

   }
   ```
   ```javascript
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   
   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

48. In order to use a function, you need to call/invoke it. A __function call__ tells your application to run the code from the function wherever you choose to call it.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow() {

   }
   ```
   ```javascript
   padRow();
   ```
   ```javascript
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   
   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

49. You are calling your `padRow` function, but not doing anything with that function call. All functions in JavaScript return a value, meaning they provide the defined result of calling them for you to use elsewhere. Recall you can assign the function call to a variable.

   ```javascript
   const call = padRow();
   ```

50. When you log the variable, you will see the function return value.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow() {

   }
   const call = padRow();
   ```
   ```javascript
   console.log(call);
   ```
   ```javascript
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   
   >undefined
   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

51. Your `call` variable has an `undefined` value, even though you defined it! This is because your `padRow` function does not currently return a value. By default, functions return undefined as their value. In order to return something else, you need to use the return keyword.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   function padRow() {
      return 'Hello!';
   }
   ```
   ```javascript
   const call = padRow();
   console.log(call);
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   
   >Hello!
   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

52. When you have a value that is explicitly written in your code, like the `'Hello!'` string in your function, it is considered to be _hard-coded_. Hard-coding a value inside a function might not make it as reusable as you'd like. Instead, you can define parameters for the function to dynamically change the result of the function's code.

   ```javascript
   function padRow(name) {
      return 'Hello!';
   }
   ```

53. A function does not have to return a hard-coded value. It can return the value stored in a variable.

   ```javascript
   function padRow(name) {
      return name;
   }
   ```

54. Parameters need to be given a value when you call the function, otherwise the function will return `undefined`. When you pass a value to a function call, that value is referred to as an __argument__.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   function padRow(name) {
      return name;
   }
   const call = padRow('Might Guy');
   ```
   ```javascript
   console.log(call);
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   
   >Might Guy
   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

55. Before moving on, take a moment to review what you learned about functions.

56. 
   - Declare a function with one parameter or more in parentheses.
   - Your function should not return hard-coded values.
   - Declare a variable and assign it the value of calling your function.
   - _Pass_ arguments to your function call as values for the paramaters.
   - Console log the variable to see the value returned by the function.

57. Variables in JavaScript are available in a specific __scope__. In other words, where a variable is declared determines where in your code it can be used.

   The first scope is the __global scope__. Variables that are declared outside of any "block" like a function or `for` loop are in the global scope. Your `character`, `count`, and `rows` variables are all in the global scope. When a variable is in the global scope, a function can access it in its definition.

58. Variables can also be declared inside a function. These variables are considered to be in the __local scope__, or __block scope__. A variable declared inside a function can only be used inside that function. If you try to access it outside of the function, you get a __reference error__.

59. Values returned out of a function are used by calling the function. You can use the function call directly as the value it returns, or capture the returned value in a variable. This way, you can use the value assigned to a locally scoped variable, outside the function it was created in.

60. The `return` keyword does not just define a value to be returned from your function.

61. `return` also stops the execution of your code inside a function or a block statement. 

62. Any code after a `return` statement will not run.

63. Empty your `padRow` function block and parantheses. Also remove your `call` variable and  log. 

   ```javascript
   function padRow() {
      
   }
   ```

64. In order to know how to format a row, your padRow function will need to know which row number you are on, and how many rows in total are being generated. The best way to do this is by creating function parameters for them. 

   ```javascript
   function padRow(rowNumber, rowCount) {
      
   }
   ```

65. Return the value of the `character` variable, repeated `rowNumber` times.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   function padRow(rowNumber, rowCount) {
      return character.repeat(rowNumber);
   }
   ```
   ```javascript
   for (let i = 1; i < count; i = i + 1) {
      rows.push(character.repeat(i + 1));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   
   >#
   >##
   >###
   >####
   >#####
   >######
   >#######
   >########
   ```

66. The methods like `.push()` that you have been using have been function calls.

   ```javascript
   for (let i = 1; i < count; i = i + 1) {
      rows.push(padRow());
   }
   ```

67. Pass `i + 1` and `count` as the arguments to your `padRow` call. Like parameters, arguments are separated by a comma.

   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      rows.push(padRow(i + 1, count));
   }
   ```

68.  Your `padRow` function is now in a reusable section of its own. Use the addition operator to concatenate a single space `" "` to the beginning and end of your repeated `character` string. Remember that you can use the `+` operator to concatenate strings.

   ```javascript
   function padRow(rowNumber, rowCount) {
      return ' ' + character.repeat(rowNumber) + ' ';
   }
   ```

69. Now it is time for a bit of math. Consider a three-row pyramid. If we want it centered, it would look something like:

   ```javascript
   ••#••
   •###•
   #####
   ```

   Empty spaces have been replaced with interpuncts, or middle dots, for readability. If you extrapolate the pattern, you can see that the spaces at the beginning and end of a row follow a pattern.

   Update your blank space strings to be repeated `rowCount` - `rowNumber` times. Open up the console to see the updated result.

   ```javascript
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(rowNumber) + ' '.repeat(rowCount - rowNumber); 
   }

   >       #       
   >      ##      
   >     ###     
   >    ####    
   >   #####   
   >  ######  
   > ####### 
   >########
   ```
70. You can pass full expressions as an argument. The function will receive the result of evaluating that expression. Update the `character` value to be repeated `2 * rowNumber - 1` times. Open up the console again to see the updated result.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   ```
   ```javascript
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(rowNumber) + ' '.repeat(rowCount - rowNumber); 
   }
   ```
   ```javascript
   for (let i = 0; i < count; i = i + 1) {
      rows.push(padRow(i + 1, count));
   }

   let result = '';

   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >       #       
   >      ###      
   >     #####    
   >    #######    
   >   #########   
   >  ###########  
   > ############# 
   >###############
   ```

71. Your pyramid generator now functions as expected. But this is an excellent opportunity to further explore the code you have written.

The addition operator is not the only way to add values to a variable. The __addition assignment operator__ `+=` can be used as shorthand to mean "take the original value of the variable, add this value, and assign the result back to the variable". 

   ```javascript
   for (let i = 0; i < count; i += 1) {
   ```

72. Because you are only increasing `i` by 1, you can use the __increment operator__ `++`. This operator increases the value of a variable by 1, updating the assignment for that variable.

   ```javascript
   for (let i = 0; i < count; i++) {
   ```

73. Rather than having to pass `i + 1` to your `padRow` call, you could instead start your loop at 1. This would allow you to create a one-indexed loop. Open up the console again to see the updated result.

   ```javascript
   for (let i = 1; i < count; i++) {
      rows.push(padRow(i + 1, count));
   }
     
   >      ###      
   >     #####    
   >    #######    
   >   #########   
   >  ###########  
   > ############# 
   >###############
   ```

74. The pyramid looks a little funny now. Because you are starting the loop at 1 instead of 0, you do not need to add one to `i` when you pass it to `padRow`.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }
   ```
   ```javascript
   for (let i = 1; i < count; i++) {
      rows.push(padRow(i, count));
   }
   ```
   ```javascript
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);

   >       #       
   >      ###      
   >     #####    
   >    #######    
   >   #########   
   >  ###########  
   > #############
   ```

75. Unfortunately, now the bottom of the pyramid has disappeared. This is because you have created another off-by-one error.

   Your original loop went for `i` values from 0 to 7, because `count` is 8 and your condition requires `i` to be less than `count`. Your loop is now running for `i` values from 1 to 7.

   Your loop needs to be updated to run when i is 8, too. Looking at your logic, this means your loop should run when `i` is less than or equal to `count`. You can use the __less than or equal to__ operator `<=` for this.

   ```javascript
   for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);

   >        #       
   >       ###      
   >      #####    
   >     #######    
   >    #########   
   >   ###########  
   >  #############
   > ###############
   ```

76. __Comments__ can be helpful for explaining why your code takes a certain approach, or leaving to-do notes for your future self. In JavaScript, you can use `//` to leave a single-line comment in your code.

   ```javascript
   // TODO: use a different type of loop
   for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }
   ```
77. JavaScript also has support for __multi-line comments__. A multi-line comment starts with `/*` and ends with `*/`. Unlike a __single-line comment__, a multi-line comment will encapsulate multiple lines.

   ```javascript
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/
   ```

78. Your pyramid has disappeared again. That's okay - that is to be expected. Before you create your new loop, you need to learn about __if statements__. 

   An `if` statement allows you to run a block of code only when a condition is met. 

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }
   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/
   ```
   ```javascript
   if (true) {
      console.log("Condition is true")
   }
   ```
   ```javascript
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);

   >Condition is true
   >        #       
   >       ###      
   >      #####    
   >     #######    
   >    #########   
   >   ###########  
   >  #############
   > ###############
   ```

79. Changing the condition to `false` prints nothing in the console.

80. Changing the conditions to the string 'false' prints 'Condition is true'.

81. The text has appeared again! This is because 'false' is a string, which when evaluated to a boolean becomes `true`. This means 'false' is a __truthy value__.

A truthy value is a value that is considered true when evaluated as a boolean. Most of the values you encounter in JavaScript will be truthy.

A __falsy value__ is the opposite - a value considered false when evaluated as a boolean. JavaScript has a defined list of falsy values. Some of them include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.

82. In addition to `if` statements, JavaScript also has `else if` statements. `else if` statements allow you to check multiple conditions in a single block of code. 

   ```javascript
   if (condition1) {
      // code to run if condition1 is true
   } else if (condition2) {
      // code to run if condition2 is true
   } else if (condition3) {
      // code to run if condition3 is true
   } 
   ```

   If the first condition is false, JavaScript will check the next condition in the chain. If the second condition is false, JavaScript will check the third condition, and so on.

83. Sometimes you will want to run different code when all of the `if...else if` conditions are false. You can do this by adding an `else` block.

   An `else` block will only evaluate if the conditions in the `if` and `else if` blocks are not met, therefor needs no condition in parentheses.

84. Now that you have practiced working with `if...else if...else` statements, you can remove them from your code and initialize new variables to the values below.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }
   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/
   ```
   ```javascript
   let continueLoop = false;
   let done = 0;
   ```
   ```javascript
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }
   console.log(result);
   ```

85. A `while` loop will run over and over again until the condition specified is no longer true.

   ```javascript
   while (continueLoop) {

   }
   ```

86. Right now, if you change `continueLoop` to `true`, your while loop will run forever. This is called an __infinite loop__, and you should be careful to avoid these. An infinite loop can lock up your system, requiring a full restart to escape.

   To avoid this, start by using the increment operator to increase the value of the `done` variable inside your loop.

   ```javascript
   while (continueLoop) {
      done++;
   }
   ```

87. The __equality operator__ `==` is used to check if two values are equal. To compare two values, you'd use a statement like `value == 8`.

   Below `done++` inside your loop, add an `if` statement. The statement should check if `done` is equal to `count` using the equality operator.

   ```javascript
   while (continueLoop) {
      done++;
      if (done == count) {

      }
   }
   ```

88. The equality operator can lead to some strange behavior in JavaScript. For example, `"0" == 0` is true, even though one is a string and one is a number.

   The __strict equality operator__ `===` is used to check if two values are equal and share the same type. As a general rule, this is the equality operator you should always use. With the strict equality operator, `"0" === 0` becomes false, because while they might have the same value of zero, they are not of the same type.

   ```javascript
   while (continueLoop) {
      done++;
      if (done === count) {

      }
   }
   ```

89. When `done` has reached the value of `count`, we want the loop to stop executing.

   ```javascript
   if (done === count) {
         continueLoop = false;
      }
   ```

90. To make your pyramid generate again, push the result of calling `padRow` with `done` and `count` as the arguments to your rows array, similar to what you did in your first loop.

   ```javascript
   while (continueLoop) {
      done++;
      rows.push(padRow(done, count));
      if (done === count) {
         continueLoop = false;
      }
   }
   ```

91. The __strict inequality operator__ `!==` allows you to check if two values are not equal, or do not have the same type. Update your while loop condition to check if done is not equal to count.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }
   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/
   let continueLoop = false;
   let done = 0;
   while (done !== count) {
      done++;
      rows.push(padRow(done, count));
      if (done === count) {
         continueLoop = false;
      }
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >        #       
   >       ###      
   >      #####    
   >     #######    
   >    #########   
   >   ###########  
   >  #############
   > ###############
   ```

92. ince you have moved the comparison into the `while` condition, you can remove your entire `if` statement.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }
   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/
   let continueLoop = false;
   let done = 0;
   while (done !== count) {
      done++;
      rows.push(padRow(done, count));
   }
   let result = '';
   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >        #       
   >       ###      
   >      #####    
   >     #######    
   >    #########   
   >   ###########  
   >  #############
   > ###############
   ```

93. Your loop is no longer relying on the `continueLoop` variable. This makes the variable an _unused declaration_. Generally, you want to avoid unused declarations to prevent future confusion.

   Remove your `continueLoop` variable.

94. Your pyramid generator is still working. However, it could be possible to end up with an infinite loop again.

   Because you are only checking if `done` is not equal to `count`, if done were to be larger than `count` your loop would go on forever.

   Update your loop's condition to check if `done` is less than or equal to `count`.

   ```javascript
   while (done <= count) {
      done++;
      rows.push(padRow(done, count));
   }
   ```

95. Using done to track the number of rows that have been generated is functional, but you can actually clean up the logic a bit further.

   Arrays have a special length property that allows you to see how many values, or elements, are in the array. You would access this property using syntax like `myArray.length`.

   Note that `rows.length` in the `padRow` call would give you an off-by-one error, because done is incremented before the call.

   Update your condition to check if `rows.length` is less than `count`.

   ```javascript
   while (rows.length < count) {
      done++;
      rows.push(padRow(done, count));
   }
   ```

96. Replace the `done` reference in your `padRow` call with `rows.length + 1`.

   ```javascript
   while (rows.length < count) {
      done++;
      rows.push(padRow(rows.length + 1, count));
   }
   ```

97. Now you no longer need your `done` variable. Remove the increment operation from your loop, and the variable declaration for `done`.

98. That's a very clean and functional loop. Nice work! But there's still more to explore. Use a multi-line comment to comment out your while loop. Try `Ctrl` + `/` or `command` + `/` while the coed is highlighted as a shortcut.

99. What if you made your pyramid upside-down, or inverted? Time to try it out!

   Start by creating a new `for` loop. Declare your iterator `i` and assign it the value of `count`, then use the boolean `false` for your condition and iteration statements.

   ```javascript
   for (let i = count; false; false) {
      
   }
   ```

100. Because you are going to loop in the opposite direction, your loop needs to run while `i` is greater than 0. You can use the __greater than operator__ `>` for this.

   Set your loop's condition to run when `i` is greater than 0.

   ```javascript
   for (let i = count; i > 0; false) {
      
   }
   ```

101. Your iteration statement is also going to be different. Instead of adding 1 to `i` with each loop, you need to subtract 1.

   Like you did earlier with `i = i + 1`, update your iteration statement to give `i` the value of subtracting 1 from itself.

   ```javascript
   for (let i = count; i > 0; i = i - 1) {
     
   }
   ```

102. Again, push the result of calling `padRow` with your `i` and `count` variables to your `rows` array. Open up the console to see the upside-down pyramid.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];

   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }

   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/

   /*while (rows.length < count) {
      rows.push(padRow(rows.length + 1, count));
   }*/

   for (let i = count; i > 0; i = i - 1) {
      rows.push(padRow(i, count));
   }

   const numbers = [1, 2, 3];
   console.log(numbers);

   let result = '';

   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >###############
   > #############
   >  ###########
   >   #########
   >    #######
   >     #####
   >      ###
   >       #
   ```

103. Just like addition, there are different operators you can use for subtraction. The __subtraction assignment operator__ `-=` subtracts the given value from the current variable value, then assigns the result back to the variable.

   Replace your iterator statement with the correct statement using the subtraction assignment operator.

   ```javascript
   for (let i = count; i > 0; i-=1) {
      rows.push(padRow(i, count));
   }
   ```

104. Because you are only subtracting one from `i`, you can use the __decrement operator__ `--`. Replace your subtraction assignment with the decrement operator.

   ```javascript
   for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count));
   }
   ```

105. Use a multi-line comment to comment out this loop as well, to prepare for the next approach.

106. You can actually build the inverted pyramid without needing to loop "backwards" like you did.To do this, you'll need to learn a couple of new array methods. 

   Start by using `const` to declare a `numbers` variable. Assign it an array with the elements `1`, `2`, and `3`. Then log the `numbers` array.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];

   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }

   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/

   /*while (rows.length < count) {
      rows.push(padRow(rows.length + 1, count));
   }*/

   /*for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count));
   }*/
   ```
   ```javascript
   const numbers = [1, 2, 3];
   console.log(numbers);
   ```
   ```javascript
   let result = '';

   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >[ 1, 2, 3 ]
   ```

107. The `.unshift()` method of an array allows you to add a value to the beginning of the array, unlike `.push()` which adds the value at the end of the array. `.unshift()` returns the new length of the array it was called on.

   Use `const` to declare an `unshifted` variable, and assign it the result of calling `.unshift()` on your `numbers` array. Pass `5` as the argument. Then print your `unshifted` variable.

   ```javascript
   const numbers = [1, 2, 3];
   const unshifted = numbers.unshift(5);
   console.log(unshifted);
   console.log(numbers);

   >4
   >[ 5, 1, 2, 3 ]
   ```

108. Arrays also have a `.shift()` method. This will remove the first element of the array, unlike `.pop()` which removes the last element. Directly below your `numbers` array, declare a `shifted` variable and assign it the result of calling `.shift()` on the `numbers` array. On the next line, log the `shifted` variable to the console.

   ```javascript
   const numbers = [1, 2, 3];
   const shifted = numbers.shift();
   console.log(shifted);
   const unshifted = numbers.unshift(5);
   console.log(unshifted);
   console.log(numbers);

   >1
   >3
   >[ 5, 2, 3 ]
   ```

109. Now that you've tried these methods, you can do another inverted pyramid approach. But first you need to clean up your experimentation.

   Remove your `numbers` array, and the method calls and log calls.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];

   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }

   // TODO: use a different type of loop
   /*for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }*/

   /*while (rows.length < count) {
      rows.push(padRow(rows.length + 1, count));
   }*/

   /*for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count));
   }*/

   let result = '';

   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);
   ```

110. Sometimes you may wish to bring back previous code that you commented out. You can do so by removing the `/*` and `*/` around that code or by removing the `//` before it. This is called __uncommenting__.

   Uncomment only your first for loop. Leave the single line comment and the other two multi line comments in place.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];

   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }

   // TODO: use a different type of loop
   for (let i = 1; i <= count; i++) {
      rows.push(padRow(i, count));
   }

   /*while (rows.length < count) {
      rows.push(padRow(rows.length + 1, count));
   }*/

   /*for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count));
   }*/

   let result = '';

   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >        #       
   >       ###      
   >      #####    
   >     #######    
   >    #########   
   >   ###########  
   >  #############
   > ###############
   ```

111. Your pyramid is no longer inverted. This is because you are adding new rows to the _end_ of the array.

   Update your loop body to add new rows to the _beginning_ of the array.

   ```javascript
   for (let i = 1; i <= count; i++) {
      rows.unshift(padRow(i, count));
   }
   ```

112. What if you had a way to toggle between an inverted pyramid and a standard pyramid?

   Start by declaring an `inverted` variable, and assigning it the value `true`. You are not changing this variable in your code, but you will need to use `let` so our tests can modify it later.

   ```javascript
   let inverted = true;
   ```

113. Use an `if` statement to check if inverted is `true`. Remember that you do not need to use an equality operator here.

   ```javascript
   for (let i = 1; i <= count; i++) {
   if (inverted){
   
   }
   rows.unshift(padRow(i, count));
   }
   ```

114. Now move your `.unshift()` call into your `if` block.

   ```javascript
   for (let i = 1; i <= count; i++) {
   if (inverted){
      rows.unshift(padRow(i, count));
   }
   }
   ```

115. If your pyramid is not inverted, then you will want to have an else block that builds the pyramid in the normal order.

   ```javascript
      for (let i = 1; i <= count; i++) {
   if (inverted){
      rows.unshift(padRow(i, count));
   } else {

      }
   }
   ```

116. If your pyramid is not inverted, then you will want to have an else block that builds the pyramid in the normal order.

   ```javascript
   for (let i = 1; i <= count; i++) {
   if (inverted){
      rows.unshift(padRow(i, count));
   } else {
      rows.push(padRow(i, count));
      }
   }
   ```

117. Your pyramid generator is now in a finished state, with more functionality than you originally planned! The next step is to clean up your code.

   Remove all comments, both single- and multi-line, from your code.

   ```javascript
   const character = '#';
   const count = 8;
   const rows = [];
   let inverted = true;

   function padRow(rowNumber, rowCount) {
      return ' '.repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + ' '.repeat(rowCount - rowNumber); 
   }

   for (let i = 1; i <= count; i++) {
      if (inverted){
         rows.unshift(padRow(i, count));
      } else {
         rows.push(padRow(i, count));
         }
   }

   let result = '';

   for (const row of rows) {
      result = result + '\n' + row;
   }

   console.log(result);

   >        #       
   >       ###      
   >      #####    
   >     #######    
   >    #########   
   >   ###########  
   >  #############
   > ###############
   ```

118. Nice work! Experiment with different values for your `character`, `count`, and `inverted` variables.

   __Congratulations on completing your pyramid generator!__