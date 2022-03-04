import React from 'react';
import TodoList from './components/TodoList';
import Pomodoro from './components/Pomodoro';


function App() {
    let loginStatus;
    // grab cookie/sessionID
    // conditional rendering of login/signup components and pomodoro clock
    // add current list to database and be able to retrieve a certain day's todo list
    // how to get username from this react element?
    // still need to add login functionality
    // and styling

    // this function only works if document has a single cookie at a time
    function getCookieValue(cookie) {
        let cookieArray = cookie.split('=');
        return cookieArray[1];
    };

    const username = getCookieValue(document.cookie);

    if (document.cookie) {
        loginStatus = 
            <div id='user-bar'>
            <span>Hello, {username}!</span>
            <a href='/signout'><button id='signout-button'>Sign Out</button></a>
            </div>
    } else {
        loginStatus = <div id='login'><a href='./login'><button id='login-button'>Login</button></a></div>
    }
    return (
    <>
        {loginStatus}
        <div className='todo-app'>
            <div>
                <h1>Pomodoro To-Do List</h1>
            </div>
            <div>
                <TodoList />
                <Pomodoro />
            </div>
        </div>
    </>
    )
}

export default App;