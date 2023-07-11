import API from "$lib/API";
import {env} from "$env/dynamic/public";

class ShoppingListAPI extends API {
    url = `https://pocketbase-test.site.quack-lab.dev/api/collections/shopping_list/records`;
    default_filter = '?perPage=10000&sort=+created';
}

export const shoppingListApi = new ShoppingListAPI();
