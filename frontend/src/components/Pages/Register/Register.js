import NavBar from '../../NavBar/NavBar';
import './Register.css'

function Register() {
    return <div id='register_page'>
                <NavBar/>
                <form class="registermain">
                    <h2 class="registerborder"></h2>
                    <h1 class="registertext1">Register</h1>
                    <input class="registertextbox1" type="text" id="firstname" name="firstname" placeholder='First Name'></input>
                    <input class="registertextbox2" type="text" id="lastname" name="lastname" placeholder='Last Name'></input>
                    <input class="registertextbox3" type="text" id="username" name="username" placeholder='User Name'></input>
                    <input class="registertextbox6" type="text" id="email" name="email" placeholder='Email'></input>
                    <input class="registertextbox4" type="password" id="password" name="password" placeholder='Password'></input>
                    <input class="registertextbox5" type="password" id="password" name="password" placeholder='Re-enter Password'></input>
                    <input class="registerbutton" type="submit" value="Sign Up"></input>
                </form>
            </div>
}

export default Register;