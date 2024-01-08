<script>
import {
  createEventDispatcher
} from "svelte";
const dispatch = createEventDispatcher();

export let items;
export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
        <li on:click={() => dispatch('tabChange', item)} on:keydown={() => {}}>
            <div class:active={item === activeItem}> {item}</div>
        </li>
        {/each}
        </div>

<style>
.tabs {
    margin-bottom: 40px;
}

ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;

}

.active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
}
</style>
