import Item from "$lib/Item";

export default class ItemService {
    static deserialize(input: Record<string, string>): Item {
        let item: Item = new Item();
        item.id = input.id;
        item.content = input.content;
        item.deleted = Boolean(input.deleted);
        item.deleted_at = new Date(input.deleted_at);
        item.created = new Date(input.created);
        item.updated = new Date(input.updated);
        return item;
    }

    static create(content: string): Item {
        const item: Item = new Item();
        item.content = content;
        // Do post to API
        // Then deserialize with API response

        // Fetch (POST) to API
        // res.json => deserialize
        // Return new item
        return item;
    }

    static update(item: Item): Item {
        return item;
    }

    static delete(item: Item): Item {
        return item;
    }
}
