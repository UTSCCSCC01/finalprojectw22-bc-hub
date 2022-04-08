import React, {useState, useEffect} from 'react'
import NavBar from '../../NavBar/NavBar';
import './LogIn.css'
import Alert from 'react-bootstrap/Alert'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap';


function LogIn() {
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);
    const { state } = useLocation();
    var defaultMessage = []
    if (state){
        defaultMessage = [state]
    }
    const [errors, setErrors] = useState(defaultMessage)

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
        if (!username.length){
            setErrors(arr => [...arr, "Username cannot be empty"])
        }
        if (!password.length){
            setErrors(arr => [...arr, "Password cannot be empty"])
        }
        if (password.length && username.length){
            fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                })
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    if(data.user){
                        localStorage.setItem('token', data.user)
                        navigate('/education')
                    } else {
                        setErrors(arr => [...arr, "Username or password is incorrect"])
                    }
                })
                .catch(error => {
                    alert("signup error")
                    console.log("error occured in fetch")
                    console.log(error)
                })

        }

        
    }

    const logoutHandler = async (e) => {
        e.preventDefault()

        const r = await fetch("http://localhost:5000/logout", {
            method: "GET",
            headers: {
				'x-access-token': localStorage.getItem('token'),
			},
          })
        
        const d = await r.json()      
        localStorage.removeItem('token')
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
            // <>
            //     <NavBar/>
            //     <div className="Main" style={{'height': '91vh'}}>
            //         <div id='login_page'>  
            //             <form className="Main" onSubmit={formSubmitHandler}>
            //                 <h1 className="text1">BC HUB</h1>
            //                 <h2 className="text2">"Bitcoin is a technological tour de force" -- Bill Gates</h2>
            //                 <h4 className="border"></h4>
            //                 <h3 className="text3">Log In</h3>
            //                 <input type="text" id="username" name="username" className="textbox1" placeholder='User Name' onChange={e => setUsername(e.target.value)}></input><br></br>
            //                 <input type="password" id="password" name="password" className="textbox2" placeholder='Password' onChange={e => setPassword(e.target.value)}></input><br></br>
            //                 <button type="submit" value="Log In" className="button1">Log In</button>
                            
            //             </form>
            //         </div>
            //         {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            //         <Alert.Heading>Errors</Alert.Heading>

            //         {errors.map((error) => {
                    
            //             return(<p>{error}</p>)
                    
            //         })}
            //         </Alert>} 
            //     </div>   
            // </>
            <>
            <div style={{backgroundColor: '#22A7F0', height: '100vh'}} >
                <NavBar/>
                {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Errors</Alert.Heading>
                    {errors.map((error) => {
                        return(<p>{error}</p>)
                    })}
                    </Alert>
                }  
                <div className="d-flex flex-column align-items-center mt-5">
                <div className="card shadow mt-3 w-25">
                    <h1 className="pageTitle p-2 mt-3 text-center text-primary">Log In</h1>
                    <p className="text-center">Sign in to your account</p>
                    <form className="px-2" onSubmit={formSubmitHandler}>
                        <div className="input-group d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person me-2" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                            <input type="" placeholder="Username" className="form-control form-control-lg"  onChange={e => setUsername(e.target.value)}/>
                        </div>

                        <div className="mt-3 input-group d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lock me-2" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                            </svg>
                            <input type="password" placeholder="Password" className="form-control form-control-lg"  onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className="mb-3 mt-3 d-flex flex-column align-items-center">
                        <button type="submit" className="btn btn-primary mt-1 px-5">Log In</button>
                        <p className="mt-3">Don't have an account? 
                            <Link to={`/register`} style={{textDecoration: 'inherit'}}>
                            {` Sign Up here`}    
                            </Link>
                        </p>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </>
            );
}

export default LogIn;