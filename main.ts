// Using If / Else Statement

import inquirer from 'inquirer';

const quiz: {
    Question1: string,
    Question2: string,
    Question3: string,
    Question4: string,
    Question5: string,
} = await inquirer.prompt([
    {
        name: 'Question1',
        type: 'list',
        message: "What is TypeScript primarily used for?",
        choices: ["Memory Management", "Dynamic Typing", "Static Typing", "Asynchronous operations"]
    },
    {
        name: 'Question2',
        type: 'list',
        message: "Which of the following is NOT a valid TypeScript data type?",
        choices: ["void", "any", "dynamic", "tuple"]
    },
    {
        name: 'Question3',
        type: 'list',
        message: " How do you denote a variable as readonly in TypeScript?",
        choices: ["const", "static", "readonly", "fixed"]
    },
    {
        name: 'Question4',
        type: 'list',
        message: "How do you specify that a function does not return anything in TypeScript?",
        choices: ["function myFunc(): undefined", "function myFunc(): void", "function myFunc(): null", "function myFunc(): None"]
    },
    {
        name: 'Question5',
        type: 'list',
        message: "How do you define a custom type in TypeScript?",
        choices: ["interface", "typedef", "type", "Both A and C"]
    }
]);

 let score: number = 0;

// Using If / ELse

if (quiz.Question1 === "Static Typing"){
    console.log("1. Correct!")
    ++score
} else {
    console.log("1. Incorrect!")
};
if (quiz.Question2 === "dynamic"){
    console.log("2. Correct!")
    ++score
} else {
    console.log("2. Incorrect!")
};
if (quiz.Question3 === "readonly"){
    console.log("3. Correct!")
    ++score
} else {
    console.log("3. Incorrect!")
};
if (quiz.Question4 === "function myFunc(): void"){
    console.log("4. Correct!")
    ++score
} else {
    console.log("4. Incorrect!")
};
if (quiz.Question5 === "Both A and C"){
    console.log("5. Correct!")
    ++score
} else {
    console.log("5. Incorrect!")
};

console.log(score);

