import React from 'react';
import $ from 'jquery';

export default class AjaxDemoUser extends React.Component{
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        $.ajax({
            url: 'http://jsonplaceholder.typicode.com/users',
            success: (data)=>{
                this.setState({
                    users: data
                })
            }
        })
    }

    render(){
        return(
            <div>
                <h2>AJAX Demo - User Info</h2>
                
                <table>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                    {
                        this.state.users.map((user, index)=>{
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        })  
                    }
                </table>
            </div>
        );
    }
}