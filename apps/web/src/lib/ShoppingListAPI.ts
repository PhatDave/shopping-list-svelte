import API from "$lib/API";
import type Item from "$lib/Item";
import {env} from "$env/dynamic/public";
import ItemService from "$lib/ItemService";

class ShoppingListAPI extends API {
    private url = `${env.PUBLIC_SHOPPING_LIST_URL}/records`;
    private default_filter = env.PUBLIC_DEFAULT_FILTER;

    create(item: Item): Promise<Item> {
        return Promise.resolve(item);
    }

    async get_all(): Promise<Item[]> {
        const res = await fetch(`${this.url}${this.default_filter}`);
        const json = await res.json();
        return json.items.map(ItemService.deserialize);
    }

    async get_non_deleted(): Promise<Item[]> {
        const res = await fetch(`${this.url}${this.default_filter}&filter=`);
        const json = await res.json();
        return json.items.map(ItemService.deserialize);
    }
}

export const shoppingListApi = new ShoppingListAPI();
