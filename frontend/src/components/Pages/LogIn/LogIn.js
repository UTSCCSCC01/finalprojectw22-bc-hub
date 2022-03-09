import NavBar from '../../NavBar/NavBar';

function LogIn() {
    return <div id='login_page'>
                <NavBar/>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"></input><br></br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"></input><br></br>
                    <input type="submit" value="Log In"></input>
                </form>
            </div>
}

export default LogIn;
