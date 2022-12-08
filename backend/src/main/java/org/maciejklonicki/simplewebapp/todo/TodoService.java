package org.maciejklonicki.simplewebapp.todo;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Todo addNewTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public void deleteTodo(Integer id) {
        todoRepository.deleteById(id);
    }

    @Transactional
    public Todo updateTodo(Todo todo) {
        Todo editTodo = todoRepository.findById(todo.getId()).orElseThrow();
        editTodo.setTitle(todo.getTitle());
        editTodo.setDescription(todo.getDescription());
        editTodo.setDone(todo.getDone());
        return editTodo;
    }
}
