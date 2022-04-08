import React, {useState, useEffect} from 'react'
import NavBar from '../../NavBar/NavBar';
import './Register.css'
import Alert from 'react-bootstrap/Alert'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import {Card, Button, Container} from 'react-bootstrap';


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
                    fetch("http://localhost:5000/login", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ username, password }),
                        })
                        .then(response => {
                            return response.json()
                        })
                        .then(data => {
                            localStorage.setItem('token', data.user)
                            navigate('/education')
                        })
                        .catch(error => {
                            alert("signup error")
                            console.log("error occured in fetch")
                            console.log(error)
                        })
                }
            })
            .catch(error => {
                alert("signup error")
                console.log("error occured in fetch")
                console.log(error)
            })

        
    }

    return (
        <div className='register' style={{backgroundColor: '#22A7F0'}}>
        {/* <NavBar/>
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
             */}
             <NavBar/>
             {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
             <Alert.Heading>Errors</Alert.Heading>
             

             {errors.map((error) => {
            
              return(<p>{error}</p>)
            
          })}
           </Alert>}
             <Container className='d-flex align-items-center justify-content-center pt-5' >

             
             <form style={{width:500, backgroundColor: 'white',  marginBottom: 150}} className='p-5 rounded shadow' onSubmit={formSubmitHandler}>
                <h1 className="pageTitle p-2 text-center text-primary">Register</h1>
                <p className="text-center">It's free and only takes a minute!</p>
                {/* <div className="form-group"  style={{marginBottom: 15}}>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group" style={{marginBottom: 15}}>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={e => setLastName(e.target.value)}/>
                </div> */}
                <div class="input-group d-flex align-items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person me-2" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                      </svg>
                      <input type="text" className="form-control form-control-lg" placeholder="First name" name="firstname" onChange={e => setFirstName(e.target.value)}/>
                      <input type="text" className="form-control form-control-lg" placeholder="Last name" name="lastname" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div class="mt-3 input-group d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person me-2" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                    <input type="text" className="form-control form-control-lg" placeholder="User name" name="username" onChange={e => setUsername(e.target.value)}/>
                </div>
                <div class="mt-3 input-group d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope me-2" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    <input type="email" className="form-control form-control-lg" placeholder="Enter email" name="email" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div class="mt-3 input-group d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock me-2" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                      </svg>
                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" name="password" onChange={e => setPassword(e.target.value)}/>
                    <input type="password" className="form-control form-control-lg" placeholder="Re-enter" name="password2" onChange={e => setPassword2(e.target.value)}/>
                </div>
                <div className="mb-3 mt-3 d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary mt-1 px-5">Register</button>
                        <p className="mt-3">Already have an account? 
                            <Link to={`/login`} style={{textDecoration: 'inherit'}}>
                            {` Log In here`}    
                            </Link>
                        </p>
                </div>
            </form>
            </Container>
        </div>
        );
}

export default Register;