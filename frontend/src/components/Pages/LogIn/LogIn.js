import React, {useState, useEffect} from 'react'
import NavBar from '../../NavBar/NavBar';
import './LogIn.css'
import Alert from 'react-bootstrap/Alert'

function LogIn() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState([])

    useEffect(() => {
        if(errors.length === 0) {
            setShow(false)
        } else {
            setShow(true)
        }
        
      }, [errors]);

    const formSubmitHandler = (e) => {
        setErrors([])
        e.preventDefault()
        if(username === "") {
            setErrors(arr => [...arr, "Username is required"])
        }
        if(password === "") {
            setErrors(arr => [...arr, "Password is required"])
        }

    //     fetch("http://localhost:5000/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ username, password }),
    //   })
    //   .then(response => {
    //       console.log(response);
    //       console.log("then fetch");
    //   })
    //   .catch(error => {
    //       console.log("error occured in fetch")
    //       console.log(error)
    //   })
    }

    const logoutHandler = (e) => {
        e.preventDefault()

        fetch("http://localhost:5000/logout", {
            method: "GET",
            credentials: "include",
          })
          .then(response => {
              console.log(response);
              console.log("then fetch");
          })
          .catch(error => {
              console.log("error occured in fetch")
              console.log(error)
          })
    }

    const userInfoHandler = (e) => {
        e.preventDefault()

        fetch("http://localhost:5000/user", {
            method: "GET"
          })
          .then(response => {
              console.log(response);
              console.log("then fetch");
          })
          .catch(error => {
              console.log("error occured in fetch")
              console.log(error)
          })
    }


    return (
            <>
                <NavBar/>
                <div id='login_page'>  
                    <form class="Main" onSubmit={formSubmitHandler}>
                        <h1 class="text1">BC HUB</h1>
                        <h2 class="text2">"Bitcoin is a technological tour de force" -- Bill Gates</h2>
                        <h4 class="border"></h4>
                        <h3 class="text3">Log In</h3>
                        <input type="text" id="username" name="username" class="textbox1" placeholder='User Name' onChange={e => setUsername(e.target.value)}></input><br></br>
                        <input type="password" id="password" name="password" class="textbox2" placeholder='Password' onChange={e => setPassword(e.target.value)}></input><br></br>
                        <button type="submit" value="Log In" class="button1">Log In</button>
                        
                    </form>
                    {/* <form onSubmit={logoutHandler}>
                        <button type="submit" value="Log Out">Log Out</button>
                    </form>
                    <form onSubmit={userInfoHandler}>
                        <button type="submit" value="user info">User info</button>
                    </form> */}
                </div>
                {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Errors</Alert.Heading>

                {errors.map((error) => {
                
                    return(<p>{error}</p>)
                
                })}
                </Alert>}    
            </>
            );
}

export default LogIn;
