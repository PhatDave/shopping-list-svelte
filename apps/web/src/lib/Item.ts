export default class Item {
    id: string = "";
    content: string = "";
    deleted: boolean = false;
    deleted_at: Date = new Date();
    created: Date = new Date();

    constructor() {
    }

    static deserialize(input: any): Item {
        let item = new Item();
        item.id = input.id;
        item.content = input.content;
        item.deleted = input.deleted;
        item.deleted_at = input.deleted_at;
        item.created = input.created;
        return item;
    }

    static new(content: string): Item {
        const item = new Item();
        item.content = content;
        // Do post to API
        // Then deserialize with API response
        return item;
    }
}
