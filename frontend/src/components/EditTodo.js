import React, { useState, useEffect } from 'react'
import { Container, FormGroup, Form, Button } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import TodoService from '../service/TodoService';
import { useParams, useNavigate } from 'react-router-dom';

const EditTodo= (props) => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [done, setDone] = useState('');
  
    useEffect(() => {
      TodoService.getTodoById(id).then((res) => {
        let todo = res.data;
        setTitle(todo.title);
        setDescription(todo.description);
        setDone(todo.done);
      });
    }, []);
  
    const updateTodo = (e) => {
        e.preventDefault();
        let todo = { title: title, description: description, done: done };
        TodoService.updateTodo(todo, id).then((res) => {
        navigate('/todos')
      });
    }
  
    const changeTitleHandler= (event) => {
      setTitle(event.target.value);
    }
  
    const changeDescriptionHandler= (event) => {
      setDescription(event.target.value);
    }
  
    const changeDoneHandler= (event) => {
      setDone(event.target.value);
    }

    const cancel = () => {
        navigate('/todos')
      };
  

    const titles = <h2>Update Todo</h2>;

    return (
        <Container>
            {titles}
            <Form>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input type="text" name="title" value={title} onChange={changeTitleHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description:</Label>
                    <Input type="text" name="description" value={description} onChange={changeDescriptionHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="done">Done:</Label>
                    <Input type="text" name="done" value={done} onChange={changeDoneHandler} />
                </FormGroup>
                <FormGroup>
                    <Button style={{marginTop: "10px"}} onClick={updateTodo}>Update Todo</Button>{' '}
                    <Button style={{marginTop: "10px"}} onClick={cancel}>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default EditTodo;