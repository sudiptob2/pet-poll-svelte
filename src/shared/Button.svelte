<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>
button {
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
.primary {
    background-color: #d91b42;
    color: white;
}
.secondary{
    background-color: #0cda92;
    color: #ffffff;
}
.flat {
    box-shadow: none;
}
.primary.inverse {
    background-color: white;
    color: #d91b42;
    border: 2px solid #d91b42;
}
.secondary.inverse {
    background-color: white;
    color: #0cda92;
    border: 2px solid #0cda92;
}
</style>