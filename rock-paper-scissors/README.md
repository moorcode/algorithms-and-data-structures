# Algorithms and Data Structures

## Rock Paper Scissors

In this mini project, I reviewed conditionals, functions, `getElementById`, and more. This project gave me an opportunity to solve small problems and get a better understanding of the basics. Here is the way:


1. The first step is to __build out the function that will generate a random choice for the computer__. 

The `getRandomComputerResult` function will be used to get the computer's choice. Inside that function, you should see an options array with `"Rock"`, `"Paper"`, and `"Scissors"`. Your task is to complete the `getRandomComputerResult` function so that it returns a random `option` from the options array.
	
	- You can use `Math.random()` and `Math.floor()` to help you get a random whole number. This will represent the index number for the `options` array.
	- You can use the random index to access the option from the `options` array.
	- `Math.floor(Math.random()*11+1)` generates a reandom number from 1 to 10, including 1 and 10.

	```javascript
	function getRandomComputerResult(){
		const options = ["Rock", "Paper", "Scissors"];
		let randomNumber = Math.floor(Math.random() * 3)
		return options[randomNumber]
	}
	```

2. 

	```javascript

	```

3. 

	```javascript

	```

4. 

	```javascript

	```

5. 

	```javascript

	```

6. 

	```javascript

	```

