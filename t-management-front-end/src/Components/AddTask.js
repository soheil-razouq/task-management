import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddTask() {
    //create variables using useState
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [errorTitle, setErrorTitle]=useState();
    const [tasks, setTasks] = useState([]);
    //useNavigate for navigated between the routes
    const navigate = useNavigate();
    
    //call the function fo get data whene tha page is loaded
    useEffect(() => {
        getTasks();
    }, [])

    //This function is for geting all tasks from data base by the api address and stock it in a variable
    const getTasks = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks')
        setTasks(response.data);
    };

    //this function allow us to checking a task title if exist
    //title should be unique 
    const store = async (e) => {
        e.preventDefault();
        // Check if a task with the same title already exists
        const taskExists = tasks.some((tsk) => tsk.title === title);
        //if is it exist, then we show a error mesage
        if (taskExists) {
            setErrorTitle("This title already exists");
        } else {
        //if not then we Create the new task by passing data, after that we comeback to the main page 
            await axios.post('http://127.0.0.1:8000/api/task', { title: title, description: description });
            setErrorTitle('');
            navigate('/list');
        }
    };
    

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12 col-xl-10">
                            <div className="card shadow-lg p-3 mb-5  rounded" style={{ backgroundColor: "#f5f3f4" }}>
                                <div className="card-header p-3 text-center" style={{ backgroundColor: "#b298dc" }}>
                                    <h5 className="mb-0 ">
                                        Add a Task
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={store}>
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label">Title</label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} required />
                                                <span className='text-danger'>{errorTitle}</span>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="form-group row">
                                            <label className="col-sm-2 col-form-label" >Description</label>
                                            <div className="col-sm-10">
                                                <input className='form-control' type="text" onChange={(e) => setDescription(e.target.value)} required />
                                            </div>
                                        </div>
                                        <br />
                                        <button type="submit" className='btn btn-block mx-1 btn-primary mb-4'>Add Task</button>
                                        <button type="submit" className="btn btn-secondary btn-block mb-4">
                                            <Link to='/list' className='link-light link-underline-opacity-0 mx-1'>Annuler</Link>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
