import API from "$lib/API";
import {env} from "$env/dynamic/public";

class TodoListAPI extends API {
    url = `https://pocketbase-test.site.quack-lab.dev/api/collections/todo_list/records`;
    default_filter = '?perPage=10000&sort=-created';
}

export const todoListAPI = new TodoListAPI();
