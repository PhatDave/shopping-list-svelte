import API from "$lib/API";
import type Item from "$lib/Item";
import {env} from "$env/dynamic/public";

export default class ShoppingListAPI extends API {
    private static url = `${env.PUBLIC_SHOPPING_LIST_URL}/records`;
    private static default_filter = env.PUBLIC_DEFAULT_FILTER;

    create(item: Item): Promise<Item> {
        return Promise.resolve(item);
    }

    async get_all(): Promise<Item[]> {
        return [];
    }

    async get_non_deleted(): Promise<Item[]> {
        return [];
    }

}
