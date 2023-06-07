import API from "$lib/API";
import type Item from "$lib/Item";
import {env} from "$env/dynamic/public";
import ItemService from "$lib/ItemService";

class ShoppingListAPI extends API {
    private url = `${env.PUBLIC_SHOPPING_LIST_URL}/records`;
    private default_filter = env.PUBLIC_DEFAULT_FILTER;

    async create(item: Item): Promise<Item> {
        return Promise.resolve(item);
    }

    async get_all(): Promise<Item[]> {
        const res = await fetch(`${this.url}${this.default_filter}`);
        const json = await res.json();
        return json.items.map(ItemService.deserialize);
    }

    async get_non_deleted(): Promise<Item[]> {
        const res = await fetch(`${this.url}${this.default_filter}&filter=(deleted=false)`);
        const json = await res.json();
        return json.items.map(ItemService.deserialize);
    }

    async delete(item: Item): Promise<void> {
        item.deleted = true;
        item.deleted_at = new Date();
        await this.update(item);
    }

    async update(item: Item): Promise<Item> {
        const data = {
            content: item.content,
            deleted: item.deleted,
            deleted_at: item.deleted_at,
        }
        const res = await fetch(`${this.url}/${item.id}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            throw new Error("Failed to update item");
        }
        const json = await res.json();
        return ItemService.deserialize(json);
    }
}

export const shoppingListApi = new ShoppingListAPI();
