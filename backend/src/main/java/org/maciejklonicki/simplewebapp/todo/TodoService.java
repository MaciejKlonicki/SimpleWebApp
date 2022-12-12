package org.maciejklonicki.simplewebapp.todo;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public void deleteTodo(Integer id) {
        todoRepository.deleteById(id);
    }

    public Todo addNewTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public Todo updateTodo(Todo todo, Integer id) {
        Optional<Todo> optionalTodo = todoRepository.findById(id);
        Todo oldTodo = optionalTodo.get();
        oldTodo.setTitle(todo.getTitle());
        oldTodo.setDescription(todo.getDescription());
        oldTodo.setDone(todo.getDone());
        return todoRepository.save(oldTodo);
    }
}
