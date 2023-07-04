<script lang="ts">
    import type Item from "$lib/Item";
    import {createEventDispatcher} from 'svelte';

    let dispatcher = createEventDispatcher();

    export let items: Item[];

    function delete_item(item: Item) {
        dispatcher('delete_item', item);
    }

    function update_item(item: Item) {
        dispatcher('update_item', item);
    }

    function get_updated_date(item: Item) {
        let date = new Date(item.updated);
        return date.toLocaleDateString();
    }

    function get_updated_time(item: Item) {
        let date = new Date(item.updated);
        return date.toLocaleTimeString();
    }
</script>

<template>
    <div class="overflow-x-auto md:px-8 py-1 biig">
        <table class="table table-zebra w-full max-sm:text-sm">
            <thead>
            <tr>
                <th>Content</th>
                <th>Created</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {#each items as item, i (item.id)}
                <tr>
                    <td class="md:min-w-[70vw] md:max-w-[70vw] overflow-x-auto text-start capitalize" contenteditable
                        on:focusout={update_item(item)} bind:innerHTML={item.content}></td>
                    <td>
                        <div class="form-control text-sm">
                            <span>{get_updated_date(item)}</span>
                            <span class="opacity-75 text-xs">{get_updated_time(item)}</span>
                        </div>
                    </td>
                    <td>
                        <button class="btn rounded-xl p-5 text-center content-center btn-outline btn-error md:btn-sm max-sm:btn-xs normal-case"
                                on:click={delete_item(item)}>DELETE
                        </button>
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
</template>

<style>
    div.biig {
        width: 95vw;
    }
</style>
