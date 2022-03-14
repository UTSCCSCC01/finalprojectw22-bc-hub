import NavBar from '../../NavBar/NavBar';
import './LogIn.css'

function LogIn() {
    return <div id='login_page'>
                <NavBar/>
                <form class="Main">
                    <h1 class="text1">BC HUB</h1>
                    <h2 class="text2">"Bitcoin is a technological tour de force" -- Bill Gates</h2>
                    <h4 class="border"></h4>
                    <h3 class="text3">Log In</h3>
                    <input type="text" id="username" name="username" class="textbox1" placeholder='User Name'></input><br></br>
                    <input type="password" id="password" name="password" class="textbox2" placeholder='Password'></input><br></br>
                    <button type="submit" value="Log In" class="button1">Log In</button>
                    
                </form>
            </div>
}

export default LogIn;
