import React from 'react';
import $ from 'jquery';

export default class AjaxDemoToDo extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: []
        }
    }

    componentDidMount(){
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/todos',
            success: (data)=>{
                this.setState({
                    todos: data
                })
            }
        })
    }

    render(){
        return(
            <div>
                <h2>AJAX Demo - ToDo List</h2>
                <hr/>
                <ul>
                    {
                        this.state.todos.map((todo, index)=>{
                            return <li>{todo.title}</li>
                        })  
                    }
                </ul>
            </div>
        );
    }
}