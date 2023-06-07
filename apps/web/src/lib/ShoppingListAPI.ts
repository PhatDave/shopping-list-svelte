import API from "$lib/API";
import {env} from "$env/dynamic/public";

class ShoppingListAPI extends API {
    url = `${env.PUBLIC_SHOPPING_LIST_URL}/records`;
    default_filter = env.PUBLIC_DEFAULT_FILTER;
}

export const shoppingListApi = new ShoppingListAPI();
