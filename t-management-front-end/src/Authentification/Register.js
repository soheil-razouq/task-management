import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    //create variables that we need
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // useNavigate is for navigation between the routes
    const navigate = useNavigate();

    // Make an api POST request to create a new user using the axios libraryI 
    const storeUser = async (e) => {
        e.preventDefault();
        // The object sent in the request body includes user data (name, email, password).
        axios.post('http://127.0.0.1:8000/api/user', { name: name, email: email, password: password });
        // After making the request, navigate to the '/list' route.
        navigate('/list');
    }
    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-8">
                            <div className="card shadow-lg p-3 mb-4  rounded" style={{ backgroundColor: "#f5f3f4" }}>
                                <div className="card-header p-3 text-center" style={{ backgroundColor: "#b298dc" }}>
                                    <h5 className="mb-0 ">
                                        register Form
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={storeUser}>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Your Name </label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="text" onChange={(e) => setName(e.target.value)} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Your Email </label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="text" onChange={(e) => setEmail(e.target.value)} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" >Your Password</label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="password" onChange={(e) => setPassword(e.target.value)} required />
                                            </div>
                                        </div>
                                        <br />
                                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                                            <button type="submit" className='btn btn-info col-sm-4 text-center float'>Register</button>
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
};