# Algorithms and Data Structures

## Role Playing Game

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with __arrays__, __strings__, __objects__, __functions__, __loops__, __if/else statements__, and more.

1. To get started, create your standard HTML boilerplate with a `DOCTYPE`, `html`, `head`, and `body`, then add a `meta` tag for the `charset`. Add a `title` element and use the text `RPG - Dragon Repeller` for it. Include a `link` tag for your stylesheet to link the `styles.css` file.

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