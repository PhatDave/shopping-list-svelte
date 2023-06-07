export default class Item {
    id: string = "";
    content: string = "";
    deleted: boolean = false;
    deleted_at: Date = new Date();
    created: Date = new Date();

    constructor() {
    }
}
