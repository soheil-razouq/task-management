import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    //create variables that we need
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    //call the function fo get data whene tha page is loaded
    useEffect(() => {
        getUsers();
    }, [])

    //This function is for geting all users from data base by the api address then stock it in a variable
    const getUsers = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/users')
        setUsers(response.data);
    };

    // This is the main function for handling sign-in.
    const getSignIn = async (e) => {
        e.preventDefault();
        // Check if any user in the 'users' array matches the provided email and password.
        const userExist = users.map((usr) => usr.email === email && usr.password === password);
        // If a matching user is found, navigate to the '/list' route.
        if (userExist) {
            navigate('/list');
        } else {
        // If no matching user is found, display an alert message.
            alert("there is no user, you can register now")
        }
    };

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8">
                            <div className="card shadow-lg p-3 mb-4  rounded" style={{ backgroundColor: "#f5f3f4" }}>
                                <div className="card-header p-3 text-center" style={{ backgroundColor: "#b298dc" }}>
                                    <h5 className="mb-0 ">
                                        Sign in Form
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={getSignIn}>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Email </label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="text" onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" >Password</label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            <button type="submit" className='btn btn-primary col-sm-4 text-center float'>Sign in</button>
                                        </div>
                                        <br />
                                        <div>
                                            <div class="text-center">
                                                <p>Not a member? <Link to={"/Register" }>Register</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Login;
