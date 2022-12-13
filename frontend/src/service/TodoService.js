import axios from "axios";

const TODO_URL = "http://localhost:8080/whattodo";

class TodoService {

    getTodoById(id) {
        return axios.get(TODO_URL + '/' + id);
    }

    updateTodo(todo, id) {
        return axios.put(TODO_URL + '/' + id, todo);
    }
}

export default new TodoService()