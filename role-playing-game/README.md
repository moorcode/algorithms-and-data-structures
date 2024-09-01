# Algorithms and Data Structures

## Role Playing Game

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with __arrays__, __strings__, __objects__, __functions__, __loops__, __if/else statements__, and more.

1. To get started, create your standard HTML __boilerplate__ with a `DOCTYPE`, `html`, `head`, and `body`, then add a `meta` tag for the `charset`. Add a `title` element and use the text `RPG - Dragon Repeller` for it. Include a `link` tag for your stylesheet to link the `styles.css` file.

    Finally, create a `div` element with `id` set to `game` within your `body`.

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="./styles.css">
            <title>RPG - Dragon Repeller</title>
        </head>
        <body>
            <div id="game">
            </div>    
        </body>
    </html>
    ```
2. Now you can start writing your JavaScript. Begin by creating a script element.

    ```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="./styles.css">
            <title>RPG - Dragon Repeller</title>
    ```
    ```html
    <script>
    </script>
    ```
    ```html
        </head>
        <body>
            <div id="game">
            </div>    
        </body>
    </html>
    ```

3. One of the most powerful tools is your developer console. Depending on your browser, this might be opened by pressing `F12` or `Ctrl+Shift+I`. On Mac, you can press `Option + ⌘ + C` and select "Console". You can also click the "Console" button above the preview window to see our built-in console.

    The developer console will include errors that are produced by your code, but you can also use it to see values of variables in your code, which is helpful for debugging.

    Add a `console.log("Hello World");` line between your script tags. Then click the "Console" button to open the console. You should see the text `"Hello World"`.

    ```html
    <script>
        console.log("Hello World");
    </script>
    ```

4. Before you start writing your project code, you should move it to its own file to keep things organized. Remove your `console.log("Hello World");` line. Then give your now empty `script` element a `src` attribute set to `./script.js`.

    ```html
    <script src="./script.js"></script>
    ```

5. Add your `console.log("Hello World");` line to your `script.js` file, and see it appear in your console.

6. Remove your console.log("Hello World"); line to begin writing your project code. Use the `let` keyword to declare a variable called `xp` and assign it the value of `0`, a number.

    ```javascript
    let xp = 0;
    ```

7. Initialize another variable called `health` with a value of `100`, and a variable called `gold` with a value of `50`.

    ```javascript
    let xp = 0;
    let health = 100;
    let gold = 50;
    ```

8. Create another variable called `currentWeaponIndex` and set it to `0`.

    ```javascript
    let xp = 0;
    let health = 100;
    let gold = 50;
    let currentWeaponIndex = 0;
    ```

9. Declare a variable called `fighting` but do not initialize it with a value.

    ```javascript
    let xp = 0;
    let health = 100;
    let gold = 50;
    let currentWeaponIndex = 0;
    let fighting;
    ```

10. Declare two more variables named `monsterHealth` and `inventory`. For your `inventory` variable, assign it the value of an array containing the string `'stick'`.

    ```javascript
    let xp = 0;
    let health = 100;
    let gold = 50;
    let currentWeaponIndex = 0;
    let fighting;
    let monsterHealth;
    let inventory = ['stick'];
    ```

11. In your role playing game, users will be able to track their stats, buy weapons, and fight monsters. Before you can continue with the interactive JavaScript portion of the game, you need to first create the HTML elements that will display the game information.

    Create four `div` elements within your `#game` element. Give them the following respective `id` values, in order: `stats`, `controls`, `monsterStats`, and `text`.

    ```html
    <div id="game">
        <div id="stats"></div>
        <div id="controls"></div>
        <div id="monsterStats"></div>
        <div id="text"></div>
    </div>   
    ```

12. Create three `span` elements within your `#stats` element. Give each of them the class `stat`. Then give the first one the text `XP: 0`, the second one the text `Health: 100`, and the third one the text `Gold: 50`.

    ```html
    <div id="stats">
        <span class="stat">XP: 0</span>
        <span class="stat">Health: 100</span>
        <span class="stat">Gold: 50</span>
    </div> 
    ```

13. Wrap the numbers `0`, `100`, and `50` in `span` elements, and wrap those new `span` elements in `strong` elements. Then give your new `span` elements `id` values of `xpText`, `healthText`, and `goldText`, respectively.

    ```html
    <div id="stats">
        <span class="stat">XP: <strong><span id="xpText">0</span></strong></span>
        <span class="stat">Health: <strong><span id="healthText">100</span></strong></span>
        <span class="stat">Gold: <strong><span id="goldText">50</span></strong></span>
    </div> 
    ```

14. For your `#controls` element, create three `button` elements. The first should have the `id` set to `button1`, and the text `Go to store`. The second should have the `id` set to `button2`, and the text `Go to cave`. The third should have the `id` set to `button3`, and the text `Fight dragon`.

    ```html
    <div id="controls">
        <button id="button1">Go to store</button>
        <button id="button2">Go to cave</button>
        <button id="button3">Fight dragon</button>
    </div> 
    ```

15. JavaScript interacts with the HTML using the __Document Object Model__, or __DOM__. The DOM is a tree of objects that represents the HTML. You can access the HTML using the `document` object, which represents your entire HTML document.

    One method for finding specific elements in your HTML is using the `querySelector()` method. The `querySelector()` method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the `<h1>` element in your HTML, you would write:
    
    ```javascript
    let h1 = document.querySelector("h1");
    ```

    Note that `h1` is a string and matches the CSS selector you would use.

    Create a `button1` variable and use `querySelector()` to assign it your element with the `id` of `button1`. Remember that CSS `id` selectors are prefixed with a `#`.

    ```javascript
    let button1 = document.querySelector('#button1');
    ```

16. We have run into a slight problem. You are trying to query your page for a `button` element, but your `script` tag is in the `head` of your HTML. This means your code runs before the browser has finished reading the HTML, and your `document.querySelector()` will not see the button - because the browser hasn't processed it yet.

    To fix this, move your `script` element out of the `head` element, and place it at the end of your `body` element (just before the closing `</body>` tag.)

17. `button1` is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the `const` keyword to declare it instead of the `let` keyword. This will tell JavaScript to throw an error if you accidentally reassign it.

    Change your `button1` variable to be declared with the `const` keyword.

18. Use `querySelector()` to get the other two `button` elements using their ids: `button2` and `button3`. Store them in variables called `button2` and `button3`. Remember to use `const`.

    ```javascript
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');
    ```

19. Similar to your `#stats` element, your `#monsterStats` element needs two `span` elements. Give them the class `stat` and give the first element the text `Monster Name: ` and the second the text `Health: `. After the text in each, add a `strong` element with an empty nested `span` element. Give the first inner `span` element an `id` of `monsterName` and the second inner `span` element an `id` of `monsterHealth`.

    ```html
    <div id="monsterStats">
        <span class="stat">Monster Name: <strong><span id="monsterName"></span></strong></span>
        <span class="stat">Health: <strong><span id="monsterHealth"></span></strong></span>
    </div>
    ```

20. Give your `#text` element the following text:
    >Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.

21. Now we need some quick styling. Start by giving the `body` a `background-color` set to `#0a0a23`.

    ```css
    body {
        background-color: #0a0a23;
    }
    ```

22. Give the #`text` element a `background-color` of `#0a0a23`, a `color` of `#ffffff`, and `10px` of `padding` on all sides.

    ```css
    #text {
        background-color: #0a0a23;
        color: #ffffff;
        padding: 10px;
    }
    ```

23. Give your `#game` a maximum width of `500px` and a maximum height of `400px`. Set the `background-color` to `#ffffff` and the `color` to `#ffffff`. Use margins to center it by setting the top margin to `30px`, bottom margin to `0px`, and the left and right margin to `auto`. Finally, give it `10px` of padding on all four sides.

    ```css
    #game {
        max-width: 500px;
        max-height: 400px;
        background-color: #ffffff;
        color: #ffffff;
        margin: 30px auto 0px;
        padding: 10px;
    }
    ```

24. Using a selector list (`selector1, selector2`) give both your `#controls` and `#stats` elements a `border` of `1px solid #0a0a23`, a `#0a0a23` text color, and `5px` of padding.

    ```css
    #controls, #stats {
        border: 1px solid #0a0a23;
        color: #0a0a23;
        padding: 5px;
    }
    ```

25. Give your `#monsterStats` element the same `border` and `padding` as your `#stats` element. Set its color to `#ffffff` and give it a `#c70d0d` background.

    ```css
    #monsterStats {
        border: 1px solid #0a0a23;
        padding: 5px;
        color: #ffffff;
        background-color: #c70d0d;
    }
    ```

26. For now, hide your `#monsterStats` element with the `display` property. Do not change any of the other styling.

    ```css
    #monsterStats {
        display: none;
        border: 1px solid #0a0a23;
        padding: 5px;
        color: #ffffff;
        background-color: #c70d0d;
    }
    ```

27. Next, give your `.stat` elements a `padding-right` of `10px`.

    ```css
    .stat {
        padding-right: 10px;
    }
    ```

28. Finally, you will need to add some styles for your buttons. Start by setting the `cursor` property to `pointer`. Then set the text `color` to `#0a0a23` and the `background-color` to `#feac32`. Then set the `background-image` property to `linear-gradient(#fecc4c, #ffac33)`. Lastly, set the `border` to `3px solid #feac32`.

    ```css
    button {
        cursor: pointer;
        color: #0a0a23;
        background-color: #feac32;
        background-image: linear-gradient(#fecc4c, #ffac33);
        border: 3px solid #feac32;
    }
    ```

29. Just like you did with the buttons, create variables for the following `ids` and use `querySelector()` to give them the element as a value:

    `text`, `xpText`, `healthText`, `goldText`, `monsterStats`, and `monsterName`.

    Remember to declare these with the `const` keyword, and name the variables to match the `ids`.

    ```javascript
    const text = document.querySelector('#text');
    const xpText = document.querySelector('#xpText');
    const healthText = document.querySelector('#healthText');
    const goldText = document.querySelector('#goldText');
    const monsterStats = document.querySelector('#monsterStats');
    const monsterName = document.querySelector('#monsterName');
    ```

30. Finally, use `querySelector()` to get the `#monsterHealth` element. Because you have already declared a `monsterHealth` variable earlier, you need to use a different variable name for this element. Declare a new variable with the `const` keyword and name it `monsterHealthText`.

    ```javascript
    const monsterHealthText = document.querySelector('#monsterHealth');
    ```

31. Create an empty function named `goStore`.

    ```javascript
    function goStore() {

    }
    ```

32. For now, make your `goStore` function output the message `'Going to store.'` to the console.

    ```javascript
    function goStore() {
        console.log('Going to store.');
    }
    ```

33. Now create a `goCave` function that prints `'Going to cave.'` to the console.

    ```javascript
    function goCave() {
        console.log('Going to cave.');
    }
    ```

34. Now create a `fightDragon` function that prints `'Fighting dragon.'` to the console.

    ```javascript
    function fightDragon() {
        console.log('Fighting dragon.');
    }
    ```

35. Add a single-line comment that says `initialize buttons`.

    ```javascript
    //initialize buttons
    function goStore() {
    console.log('Going to store.');
    }

    function goCave() {
        console.log('Going to cave.');
    }

    function fightDragon() {
        console.log('Fighting dragon.');
    }
    ```

36. `button1` represents your first `button` element. These elements have a special property called `onclick`, which you can use to determine what happens when someone clicks that button. You can access properties in JavaScript a couple of different ways. The first is with __dot notation__. Here is an example of using dot notation to set the `onclick` property of a button to a function reference.

    >button.onclick = myFunction;

    In this example, `button` is the button element, and `myFunction` is a reference to a function. When the button is clicked, `myFunction` will be called. Use dot notation to set the `onclick` property of your `button1` to the function reference of `goStore`. Note that `button1` is already declared, so you don't need to use `let` or `const`.

    ```javascript
    button1.onclick = goStore;
    ```

37. Using the same syntax, set the `onclick` properties of `button2` and `button3` to `goCave` and `fightDragon` respectively. Once you have done that, open your console and try clicking the buttons on your project.

    ```javascript
    button2.onclick = goCave;
    button3.onclick = fightDragon;
    ```

38. The `innerText` property controls the text that appears in an HTML element. For example:
    
    ```html
    <p id="info">Demo content</p> 
    ```
    ```javascript
    const info = document.querySelector("#info"); 
    info.innerText = "Hello World"; 
    ```
    The following example would change the text of the `p` element from `Demo content` to `Hello World`.

    When a player clicks your `Go to store` button, you want to change the buttons and text. Remove the code inside the `goStore` function and add a line that updates the text of `button1` to say `'Buy 10 health (10 gold)'`.

    ```javascript
    function goStore() {
        button1.innerText = 'Buy 10 health (10 gold)';
    }
    ```

39. Now, add a line that updates the text of `button2` to say `'Buy weapon (30 gold)'` and update the text of `button3` to say `'Go to town square'`.

    ```javascript
        function goStore() {
        button1.innerText = 'Buy 10 health (10 gold)';
        button2.innerText = 'Buy weapon (30 gold)';
        button3.innerText = 'Go to town square';
    }
    ```

40. You will also need to update the functions that run when the buttons are clicked again. In your `goStore()` function, update the `onclick` property for each button to run `buyHealth`, `buyWeapon`, and `goTown`, respectively.

    ```javascript
    function goStore() {
        button1.innerText = 'Buy 10 health (10 gold)';
        button2.innerText = 'Buy weapon (30 gold)';
        button3.innerText = 'Go to town square';
        button1.onclick = buyHealth;
        button2.onclick = buyWeapon;
        button3.onclick = goTown;
    }
    ```

41. Now you need to modify your display text. Change the `innerText` property of the text variable to be `'You enter the store.'`.

    ```javascript
    function goStore() {
        button1.innerText = 'Buy 10 health (10 gold)';
        button2.innerText = 'Buy weapon (30 gold)';
        button3.innerText = 'Go to town square';
        button1.onclick = buyHealth;
        button2.onclick = buyWeapon;
        button3.onclick = goTown;
        text.innerText = 'You enter the store.';
    }
    ```

42. Create three new empty functions called `buyHealth`, `buyWeapon`, and `goTown`.

43. Move your `goTown` function above your `goStore` function. Then copy and paste the contents of the `goStore` function into the `goTown` function.

44. In your `goTown` function, change your `button` elements' `innerText` properties to be `'Go to store'`, `'Go to cave'`, and `'Fight dragon'`. Update your `onclick` properties to be `goStore`, `goCave`, and `fightDragon`, respectively. Finally, update `innerText` property of your text to be `'You are in the town square. You see a sign that says Store.'`.

    ```javascript
    function goTown() {
        button1.innerText = 'Go to store';
        button2.innerText = 'Go to cave';
        button3.innerText = 'Fight dragon';
        button1.onclick = goStore;
        button2.onclick = goCave;
        button3.onclick = fightDragon;
        text.innerText = 'You are in the town square. You see a sign that says Store.';
    }
    ```

45. You need to wrap the text `Store` in double quotes. If your string is already wrapped in double quotes, you'll need to escape the quotes around Store. You can escape them with a backslash `\`. Here is an example:
    
    ```javascript
    const escapedString = "Naomi likes to play \"Zelda\" sometimes.";
    ```
    Wrap the text `Store` in double quotes within your `text.innerText` line.

    ```javascript
    text.innerText = 'You are in the town square. You see a sign that says "Store".';
    ```

46. You have repetition in the `goTown` and `goStore` functions. Repetition in your code is a sign that you need another function. In the previous project, you learned how to work with function parameters. Function parameters act as placeholders for values that you pass to the function when you call it.

Create an empty `update` function that takes a parameter called `location`. Place it before your `goTown` function.

47. In your role playing game, you will be able to visit different locations like the store, the cave, and the __town square__. You will need to create a data structure that will hold the different locations.

Use `const` to create a variable called `locations` and assign it an empty array.

48. Before you can begin to build out your `locations` array, you will first need to learn about __objects__. Objects are an important data type in JavaScript. The next few steps will be dedicated to learning about them so you will better understand how to apply them in your project.

    Objects are non primitive data types that store __key-value pairs__. Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol. Mutable means that the data can be changed after it is created. Here is the basic syntax for an object:

    ```javascript
    {
        key: value
    }
    ```
    You will learn about keys and values in the next few steps. For now, create a `const` variable called `cat` and assign it an empty object `{}`. Below that `cat` variable, add a `console.log(cat)` statement to see the object in the console.

    ```javascript
    const cat = {};
    console.log(cat);
    
    >{}
    ```

49. Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through __properties__. Properties consist of a key and a value. The key is the name of the property, and the value is the data stored in the property. 

    Inside your `cat` object, add a new property. The key should be `name` and the value should be the string `"Whiskers"`. Open up the console to see the updates to your object. For objects, we will use double quotes, though we have been using single quotes for strings.

    ```javascript
    const cat = {
        name: "Whiskers"
    };
    ```

50. If the property name (key) of an object has a space in it, you will need to use single or double quotes around the name. If you tried to write a key that has spaces without the quotes, it would throw an error. Add a new property with a key of `"Number of legs"` and value of `4` to the `cat` object.

    ```javascript
    const cat = {
        name: "Whiskers",
        "Number of legs": 4
    };
    ```

51. There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`), similar to an array. Dot notation is what you use when you know the name of the property you're trying to access ahead of time. Update your console statement to access the `name` property of the `cat` object using dot notation.

    ```javascript
    console.log(cat.name);

    >{name: 'Whiskers', Number of legs: 4}
    ```

52. The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in its name, you will need to use bracket notation. Update your console statement to use bracket notation to access the property `"Number of legs"` of the `cat` object.

    ```javascript
    console.log(cat["Number of legs"]);

    >4
    ```

53. Later on in the curriculum, you will dive deeper into objects. But for now, it is time to apply what you have learned to your role playing game. Start by deleting your `cat` object and console statement.

54. Your `locations` array will hold different locations like the store, the cave, and the town square. Each location will be represented as an object. Inside your `locations` array, add an object. Inside that object add a key called `name` with a value of `"town square"`.

    ```javascript
    const locations = [
        {
            name: "town square"
        }
    ];
    ```

55. Just like array values, object properties are separated by a comma. Add a comma after your `name` property and add a `button text` property with the value of an empty array. Since the property name has a space in it, you will need to surround it with quotes.

    ```javascript
    const locations = [
        {
            name: "town square",
            "button text": []
        }
    ];
    ```
