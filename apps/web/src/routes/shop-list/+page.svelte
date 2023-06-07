<script lang="ts">
    import List from "$components/List.svelte";
    import {shoppingListApi} from "$lib/ShoppingListAPI";

    let api_call_promise = shoppingListApi.get_non_deleted();
</script>

<div class="form-control flex-1 items-center justify-center">
    {#await api_call_promise}
        <p>loading...</p>
    {:then items}
        <List {items} />
    {/await}
</div>
