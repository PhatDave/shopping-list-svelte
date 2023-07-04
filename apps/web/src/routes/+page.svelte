<script lang="ts">
    import List from "$components/List.svelte";
    import {shoppingListApi} from "$lib/ShoppingListAPI";
    import type Item from "$lib/Item";

    let items: Item[] = [];
    let api_call_promise = shoppingListApi.get_non_deleted();
    api_call_promise.then((data) => {
        items = data;
    });

    let insert_item: string = "";

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

    async function do_insert(event: Event) {
        if (insert_item.endsWith("<div><br></div>")) {
            insert_item = insert_item.slice(0, -15);
        }
        const item = await shoppingListApi.create(insert_item.trim());
        items = [...items, item];
        insert_item = " ";
    }
</script>

<template>
    <div class="form-control flex-1 items-start">
        {#await api_call_promise}
            <p>loading...</p>
        {:then it}
            <List {items}
                  on:delete_item={delete_item}
                  on:update_item={update_item}/>
        {/await}
    </div>
    <div class="form-control justify-center text-center content-center">
        <div bind:innerHTML={insert_item}
             class="btn btn-primary text-xl"
             on:focusin={insert_item = ""}
             on:focusout={do_insert}
             on:keyup={e => e.which === 13 && do_insert(e)}
             contenteditable></div>
    </div>
</template>
