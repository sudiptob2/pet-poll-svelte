<script>
import {
  createEventDispatcher
} from "svelte";
import Button from "../shared/Button.svelte";
import PollStore from "../stores/PollStore";
let dispatch = createEventDispatcher();
let fields = {
    question: "",
    answerA: "",
    answerB: "",
};
let errors = {
    question: "",
    answerA: "",
    answerB: "",
};
let valid = false;

const submitHandler = (e) => {
    valid = true;
    if (fields.question.trim().length < 5) {
        errors.question = "Question must be at least 5 characters long";
        valid = false;
    } else {
        errors.question = "";
    }
    if (fields.answerA.trim().length < 1) {
        errors.answerA = "answerA cannot be empty";
        valid = false;
    } else {
        errors.answerA = "";
    }
    if (fields.answerB.trim().length < 1) {
        errors.answerB = "answerB cannot be empty";
        valid = false;
    } else {
        errors.answerB = "";
    }

    if (valid) {

        let poll = {
            ...fields,
            votesA: 0,
            votesB: 0,
            id: Math.floor(Math.random() * 1000000),
        };

        PollStore.update((polls) => {
            return [poll, ...polls];
        });

        dispatch("addPoll");
    } else {
        console.log("Form is invalid");
        console.log(errors);

    }
};
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" name="question" bind:value={fields.question}>
        <div class="errors">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" name="answer-a"  bind:value={fields.answerA}>
        <div class="errors">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" name="answer-b"  bind:value={fields.answerB}>
        <div class="errors">{errors.answerB}</div>
    </div>
    <Button type='secondary' flat={true}>Add Poll</Button>
</form>

<style>
form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
}

.form-field {
    margin: 18px auto;
}

input {
    width: 100%;
    border-radius: 6px;
}

label {
    margin: 10px auto;
    text-align: left;
}

.errors {
    color: red;
    font-size: 0.8rem;
    text-align: left;
}
</style>
