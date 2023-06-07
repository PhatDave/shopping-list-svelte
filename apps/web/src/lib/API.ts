import type Item from "$lib/Item";

export default abstract class API {
    abstract get_non_deleted(): Promise<Item[]>;
    abstract get_all(): Promise<Item[]>;
    abstract create(item: Item): Promise<Item>;
}
