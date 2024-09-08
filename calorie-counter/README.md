# Algoriths and Data Structures

## Calorie Counter

Sometimes when you're coding a web application, you'll need to be able to accept input from a user. In this calorie counter project, you'll learn how to validate user input, perform calculations based on that input, and dynamically update your interface to display the results.

In this practice project, you'll learn basic __regular expressions__, __template literals__, the __addEventListener()__ method, and more.

1. In this project, you'll learn to create a calorie counter form that enables users to input their daily calorie budget and the calorie counts of various meals. The form will then calculate and display whether the user is in a calorie deficit or surplus.

	You have been provided with boilerplate CSS and HTML. However, you need to build your calorie counter form.

	Feel free to explore the HTML and CSS, then add a `form` element and give it an id set to `calorie-counter`.

2. In your form, users will be able to input a number which represents their daily calorie budget. Create a `label` element, give it a `for` attribute set to `budget` and the text `Budget`, then create an `input` element with the `id` set to `budget`.

3. Your `input` element needs some additional attributes. Give it a `type` set to `number` to only allow numeric inputs, a `min` attribute set to `0` to only allow positive numbers, and a `placeholder` set to `Daily calorie budget`. Finally, mark the `input` element as `required`.

4. In your form, users should have the capability to add various meal types along with their calorie counts. Create a `fieldset` element with the `id` set to `breakfast`. Within that element, create a `legend` with the text `Breakfast`, and an empty `div` with the `class` set to `input-container`.

5. Next, create a `fieldset` element with the `id` set to `lunch`. Within that element, create a `legend` element with the text `Lunch`, and an empty `div` with the `class` set to `input-container`.

6. Continuing the pattern, create a `fieldset` for `dinner` with the same nested elements.

7. You need two more of these `fieldset` code blocks – one for `snacks` and one for `exercise`.

8. When users want to select a meal type to input their calorie counts, they should be presented with a dropdown menu and a button to add the meal type. Start by creating a `div` element and assign it a `class` attribute with the value `controls`. Then, nest a `span` element inside this `div`.

9. In your `span` element, create a `label` element for an `entry-dropdown` and give it the text `Add food or exercise:`. Then create a `select` element with the `id` set to `entry-dropdown` and a `name` set to `options`. Below that, add a `button` element with the `id` set to `add-entry` and the text `Add Entry`. Give your `button` element a `type` attribute set to `button` to prevent automatic form submission.

10. Your select menu needs options for each of the food and exercise `fieldset` elements you created in the previous steps. Use the `option` element to create a new option for each `fieldset`. The `value` attribute of each option should be the `id` of the `fieldset`, and the text of each option should be the text of the `legend`. Set the `Breakfast` option as the `selected` option.

11. Create another `div` element. Within it, nest a `button` to `submit` the form. This button should have the text `Calculate Remaining Calories`. Then add a `button` with the `id` set to `clear` to clear the form (don't forget to give it a `type` attribute that prevents it from submitting the form). This button needs the text `Clear`.

12. Your form needs somewhere to display the results. Add an empty `div` element and give it an `id` of `output` and the `class` values of `output` and `hide`.

13. Finally, you need to link your JavaScript file to your HTML. Create a `script` element to do so.

14. It is time to start writing the script that makes your form work. To access an HTML element with a given `id` name, you can use the `getElementById()` method. Begin by getting the `form` element (using the `id`) and storing it in a variable called `calorieCounter`.

15. Get your `#budget` element and assign it to `budgetNumberInput`, and your `#entry-dropdown` element and assign it to `entryDropdown`.

16. Following the same pattern, assign your `#add-entry` element to `addEntryButton`, your `#clear` element to `clearButton`, and your `#output` element to `output`.

17. In programming, prefixing a variable with `is` or `has` is a common practice to signify that the variable represents a boolean value. Declare a variable named `isError` using `let` and initialize it with `false`, allowing for its reassignment later. Later on in the project, you will update the value of `isError` if the user provides an invalid input.

18. When the user inputs their daily calorie budget, the input field will only accept numerical values. However, if a number is entered with a `+` or `-` sign, you'll need to remove those characters. Start by declaring a `cleanInputString` function that takes a str parameter.

	NOTE: Values from an HTML `input` field are received as strings in JavaScript. You'll need to convert these strings into numbers before performing any calculations. Converting string values into numbers will be covered in a future step.

19. To match specific characters in a string, you can use Regular Expressions or "regex" for short. Regex in JavaScript is indicated by a pattern wrapped in forward slashes. The following example will match the string literal "hello":

	```javascript
	const regex = /hello/;
	```

	Declare a `regex` variable and assign it the value from the example above. In future steps, you will update this regex pattern to match specific characters needed for the calorie counter.

20. The current pattern will match the exact text `"hello"`, which is not the desired behavior. Instead, you want to search for `+`, `-`, or spaces. Replace the pattern in your `regex` variable with `\+-` to match plus and minus characters.

	Note that you need to use the backslash \ character to escape the + symbol because it has a special meaning in regular expressions.