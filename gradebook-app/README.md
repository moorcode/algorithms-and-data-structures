# Algorithms and Data Structures

## Gradebook App

In this mini project, you will get to review JavaScript fundamentals like __functions__, __variables__, __conditionals__ and more by building a gradebook app. This will give you an opportunity to solve small problems and get a better understanding of the basics.

1. A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

    Create a `getAverage` function which takes in an array of test `scores` and returns the average score.The average is calculated by adding up all the scores and dividing by the total number of scores.

    __Tips__

    - You can use a loop to iterate over the `scores` array and add up all the scores.
    - You can use the `length` property to get the total number of scores.



    ```javascript
    function getAverage(scores) {
        let sum = 0;
        for (const score of scores) {
            sum += score;
        }
        return sum / scores.length;
    }
    ```

2. Now the teacher needs your help converting the student score to a letter grade.

    Create a `getGrade` function that takes a number `score` as a parameter. Your function should return a string representing a letter grade based on the score.


    | Grade | Score Range |
    | --- | --- |
    | A++ | 100 |
    | A | 90 - 99 |
    | B | 80 - 89 |
    | C | 70 - 79 |
    | D | 60 - 69 |
    | F | 0 - 59 |


    ```javascript
    function getGrade(score) {
        if (score === 100) {
            return 'A++';
        } else if (score < 100) {
            return 'A';
        } else if (score < 99) {
            return 'B';
        } else if (score < 89) {
            return 'C';
        } else if (score < 79) {
            return 'D';
        } else {
            return 'F';
        } 
    }
    ```