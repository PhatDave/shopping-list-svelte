import API from "$lib/API";
import {env} from "$env/dynamic/public";

class TodoListAPI extends API {
    url = `${env.PUBLIC_TODO_LIST_URL}/records`;
    default_filter = env.PUBLIC_DEFAULT_FILTER;
}

export const todoListAPI = new TodoListAPI();
