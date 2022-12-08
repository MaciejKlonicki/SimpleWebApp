package org.maciejklonicki.simplewebapp.todo;

import jakarta.persistence.*;

@Entity
public class Todo {

    @Id
    @SequenceGenerator(
            name = "todo_id_sequence",
            sequenceName = "todo_id_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "todo_id_sequence"
    )
    private Integer id;
    private String title;
    private String description;
    private String done;

    public Todo(Integer id, String title, String description, String done) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.done = done;
    }

    public Todo() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDone() {
        return done;
    }

    public void setDone(String done) {
        this.done = done;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", done='" + done + '\'' +
                '}';
    }
}
