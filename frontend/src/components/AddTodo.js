import React, { useState } from 'react';
import { Container, FormGroup, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Label } from 'reactstrap';


const AddTodo = () => {
    
    const initialFormState = {
        title: '',
        description: '',
        done: ''
    };

    const [todo, setTodo] = useState(initialFormState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const  {name, value} = event.target
        setTodo({...todo, [name]:  value})
    }

        const handleSubmit = (event) => {
        event.preventDefault();

        fetch ('http://localhost:8080/whattodo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(todo)
        });
        setTodo(initialFormState);
        navigate('/todos');
    }

    const title = <h2>Add Todo</h2>;

    return (
        <div>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" 
                                onChange={handleChange} autoComplete="title" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" 
                                onChange={handleChange} autoComplete="description" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="done">Done</Label>
                        <Input type="text" name="done" id="done" 
                                onChange={handleChange} autoComplete="done" />
                    </FormGroup>
                    <FormGroup>
                        <br></br>
                        <Button onClick={() => handleSubmit} color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="/todos">Cancel</Link></Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
}

export default AddTodo;