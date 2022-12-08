package org.maciejklonicki.simplewebapp.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/whattodo")
@CrossOrigin("http://localhost:3000")
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.getAllTodos();
    }

    @DeleteMapping("/{id}")
    public void deleteTodo (@PathVariable Integer id) {
        todoService.deleteTodo(id);
    }

    @PostMapping
    public Todo addNewTodo(@RequestBody Todo todo) {
        return todoService.addNewTodo(todo);
    }

    @PutMapping("/")
    public Todo updateTodo (@RequestBody Todo todo) {
        return todoService.updateTodo(todo);
    }

}
