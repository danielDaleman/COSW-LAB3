import React, {Component} from 'react';
import logo from './logo.svg';
import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import {Login} from "./component/Login";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import {Todo} from './Todo';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {App} from './App';

export class TodoApp extends React.Component {

    constructor(props) {
        super(props);		
    }

    render() {												
		
		//Save data
		localStorage.setItem('user', "cosw");
		localStorage.setItem('password', "cosw");		

		var isLoggedIn = localStorage.getItem('isLoggedIn');				
		
        const LoginView = () => (
                      <Login/>
                );

               const TodoView = () => (
                     <div>
                         <App/>
                     </div>
                 );

        return (
            <Router>
                            <div className="App">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo"/>
                                    <h1 className="App-title">TODO React App</h1>
                                </header>

                                <br/>
                                <br/>

                                <ul>
                                    <li><Link to="/">Login</Link></li>
                                    <li><Link to="/todo">Todo</Link></li>
                                </ul>

                                <div>
                                    <Route exact path="/" component={LoginView}/>
									{isLoggedIn && <Route path="/todo" component={TodoView}/>}
                                </div>
                            </div>
                        </Router>
        )
    }

}

export default TodoApp;