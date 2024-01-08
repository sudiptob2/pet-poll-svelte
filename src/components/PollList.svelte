<script>
    import { flip } from "svelte/animate";
    import { fade, scale } from "svelte/transition";
    import PollStore from "../stores/PollStore.js";
    import PollDetails from "./PollDetails.svelte";
</script>

<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration: 1000}}>
            <PollDetails poll={poll} on:vote/>
        </div>
    {/each}
</div>
<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>
