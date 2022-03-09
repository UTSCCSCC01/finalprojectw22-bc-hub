import NavBar from '../../NavBar/NavBar';

function Register() {
    return <div id='register_page'>
                <NavBar/>
                <form>
                    <label for="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname"></input><br></br>
                    <label for="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="lastname"></input><br></br>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username"></input><br></br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password"></input><br></br>
                    <input type="submit" value="Sign Up"></input>
                </form>
            </div>
}

export default Register;