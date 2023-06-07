<script lang="ts">
    import List from "$components/List.svelte";
    import {shoppingListApi} from "$lib/ShoppingListAPI";
    import type Item from "$lib/Item";

    let items: Item[] = [];
    let api_call_promise = shoppingListApi.get_non_deleted();
    api_call_promise.then((data) => {
        items = data;
    });

    async function delete_item(event: CustomEvent<Item>) {
        const item = event.detail;
        await shoppingListApi.delete(item);
        items = items.filter((i) => i.id !== item.id);
    }

    async function update_item(event: CustomEvent<Item>) {
        const item = event.detail;
        const new_item = await shoppingListApi.update(item);
        items = items.map((i) => i.id === new_item.id ? new_item : i);
    }
</script>

<div class="form-control flex-1 items-center justify-center">
    {#await api_call_promise}
        <p>loading...</p>
    {:then it}
        <List {items}
              on:delete_item={delete_item}
              on:update_item={update_item}/>
    {/await}
</div>
