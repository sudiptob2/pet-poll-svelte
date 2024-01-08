<script>
import CreatePollForm from "./components/CreatePollForm.svelte";
import Footer from "./components/Footer.svelte";
import Header from "./components/Header.svelte";
import PollList from "./components/PollList.svelte";
import Tabs from "./shared/Tabs.svelte";

// tabs
let items = ["Current Polls", "Add New Poll"];
let activeItem = items[0];
const tabChange = (e) => {
    activeItem = e.detail;
};
const handleAdd = (e) => {
    activeItem = items[0];
};
</script>

<Header />
<main>
    <Tabs items={items} activeItem={activeItem} on:tabChange={tabChange}/>
        {#if activeItem === items[0]}
        	<PollList/>
        {:else if activeItem === items[1]}
        	<CreatePollForm on:addPoll={handleAdd}/>
        {/if}
</main>
<Footer />

<style>
main {
    max-width: 960px;
    margin: 40px auto;
}
</style>
