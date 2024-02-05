import * as React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import Login from './Authentification/login';
import Register from './Authentification/Register';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const modeClass = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
  return (
    <div className={modeClass}>
      <div class="form-switch d-flex align-items-end justify-content-end">
        <h4>
          <input class="form-check-input" type="checkbox" onClick={toggleDarkMode} />
          L/D
        </h4>
      </div>


      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path="/list" element={<TaskList />} />
          <Route path="/Add" element={<AddTask />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
