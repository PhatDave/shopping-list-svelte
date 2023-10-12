import API from "$lib/API";

class TodoListAPI extends API {
    url = `https://pocketbase-shoppinglist.site.quack-lab.dev/api/collections/todo_list/records`;
    default_filter = '?perPage=10000&sort=-created';
}

export const todoListAPI = new TodoListAPI();
