<script>
    import { tweened } from "svelte/motion";
    import Button from "../shared/Button.svelte";
    import Card from "../shared/Card.svelte";
    import PollStore from "../stores/PollStore";
    export let poll;

    console.log(poll);

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.round((100 / totalVotes) * poll.votesA) || 0;
    $: percentB = Math.round((100 / totalVotes) * poll.votesB) || 0;

    // tweened values
    const tweenedA = tweened(0);
    const tweenedB = tweened(0);
    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);
    

    function handleVote(option, id) {
        PollStore.update((polls) => {
            return polls.map((poll) => {
                if (poll.id === id) {
                    if (option === "a") {
                        poll.votesA++;
                    } else if (option === "b") {
                        poll.votesB++;
                    }
                }
                return poll;
            });
        });
    }
    const handleDelete = (id) => {
        PollStore.update((polls) => {
            return polls.filter((poll) => poll.id !== id);
        });
    };
</script>
<Card>
    <div class= "poll">
        <h3>{poll.question}</h3>
        <p> Total Votes: {totalVotes}</p>
        <div class ="answers" on:click={() => handleVote('a', poll.id)} on:keydown={() => {}}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class ="answers" on:click={() => handleVote('b', poll.id)} on:keydown={() => {}}>
            <div class="percent percent-b "  style="width: {$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button on:click={() => handleDelete(poll.id)}>Delete</Button>
        </div>
    </div>
</Card>


<style>
    h3{
        margin: 0;
        color: #555;
    }
    p{
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }
    .answers{
        background: #fafafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }
    .answers:hover{
        opacity: 0.6;
    }
    span{
        display: inline-block;
        padding: 10px 20px;
    }
    .percent{
        position: absolute;
        height: 100%;
        box-sizing: border-box;
    }
    .percent-a{
        border-left: 4px solid #d85a5a;
        background: rgba(208, 90, 90, 0.5);
    }
    .percent-b{
        border-left: 4px solid #72e58e;
        background: rgba(114, 229, 142, 0.5);
    }
</style>