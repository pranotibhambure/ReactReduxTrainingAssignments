import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <div>
                <Navigation/>
                <RegistrationForm title='User Registration Form'/>
            </div>
        );
    }
}

function Navigation (){
        return(
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
}

function RegistrationForm(props){
        return(
            <div>
                <h3 className='formHeader'>{props.title}</h3>
                <div>
                    <table>
                        <tr>
                        <td>Name: </td>
                        <td><input type='text' name='name'/></td>
                        </tr>
                        <tr>
                        <td>Contact: </td>
                        <td><input type='text' name='contact'/></td>
                        </tr>
                        <tr>
                        <td className='rightAlign' colSpan='2'><button>Register</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
}

ReactDOM.render(<App/>, document.getElementById('root'));