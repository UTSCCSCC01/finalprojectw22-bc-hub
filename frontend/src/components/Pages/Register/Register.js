import React, {useState, useEffect} from 'react'
import NavBar from '../../NavBar/NavBar';
import './Register.css'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [username, setUsername] = useState("")
    const [show, setShow] = useState(false);
    const [errors, setErrors] = useState([])


    useEffect(() => {
        if(errors.length === 0) {
            setShow(false)
            console.log("no errors")
        } else {
            setShow(true)
        }
        
      }, [errors]);

    const formSubmitHandler = (e) => {
        setErrors([])
        e.preventDefault()
        if(firstName === "") {
            setErrors(arr => [...arr, "First name is required"])
        }
        if(lastName === "") {
            setErrors(arr => [...arr, "Last name is required"])
        }
        if(username === "") {
            setErrors(arr => [...arr, "Username is required"])
        }
        if(email === "") {
            setErrors(arr => [...arr, "Email is required"])
        }
        if(password !== "" && password2 !== "" && password !== password2 ) {
            setErrors(arr => [...arr, "Passwords don't match"])
        }
        else{
            if(password === "" && password2 !== "" || (password === "" && password2 === "")){
                setErrors(arr => [...arr, "Password is required"])
            }
            if(password !== "" && password2 === ""){
                setErrors(arr => [...arr, "Please confirm password"])
            }
        }

        console.log("signing up")
        fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: firstName + " " + lastName, email, username, password }),
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if(data.status === 200){
                    navigate('/login')
                }
            })
            .catch(error => {
                alert("signup error")
                console.log("error occured in fetch")
                console.log(error)
            })

        
    }

    return (
        <div style={{backgroundColor: '#8506fc'}}>
        <NavBar/>
        {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
             <Alert.Heading>Errors</Alert.Heading>
             

             {errors.map((error) => {
            
              return(<p>{error}</p>)
            
          })}
           </Alert>}
           
            <div id='register_page'>
                
                <form class="registermain" onSubmit={formSubmitHandler}>
                    <h2 class="registerborder"></h2>
                    <h1 class="registertext1">Register</h1>

                    <input class="registertextbox1" type="text" id="firstname" name="firstname" placeholder='First Name' onChange={e => setFirstName(e.target.value)}></input>
                    <input class="registertextbox2" type="text" id="lastname" name="lastname" placeholder='Last Name' onChange={e => setLastName(e.target.value)}></input>
                    <input class="registertextbox3" type="text" id="username" name="username" placeholder='User Name' onChange={e => setUsername(e.target.value)}></input>
                    <input class="registertextbox6" type="email" id="email" name="email" placeholder='Email' onChange={e => setEmail(e.target.value)}></input>
                    <input class="registertextbox4" type="password" id="password" name="password" placeholder='Password' onChange={e => setPassword(e.target.value)}></input>
                    <input class="registertextbox5" type="password" id="password" name="password" placeholder='Re-enter Password' onChange={e => setPassword2(e.target.value)}></input>
                    <input class="registerbutton" type="submit" value="Sign Up"></input>
                </form>
            </div>
            
        </div>
        );
}

export default Register;