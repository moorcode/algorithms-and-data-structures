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