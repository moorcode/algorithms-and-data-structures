# Algorithms and Data Structures

## Gradebook App

In this mini project, you will get to review JavaScript fundamentals like __functions__, __variables__, __conditionals__ and more by building a gradebook app. This will give you an opportunity to solve small problems and get a better understanding of the basics.


1. A teacher has finished grading their students' tests and needs your help to calculate the average score for the class. Create a `getAverage` function which takes in an array of test `scores` and returns the average score.

    __Tips__

    - You can use a loop to iterate over the `scores` array and add up all the scores.
    - You can use the `length` property to get the total number of scores.
    - The average is calculated by adding up all the scores and dividing by the total number of scores.

    ```javascript
    function getAverage(scores) {
        let sum = 0;
        for (const score of scores) {
            sum += score;
        }
        return sum / scores.length;
    }
    ```

    A couple of funtion calls have been provided for you so you can test out your code.

    ```javascript
    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
    
    >71.7
    >85.4
    ```

2. Now the teacher needs your help converting the student score to a letter grade. Create a `getGrade` function that takes a number `score` as a parameter. Your function should return a string representing a letter grade based on the score.

    Here are the scores and their corresponding letter grades:

    | Grade | Score Range |
    | --- | --- |
    | A++ | 100 |
    | A | 90 - 99 |
    | B | 80 - 89 |
    | C | 70 - 79 |
    | D | 60 - 69 |
    | F | 0 - 59 |

    __Tips__

    - Remember that you learned about conditional statements (`if`, `else if`, and `else`).
    - Remember that you learned about comparison operators (`>`, `<`, `>=`, `<=`, `===`).

    ```javascript
    function getGrade(score) {
        if (score === 100) {
            return 'A++';
        } else if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        } 
    }
    ```
    ```javascript
    console.log(getGrade(96));
    console.log(getGrade(82));
    console.log(getGrade(56));

    >A
    >B
    >F
    ```

3. The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an 'F'.

    Create a function `hasPassingGrade` that takes a student `score` as a parameter. Your function should return `true` if the student has a passing grade and `false` if they do not.

    __Tip__

    - Use the `getGrade` function to get the student's grade. Then check if the grade is passing or not.

    ```javascript
    function hasPassingGrade(score) {
        return getGrade(score) !== 'F';
    }
    ```
    ```javascript
    console.log(hasPassingGrade(100));
    console.log(hasPassingGrade(53));
    console.log(hasPassingGrade(87));

    >true
    >false
    >true
    ```

4. Now that the teacher has all of the information they need, they want to be able to message the student with the results. Create a  `studentMsg` function with `totalScores` and `studentScore` for parameters. The function should return a string representing a message to the student.

    If the student passed the course, the string should follow this format:
    >Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

    If the student failed the course, the string should follow this format:
    >Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

    Replace _average-goes-here_ with the average of the total scores. Replace _grade-goes-here_ with the student's grade.

    __Tips__

    - Use the `getAverage` function to get the class average.
    - Use the `getGrade` function to get the student's grade.
    - Use string concatenation (`+`) to build the message.
    - Be careful with the punctuation and spaces in the message.

    ```javascript
    function studentMsg(totalScore, studentScore){
        if (hasPassingGrade(studentScore)) {
            return 'Class average: ' + getAverage(totalScore) + '. Your grade: ' + getGrade(studentScore) + '. You passed the course.';
        } else {
        return 'Class average: ' + getAverage(totalScore) + '. Your grade: ' + getGrade(studentScore) + '. You failed the course.';
        }
    }
    ```
    ```javascript
    console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

    >Class average: 71.7. Your grade: F. You failed the course.
    ```

