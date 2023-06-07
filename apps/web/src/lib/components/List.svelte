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
                    <td class="md:min-w-[70vw] md:max-w-[70vw] overflow-x-auto text-start" contenteditable
                        on:focusout={update_item(item)} bind:innerHTML={item.content}></td>
                    <td>
                        <div class="form-control text-sm">
                            <span>2023-05-13</span>
                            <span class="opacity-75 text-xs">13:54:12</span>
                        </div>
                    </td>
                    <td>
                        <button class="btn rounded-xl p-5 text-center content-center btn-outline btn-error md:btn-sm max-sm:btn-xs"
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
