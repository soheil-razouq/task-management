import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckLg } from 'react-bootstrap-icons';


function TaskList() {
    //create variables that we need
    const [tasks, setTasks] = useState([])

    //call the function fo get data whene tha page is loaded
    useEffect(() => {
        getTasks();
    }, [])

    //This function is for geting all tasks from data base by the api address and stock it in a variable
    const getTasks = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks')
        setTasks(response.data);
    };

    //This function allow us to delete a specific task by passing an id as a parameter 
    const deleteTask = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/task/' + id)
        getTasks();
    }

    //This function allow us to change a specific status task by passing an id and status as a parameter avter that i called the function getTasks to get the new data
    const handelUpdateStatus = async (id, status) => {
        await axios.put('http://127.0.0.1:8000/api/task/' + id, {
            status: !status
        })
        getTasks();
    };

    return (
        <>

            <Link className="btn btn-warning mb-2 float-end" to={"/"}>Sign out</Link>
            <section className="vh-100" >
                <div className="md-12 py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-12 col-xl-10">
                            <div className="card shadow-lg p-3 mb-5  rounded">
                                <div className="card-header p-3 text-center" style={{ backgroundColor: "#b298dc" }}>
                                    <h5 className="mb-0 ">
                                        Task List
                                    </h5>
                                </div>
                                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ backgroundColor: "#f5f3f4" }}>
                                    <table className="table mb-0" data-bs-spy="scroll" >
                                        <thead>
                                            <tr>
                                                <th scope="col">Task ID</th>
                                                <th scope="col">Task Title</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tasks.map((tsk) => {
                                                return (
                                                    <tr className="fw-normal" key={tsk.id}>
                                                        <th>
                                                            <span>{tsk.id}</span>
                                                        </th>
                                                        <td className="align-middle">
                                                            <span>{tsk.title}</span>
                                                        </td>
                                                        <td className="align-middle">
                                                            {/* <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6> */}
                                                            {tsk.description}
                                                        </td>
                                                        <td className="align-middle">
                                                            <button className='btn' onClick={() => handelUpdateStatus(tsk.id, tsk.status)}>
                                                                <span>
                                                                    {tsk.status ? <CheckLg color="green" size={30} /> : <CheckLg color="gray" size={30} />}
                                                                </span>
                                                            </button>
                                                        </td>
                                                        <td className="align-middle">
                                                            <button className='btn btn-danger' onClick={() => deleteTask(tsk.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                    <div className="p-3">
                                        <Link className="btn btn-primary mb-2 float-end" to={"/Add"}>New Task</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TaskList;