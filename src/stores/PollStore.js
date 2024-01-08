import { writable } from "svelte/store";

const PollStore = writable([
    {
        id: 1,
        question: "What is your favorite color?",
        answerA: "Red",
        answerB: "Blue",
        votesA: 10,
        votesB: 20,
    },
    {
        id: 2,
        question: "What is your favorite animal?",
        answerA: "Dog",
        answerB: "Cat",
        votesA: 13,
        votesB: 15,
    },
]);

export default PollStore;

