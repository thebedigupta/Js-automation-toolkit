Convert my provided text into a beautiful readme .md file content which I paste in it below is the complete content 

WEEK 1 SUMMARY — QA AUTOMATION BASICS
Day 1: Variables — let vs const
Started with the basics of declaring variables. const is what you use when you don't want a value to change — once you set it, it stays that way. let is more flexible — you can change its value whenever you need to, but you can't create another variable with the same name in the same scope. Used template literals to print out formatted strings with variables inside them.

Day 2: Making Comparisons Properly
Learned the difference between === (strict) and == (loose) equality. The === checks both the value AND the type, so 2 === "2" is false because one's a number and one's a string. With ==, it doesn't care about type, which can give weird results. Built a grade calculator function that takes marks and returns letter grades (A, B, C, D, F) with proper boundary checking.

Day 3: Looping Through Things
Covered three ways to loop: for, while, and do-while. The for loop is most common. Learned about continue (skip to next iteration) and break (exit the loop). Did practical exercises like printing multiplication tables, all even numbers, and star patterns using nested loops.

Day 4: Functions — The Three Ways
Functions are how you reuse code. Learned three ways to write them: regular function declarations (can be called before they're defined), function expressions stored in variables (can't call before defining), and arrow functions (shorter syntax, no 'this' binding). Covered how parameters work, default values, and that a function can return only one value (but it can be an array or object with multiple values inside).

Day 5: Arrays — Working with Collections
Arrays are just ordered lists of stuff. Learned methods like push() and pop() for adding/removing from the end, shift() and unshift() for the beginning. The at() method was useful — even allows negative indexing to go backwards from the end. Also learned splice() to add or remove multiple elements at once. Important note: always use for...of loops for arrays, not for...in.

Day 6: Objects — Storing Related Data Together
Objects let you group related data (like a person with name, age, email). Accessed properties using dot notation (user.name). Worked with nested objects (properties that are themselves objects), arrays of objects, and used methods like filter() to find specific items based on conditions.

Day 7: Putting It All Together
Combined everything — took an array of student objects, calculated their average marks using reduce(), filtered out those who failed (average < 40), and sorted the passing students by highest average first. This is the kind of real-world problem you'll solve in QA automation.

Key Things to Remember:

Use const by default, let when you need to change things
Always use === for comparisons (not ==)
Loops are powerful — use them to process multiple items
Functions make code reusable
Arrays and objects organize data nicely
You can chain methods together (filter → map → sort)