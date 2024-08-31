function getAverage(scores) {
    let sum = 0;
    for (const score of scores) {
        sum += score;
    }
    return (sum / scores.length).toFixed(2);
}

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

function hasPassingGrade(score) {
    return getGrade(score) !== 'F';
}

function studentMsg(totalScore, studentScore){
    if (hasPassingGrade(studentScore)) {
        return 'Class average: ' + getAverage(totalScore) + '. Your grade: ' + getGrade(studentScore) + '. You passed the course.';
    } else {
    return 'Class average: ' + getAverage(totalScore) + '. Your grade: ' + getGrade(studentScore) + '. You failed the course.';
    }
}

let scoreInput = prompt("Please enter each student's score separated by a comma: ", '92, 88, 12, 77, 57, 100, 67, 38, 97, 89');
scoreInput = scoreInput.split(',');

let totalScore = scoreInput.map(Number);

let studentScore = prompt("Now, please enter a student's score: ", '37');
studentScore = parseInt(studentScore);

studentMsg(totalScore, studentScore)